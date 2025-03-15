"use client"

import { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Alert from "@mui/material/Alert"
import { isPalindrome } from "../utils/palindrome"

const PalindromeChecker = () => {
  const [text, setText] = useState("")
  const [result, setResult] = useState<boolean | null>(null)
  const [examples, setExamples] = useState<string[]>([
    "Madam, in Eden, I'm Adam",
    "A man, a plan, a canal, Panama",
    "No lemon, no melon",
  ])

  const handleCheck = () => {
    if (text.trim() === "") {
      setResult(null)
      return
    }
    setResult(isPalindrome(text))
  }

  const handleExampleClick = (example: string) => {
    setText(example)
  }

  useEffect(() => {
    if (text.trim() !== "") {
      handleCheck()
    }
  }, [text])

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 3 }}>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Enter text to check"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a word or phrase"
        />
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <Button variant="contained" color="primary" onClick={handleCheck} disabled={text.trim() === ""}>
          Check Palindrome
        </Button>
      </Box>

      {result !== null && (
        <Alert severity={result ? "success" : "info"} sx={{ mb: 3 }}>
          <Typography variant="body1">
            "{text}" is {result ? "" : "not "}a palindrome.
          </Typography>
        </Alert>
      )}

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          Try these examples (or try any random sentences):
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {examples.map((example, index) => (
            <Button key={index} variant="outlined" color="secondary" onClick={() => handleExampleClick(example)}>
              {example}
            </Button>
          ))}
        </Box>
      </Box>
    </Paper>
  )
}

export default PalindromeChecker

