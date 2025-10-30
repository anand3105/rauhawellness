#!/usr/bin/env node

/**
 * Test script for API endpoints
 *
 * This script tests the quiz and waitlist API endpoints
 * to ensure they're working correctly.
 *
 * Usage: node scripts/test-api.js
 */

const testQuizAPI = async () => {
  console.log('\n🧪 Testing Quiz API...\n');

  try {
    const response = await fetch('http://localhost:3000/api/quiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test@example.com',
        skinType: 'Combination',
        skinConcerns: ['Dullness', 'Pigmentation'],
        skinGoals: ['Radiance', 'Even Tone'],
        ageRange: '26-35',
        recommendedProduct: 'Kumkumadi Oil'
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Quiz API test successful!');
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Quiz API test failed!');
      console.log('Status:', response.status);
      console.log('Error:', data);
    }
  } catch (error) {
    console.error('❌ Quiz API test error:', error.message);
  }
};

const testWaitlistAPI = async () => {
  console.log('\n🧪 Testing Waitlist API...\n');

  try {
    const response = await fetch('http://localhost:3000/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'waitlist-test@example.com',
        selectedProduct: 'Kumkumadi',
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log('✅ Waitlist API test successful!');
      console.log('Response:', JSON.stringify(data, null, 2));
    } else {
      console.log('❌ Waitlist API test failed!');
      console.log('Status:', response.status);
      console.log('Error:', data);
    }
  } catch (error) {
    console.error('❌ Waitlist API test error:', error.message);
  }
};

// Run tests
console.log('==========================================');
console.log('🚀 Rauha Wellness API Test Suite');
console.log('==========================================');
console.log('\nMake sure your dev server is running:');
console.log('  npm run dev\n');

const runTests = async () => {
  await testQuizAPI();
  await testWaitlistAPI();

  console.log('\n==========================================');
  console.log('✨ Tests completed!');
  console.log('==========================================\n');

  console.log('📊 Check your data files:');
  console.log('  - data/quiz-responses.json');
  console.log('  - data/waitlist.json\n');

  console.log('📧 Check your email (if configured):');
  console.log('  - anandjnu007@gmail.com\n');
};

runTests();
