import { describe, it, expect } from "vitest"
import { isPalindrome } from "../utils/palindrome"

describe("isPalindrome function", () => {
  it("should return true for simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true)
    expect(isPalindrome("level")).toBe(true)
    expect(isPalindrome("deified")).toBe(true)
  })

  it("should handle palindromes with spaces", () => {
    expect(isPalindrome("never odd or even")).toBe(true)
    expect(isPalindrome("step on no pets")).toBe(true)
  })

  it("should handle palindromes with punctuation and mixed case", () => {
    expect(isPalindrome("Madam, in Eden, I'm Adam")).toBe(true)
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true)
    expect(isPalindrome("No lemon, no melon")).toBe(true)
  })

  it("should return false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false)
    expect(isPalindrome("palindrome")).toBe(false)
    expect(isPalindrome("This is not a palindrome")).toBe(false)
  })

  it("should handle edge cases", () => {
    expect(isPalindrome("")).toBe(true) // Empty string is considered a palindrome
    expect(isPalindrome("a")).toBe(true) // Single character is a palindrome
    expect(isPalindrome("  ")).toBe(true) // Only spaces is considered a palindrome
  })
})

