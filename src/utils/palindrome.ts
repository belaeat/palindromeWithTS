
export function isPalindrome(str: string): boolean {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  
    // Check if the string is empty or has only one character
    if (cleanStr.length <= 1) {
      return true
    }
  
    // Compare the string with its reverse
    const reversedStr = cleanStr.split("").reverse().join("")
    return cleanStr === reversedStr
  }
  
  