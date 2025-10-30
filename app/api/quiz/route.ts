import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { sendQuizNotification, sendQuizConfirmation } from '@/lib/email/sender';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

interface QuizData {
  email: string;
  skinType: string;
  skinConcerns: string[];
  skinGoals: string[];
  ageRange: string;
  recommendedProduct: string;
  timestamp: string;
}

const DATA_DIR = path.join(process.cwd(), 'data');
const QUIZ_FILE = path.join(DATA_DIR, 'quiz-responses.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Read existing quiz responses
async function readQuizData(): Promise<QuizData[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(QUIZ_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write quiz responses
async function writeQuizData(data: QuizData[]) {
  await ensureDataDir();
  await fs.writeFile(QUIZ_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    console.log('📝 Quiz API received:', {
      email: body.email || 'MISSING',
      recommendedProduct: body.recommendedProduct || body.recommended_product || 'MISSING',
      bodyKeys: Object.keys(body)
    });

    // Validate required fields
    const recommendedProduct = body.recommendedProduct || body.recommended_product;
    if (!body.email || !recommendedProduct) {
      console.error('❌ Validation failed:', {
        hasEmail: !!body.email,
        hasRecommendedProduct: !!recommendedProduct
      });
      return NextResponse.json(
        { error: 'Missing required fields: email and recommendedProduct are required' },
        { status: 400 }
      );
    }

    // Read existing data
    const quizData = await readQuizData();

    // Add new response
    const newResponse: QuizData = {
      email: body.email,
      skinType: body.skin_type || body.skinType || '',
      skinConcerns: body.skin_concerns || body.skinConcerns || [],
      skinGoals: body.skin_goals || body.skinGoals || [],
      ageRange: body.age_range || body.ageRange || '',
      recommendedProduct: recommendedProduct,
      timestamp: new Date().toISOString(),
    };

    console.log('✅ Quiz data validated successfully');

    quizData.push(newResponse);

    // Save updated data
    await writeQuizData(quizData);
    console.log('✅ Quiz data saved successfully');

    // Send email notifications (don't wait for them, don't block the response)
    console.log('📤 Sending email notifications...');

    // 1. Notify admin
    sendQuizNotification(newResponse).catch(error => {
      console.error('❌ Failed to send admin notification:', error);
    });

    // 2. Send confirmation to customer
    sendQuizConfirmation(newResponse).catch(error => {
      console.error('❌ Failed to send customer confirmation:', error);
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Quiz response saved successfully',
        data: newResponse
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error saving quiz response:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz response' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quizData = await readQuizData();

    return NextResponse.json(
      {
        success: true,
        count: quizData.length,
        data: quizData
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error reading quiz data:', error);
    return NextResponse.json(
      { error: 'Failed to read quiz data' },
      { status: 500 }
    );
  }
}
