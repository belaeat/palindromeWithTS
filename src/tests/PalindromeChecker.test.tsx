import { describe, it, expect, vi } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import PalindromeChecker from "../components/PalindromeChecker"
import * as palindromeUtils from "../utils/palindrome"

describe("PalindromeChecker component", () => {
  it("renders the component correctly", () => {
    render(<PalindromeChecker />)

    // Check if the input field is rendered
    expect(screen.getByLabelText(/enter text to check/i)).toBeInTheDocument()

    // Check if the button is rendered
    expect(screen.getByRole("button", { name: /check palindrome/i })).toBeInTheDocument()

    // Check if examples are rendered
    expect(screen.getByText(/try these examples/i)).toBeInTheDocument()
    expect(screen.getByText(/madam, in eden, i'm adam/i)).toBeInTheDocument()
  })

  it("shows the correct result when checking a palindrome", () => {
    render(<PalindromeChecker />)

    const input = screen.getByLabelText(/enter text to check/i)

    // Test with a palindrome
    fireEvent.change(input, { target: { value: "racecar" } })

    // Check if the success message is displayed
    expect(screen.getByText(/"racecar" is a palindrome/i)).toBeInTheDocument()

    // Test with a non-palindrome
    fireEvent.change(input, { target: { value: "hello" } })

    // Check if the info message is displayed
    expect(screen.getByText(/"hello" is not a palindrome/i)).toBeInTheDocument()
  })

  it("loads an example when clicked", () => {
    render(<PalindromeChecker />)

    // Click on an example
    fireEvent.click(screen.getByText(/a man, a plan, a canal, panama/i))

    // Check if the input field is updated with the example
    const input = screen.getByLabelText(/enter text to check/i) as HTMLInputElement
    expect(input.value).toBe("A man, a plan, a canal, Panama")

    // Check if the result is displayed
    expect(screen.getByText(/"A man, a plan, a canal, Panama" is a palindrome/i)).toBeInTheDocument()
  })

  it("calls isPalindrome function with the correct argument", () => {
    // Spy on the isPalindrome function
    const isPalindromeSpy = vi.spyOn(palindromeUtils, "isPalindrome")

    render(<PalindromeChecker />)

    const input = screen.getByLabelText(/enter text to check/i)
    const testText = "No lemon, no melon"

    // Enter text in the input field
    fireEvent.change(input, { target: { value: testText } })

    // Check if isPalindrome was called with the correct argument
    expect(isPalindromeSpy).toHaveBeenCalledWith(testText)
  })
})

