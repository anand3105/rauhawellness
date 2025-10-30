const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const QUIZ_FILE = path.join(DATA_DIR, 'quiz-responses.json');
const WAITLIST_FILE = path.join(DATA_DIR, 'waitlist.json');

console.log('\n=================================');
console.log('   RAUHA WELLNESS DATA VIEWER');
console.log('=================================\n');

// Read and display quiz responses
try {
  if (fs.existsSync(QUIZ_FILE)) {
    const quizData = JSON.parse(fs.readFileSync(QUIZ_FILE, 'utf-8'));
    console.log(`📊 QUIZ RESPONSES: ${quizData.length} total\n`);

    if (quizData.length > 0) {
      console.log('Recent submissions:');
      quizData.slice(-5).forEach((entry, index) => {
        console.log(`\n  ${index + 1}. ${entry.email}`);
        console.log(`     Skin Type: ${entry.skinType}`);
        console.log(`     Recommended: ${entry.recommendedProduct}`);
        console.log(`     Date: ${new Date(entry.timestamp).toLocaleString()}`);
      });
    } else {
      console.log('  No quiz responses yet.');
    }
  } else {
    console.log('📊 QUIZ RESPONSES: 0 total (no data file yet)');
  }
} catch (error) {
  console.error('Error reading quiz data:', error.message);
}

console.log('\n---------------------------------\n');

// Read and display waitlist
try {
  if (fs.existsSync(WAITLIST_FILE)) {
    const waitlistData = JSON.parse(fs.readFileSync(WAITLIST_FILE, 'utf-8'));
    console.log(`📧 WAITLIST ENTRIES: ${waitlistData.length} total\n`);

    if (waitlistData.length > 0) {
      // Group by product
      const byProduct = waitlistData.reduce((acc, entry) => {
        acc[entry.selectedProduct] = (acc[entry.selectedProduct] || 0) + 1;
        return acc;
      }, {});

      console.log('Product Interest:');
      Object.entries(byProduct).forEach(([product, count]) => {
        console.log(`  ${product}: ${count} interested`);
      });

      console.log('\nRecent sign-ups:');
      waitlistData.slice(-5).forEach((entry, index) => {
        console.log(`\n  ${index + 1}. ${entry.email}`);
        console.log(`     Product: ${entry.selectedProduct}`);
        console.log(`     Date: ${new Date(entry.timestamp).toLocaleString()}`);
      });
    } else {
      console.log('  No waitlist entries yet.');
    }
  } else {
    console.log('📧 WAITLIST ENTRIES: 0 total (no data file yet)');
  }
} catch (error) {
  console.error('Error reading waitlist data:', error.message);
}

console.log('\n=================================\n');
