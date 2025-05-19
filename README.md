# ALU Regex Data Extraction
This is JavaScript project of regular expressions for extracting various types of data from text strings.

This project provides a set of functions that use regular expressions to extract and validate different types of data from text. It's designed to handle various data formats and common edge cases.


## Extracted Data Types
- Email addresses
- URLs
- Phone Numbers
- Credit Card Numbers
- Time formats (12h/24h)
- HTML tags
- Hashtags
- Currency amounts

## Setup Instructions

Clone the repository
```bash
git clone https://github.com/IH-honette/alu_regex-data-extraction-IH-honette.git
cd alu_regex-data-extraction-IH-honette
```

Project structure 
```bash 
alu_regex-data-extraction-IH-honette/
├── README.md
├── main.js                  # Main regex functions
├── test_regex.js            # Test suite with performance tests
└── demo.js                  # Demo application
```

Install Node.js (if not already installed)
Download and install from Node.js website

## Usage

### Basic Usage
```javascript
import { extractAllData } from './main.js';

const text = `
Contact me at user@example.com or call (123) 456-7890.
Check out our website at https://www.example.com.
The product costs $19.99.
`;

const extractedData = extractAllData(text);
console.log(extractedData);
```

### Running Tests
```bash
node test_regex.js
```

### Running Demo
```bash
node demo.js
```

## Author
Marie Honette