import { NextRequest, NextResponse } from 'next/server';
import { sendQuizNotification, sendQuizConfirmation } from '@/lib/email/sender';
import { prisma } from '@/lib/prisma';

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

export async function POST(request: NextRequest) {
  console.log('\n');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║           📝 QUIZ SUBMISSION RECEIVED                     ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');

  try {
    const body = await request.json();

    console.log('Received data:', {
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

    // Save to database
    try {
      const skinType = body.skin_type || body.skinType || '';
      const skinConcerns = body.skin_concerns || body.skinConcerns || [];
      const skinGoals = body.skin_goals || body.skinGoals || [];
      const ageRange = body.age_range || body.ageRange || '';

      await prisma.quiz_results.create({
        data: {
          email: body.email,
          skin_type: skinType,
          skin_concerns: Array.isArray(skinConcerns) ? skinConcerns.join(', ') : String(skinConcerns || ''),
          skin_goals: Array.isArray(skinGoals) ? skinGoals.join(', ') : String(skinGoals || ''),
          age_range: ageRange,
          recommended_product: recommendedProduct,
        },
      });
      console.log('✅ Quiz result saved to database');
    } catch (dbError: any) {
      console.error('❌ Database error:', dbError);
      // Continue even if database save fails
    }

    // Create response data
    const newResponse: QuizData = {
      email: body.email,
      skinType: body.skin_type || body.skinType || '',
      skinConcerns: body.skin_concerns || body.skinConcerns || [],
      skinGoals: body.skin_goals || body.skinGoals || [],
      ageRange: body.age_range || body.ageRange || '',
      recommendedProduct: recommendedProduct,
      timestamp: new Date().toISOString(),
    };

    console.log('✅ Quiz data validated and formatted');
    console.log(JSON.stringify(newResponse, null, 2));
    console.log('');

    // Send emails
    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║           📧 SENDING EMAIL NOTIFICATIONS                  ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log('');

    let adminSuccess = false;
    let customerSuccess = false;

    // 1. Send to admin
    try {
      console.log('→ Sending admin notification...\n');
      adminSuccess = await sendQuizNotification(newResponse);
      if (adminSuccess) {
        console.log('✅ Admin notification: SUCCESS\n');
      } else {
        console.error('⚠️ Admin notification: FAILED (returned false)\n');
      }
    } catch (error: any) {
      console.error('❌ Admin notification: EXCEPTION');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      console.error('');
    }

    // 2. Send to customer
    try {
      console.log('→ Sending customer confirmation...\n');
      customerSuccess = await sendQuizConfirmation(newResponse);
      if (customerSuccess) {
        console.log('✅ Customer confirmation: SUCCESS\n');
      } else {
        console.error('⚠️ Customer confirmation: FAILED (returned false)\n');
      }
    } catch (error: any) {
      console.error('❌ Customer confirmation: EXCEPTION');
      console.error('Error:', error.message);
      console.error('Stack:', error.stack);
      console.error('');
    }

    console.log('╔═══════════════════════════════════════════════════════════╗');
    console.log('║           📊 EMAIL SUMMARY                                ║');
    console.log('╚═══════════════════════════════════════════════════════════╝');
    console.log('Admin notification:', adminSuccess ? '✅ SENT' : '❌ FAILED');
    console.log('Customer confirmation:', customerSuccess ? '✅ SENT' : '❌ FAILED');
    console.log('');

    return NextResponse.json(
      {
        success: true,
        message: 'Quiz response saved successfully',
        data: newResponse,
        emailStatus: {
          adminNotification: adminSuccess,
          customerConfirmation: customerSuccess
        }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('❌ Error processing quiz response:', error);
    console.error('Stack:', error.stack);
    return NextResponse.json(
      { error: 'Failed to save quiz response', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const quizResults = await prisma.quiz_results.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return NextResponse.json(
      {
        success: true,
        count: quizResults.length,
        data: quizResults
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('❌ Error fetching quiz results:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quiz results' },
      { status: 500 }
    );
  }
}
