# ALU Regex Data Extraction
This is JavaScript project of regular expressions for extracting various types of data from text strings.

This project provides a set of functions that use regular expressions to extract and validate different types of data from text. It's designed to handle various data formats and common edge cases.

## Extracted Data Types
- Email addresses
- URLs
- Phone Numbers
- Credit Card Numbers
- Time formats (12h/24h)
- Hashtags
- Currency amounts

## Setup Instructions

Clone the repository
```bash
  git clone https://github.com/IH-honnette/alu_regex-data-extraction-IH-honette.git
  cd  alu_regex-data-extraction-IH-honette
```
Project structure 

```bash 
alu_regex-data-extraction-IH-honette/
├── README.md
├── main.js                  # Main regex functions
├── test_regex.js            # Basic test suite
└── demo.js                  # Demo application
```
Install Node.js (if not already installed)

Download and install from Node.js website

Run the tests
node test_regex.js


## Files Description

main.js: Contains all the regex extraction functions
test_regex.js: Contains test cases to demonstrate the functionality of each regex pattern


## Sample Usage

``` bash 

javascriptconst { extractAllData } = require('./regex_extractor');
const text = `
Contact me at user@example.com or call (123) 456-7890.
Check out our website at https://www.example.com.
The product costs $19.99.
`;
const extractedData = extractAllData(text);
console.log(extractedData);

```

### Author
Marie Honette