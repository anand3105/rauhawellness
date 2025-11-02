import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, instagramHandle, skinType, productPreference } = body;

    // Validation
    if (!name || !instagramHandle || !skinType || !productPreference) {
      return NextResponse.json(
        { error: 'Missing required fields: name, instagramHandle, skinType, and productPreference are required' },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { error: 'Please provide either email or phone number' },
        { status: 400 }
      );
    }

    // Validate Instagram handle
    if (instagramHandle.length < 1) {
      return NextResponse.json(
        { error: 'Please provide a valid Instagram handle' },
        { status: 400 }
      );
    }

    // Validate skin type
    const validSkinTypes = ['dry', 'oily', 'combination', 'sensitive', 'mature'];
    if (!validSkinTypes.includes(skinType.toLowerCase())) {
      return NextResponse.json(
        { error: 'Invalid skin type' },
        { status: 400 }
      );
    }

    // Validate product preference
    const validProducts = ['kumkumadi', 'rosehip'];
    if (!validProducts.includes(productPreference.toLowerCase())) {
      return NextResponse.json(
        { error: 'Invalid product preference' },
        { status: 400 }
      );
    }

    // Check for duplicate entries by email or phone
    const existingEntry = await prisma.giveaway_entries.findFirst({
      where: {
        OR: [
          email ? { email } : {},
          phone ? { phone } : {},
        ].filter(obj => Object.keys(obj).length > 0),
      },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: 'You have already entered the giveaway with this email or phone number' },
        { status: 409 }
      );
    }

    // Create giveaway entry
    const entry = await prisma.giveaway_entries.create({
      data: {
        name,
        email: email || null,
        phone: phone || null,
        instagram_handle: instagramHandle.startsWith('@') ? instagramHandle : `@${instagramHandle}`,
        skin_type: skinType.toLowerCase(),
        product_preference: productPreference.toLowerCase(),
        entry_source: 'website',
      },
    });

    // Optional: Also add to community_members if not already exists
    try {
      const existingMember = await prisma.community_members.findFirst({
        where: {
          OR: [
            email ? { email } : {},
            phone ? { phone } : {},
          ].filter(obj => Object.keys(obj).length > 0),
        },
      });

      if (!existingMember) {
        await prisma.community_members.create({
          data: {
            email: email || null,
            phone: phone || null,
            source: 'giveaway',
          },
        });
      }
    } catch (communityError) {
      // Continue even if community member creation fails
      console.error('Failed to add to community:', communityError);
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Entry submitted successfully! Complete the Instagram steps to be eligible.',
        entryId: entry.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Giveaway entry error:', error);
    return NextResponse.json(
      { error: 'Failed to submit entry. Please try again.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET endpoint to retrieve giveaway entries (admin only - add authentication in production)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100');
    const skinType = searchParams.get('skinType');
    const productPreference = searchParams.get('productPreference');

    const whereClause: any = {};
    if (skinType) whereClause.skin_type = skinType.toLowerCase();
    if (productPreference) whereClause.product_preference = productPreference.toLowerCase();

    const entries = await prisma.giveaway_entries.findMany({
      where: whereClause,
      orderBy: { created_at: 'desc' },
      take: limit,
    });

    const totalCount = await prisma.giveaway_entries.count({
      where: whereClause,
    });

    return NextResponse.json({
      entries,
      total: totalCount,
      limit,
    });
  } catch (error) {
    console.error('Failed to fetch entries:', error);
    return NextResponse.json(
      { error: 'Failed to fetch entries' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
