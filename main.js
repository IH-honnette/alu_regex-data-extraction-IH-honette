
export const patterns = {
    // Email addresses: matches standard emails and those with domain extensions
    email: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/g,
    
    // URLs: matches http, https URLs with optional subdomains and paths
    url: /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g,
    
    // Phone numbers: matches formats like (123) 456-7890, 123-456-7890, 123.456.7890
    phone: /(?:\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]?\d{4}/g,
    
    // Currency amounts: matches formats like $19.99, $1,234.56
    currency: /\$\d{1,3}(?:,\d{3})*(?:\.\d{2})?/g,
    
    // HTML tags: matches opening and closing tags with optional attributes
    htmlTag: /<\/?[a-zA-Z]+(?:\s+[a-zA-Z]+(?:=(?:"[^"]*"|'[^']*'|[^'"\s>]*))?)*\s*\/?>/g,
    
    // Time formats: matches both 12-hour (2:30 PM) and 24-hour (14:30) formats
    time: /(?:(?:(?:0?[1-9]|1[0-2]):[0-5][0-9]\s*(?:AM|PM|am|pm))|(?:(?:[01]?[0-9]|2[0-3]):[0-5][0-9]))/g
  };
  
  /**
   * Extract data from text based on the provided pattern
   */
  export const extractData = (text, pattern) => {
    return text.match(pattern) || [];
  };
  
  /**
   * Extract all supported data types from text
   */
  export const extractAllData = (text) => {
    const results = {};
    
    for (const [type, pattern] of Object.entries(patterns)) {
      results[type] = extractData(text, pattern);
    }
    
    return results;
  };
  
  /**
   * Process a file and extract all data types
   */
  export const processFile = (fileContent) => {
    return extractAllData(fileContent);
  };