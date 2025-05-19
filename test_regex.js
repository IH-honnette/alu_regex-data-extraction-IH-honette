
import fs from 'fs';
import { extractData, extractAllData, patterns } from './main.js';

// Read test data file
const readTestData = () => {
  try {
    return fs.readFileSync('./test_samples.txt', 'utf8');
  } catch (error) {
    console.error('Error reading test file:', error.message);
    return '';
  }
};

// Test a specific pattern with test cases
const testPattern = (patternName, pattern, testCases, expectedMatches) => {
  console.log(`\n🔍 Testing ${patternName} pattern:`);
  console.log('-'.repeat(50));
  
  let allPassed = true;
  
  for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const result = extractData(testCase, pattern);
    const expected = expectedMatches[i];
    
    const isPassing = Array.isArray(expected) 
      ? JSON.stringify(result) === JSON.stringify(expected)
      : result.length === expected;
    
    if (isPassing) {
      console.log(`✅ Test ${i+1} passed: "${testCase}"`);
      if (result.length > 0) {
        console.log(`   Found: ${result.join(', ')}`);
      }
    } else {
      console.log(`❌ Test ${i+1} failed: "${testCase}"`);
      console.log(`   Expected: ${expected}`);
      console.log(`   Found: ${result.join(', ')}`);
      allPassed = false;
    }
  }
  
  console.log('-'.repeat(50));
  console.log(`Pattern ${patternName}: ${allPassed ? '✅ All tests passed' : '❌ Some tests failed'}`);
  
  return allPassed;
};

// Run tests for all patterns
const runAllTests = () => {
  console.log('🧪 RUNNING REGEX PATTERN TESTS 🧪');
  console.log('='.repeat(50));
  
  // Test email pattern
  const emailTests = [
    'Contact us at user@example.com for more information.',
    'My work email is firstname.lastname@company.co.uk and my personal is user@example.com.',
    'Invalid email: user@example',
    'No email here'
  ];
  const emailExpected = [
    ['user@example.com'],
    ['firstname.lastname@company.co.uk', 'user@example.com'],
    [],
    []
  ];
  const emailResult = testPattern('email', patterns.email, emailTests, emailExpected);
  
  // Test URL pattern
  const urlTests = [
    'Visit our website at https://www.example.com for more details.',
    'Check out https://subdomain.example.org/page for the latest updates.',
    'Invalid URL: https://example',
    'No URL here'
  ];
  const urlExpected = [
    ['https://www.example.com'],
    ['https://subdomain.example.org/page'],
    [],
    []
  ];
  const urlResult = testPattern('url', patterns.url, urlTests, urlExpected);
  
  // Test phone pattern
  const phoneTests = [
    'Call us at (123) 456-7890 for customer support.',
    'Office: 123-456-7890, Cell: 123.456.7890',
    'Invalid phone: 123-456',
    'No phone number here'
  ];
  const phoneExpected = [
    ['(123) 456-7890'],
    ['123-456-7890', '123.456.7890'],
    [],
    []
  ];
  const phoneResult = testPattern('phone', patterns.phone, phoneTests, phoneExpected);
  
  // Test currency pattern
  const currencyTests = [
    'The product costs $19.99.',
    'Total amount: $1,234.56',
    'Invalid currency: $19.',
    'No currency here'
  ];
  const currencyExpected = [
    ['$19.99'],
    ['$1,234.56'],
    [],
    []
  ];
  const currencyResult = testPattern('currency', patterns.currency, currencyTests, currencyExpected);
  
  // Test HTML tag pattern
  const htmlTests = [
    '<p>This is a paragraph.</p>',
    '<div class="example">Content</div>',
    '<img src="image.jpg" alt="description">',
    'No HTML tags here'
  ];
  const htmlExpected = [
    ['<p>', '</p>'],
    ['<div class="example">', '</div>'],
    ['<img src="image.jpg" alt="description">'],
    []
  ];
  const htmlResult = testPattern('htmlTag', patterns.htmlTag, htmlTests, htmlExpected);
  
  // Test time pattern
  const timeTests = [
    'Meeting starts at 14:30 today.',
    'The store opens at 9:00 AM and closes at 6:30 PM.',
    'Invalid time: 25:70',
    'No time here'
  ];
  const timeExpected = [
    ['14:30'],
    ['9:00 AM', '6:30 PM'],
    [],
    []
  ];
  const timeResult = testPattern('time', patterns.time, timeTests, timeExpected);
  
  // Test with sample file
  console.log('\n🔍 Testing with sample file data:');
  console.log('-'.repeat(50));
  const sampleData = readTestData();
  if (sampleData) {
    const results = extractAllData(sampleData);
    console.log('Extraction results from sample file:');
    for (const [type, matches] of Object.entries(results)) {
      console.log(`${type}: ${matches.length > 0 ? '✅' : '❌'} (${matches.length} matches found)`);
      if (matches.length > 0) {
        // Show the first 5 matches at most
        console.log(`   Sample matches: ${matches.slice(0, 5).join(', ')}${matches.length > 5 ? '...' : ''}`);
      }
    }
  }
  
  // Summary
  console.log('\n📊 TEST SUMMARY 📊');
  console.log('='.repeat(50));
  console.log(`Email pattern: ${emailResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`URL pattern: ${urlResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Phone pattern: ${phoneResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Currency pattern: ${currencyResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`HTML tag pattern: ${htmlResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log(`Time pattern: ${timeResult ? '✅ PASSED' : '❌ FAILED'}`);
  console.log('='.repeat(50));
};

// Run all tests
runAllTests();