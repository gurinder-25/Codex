// src/App.tsx
import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, Container, Grid, Typography, Box } from '@mui/material'

import { theme } from './theme'
import CodeEditor from './components/CodeEditor'
import InputBox from './components/InputBox'
import OutputBox from './components/OutputBox'
import ExecuteButton from './components/ExecuteButton'
import LanguageSelector from './components/LanguageSelector'

import { executeCode, SUPPORTED_LANGUAGES } from './services/piston'

interface Language {
  language: string
  version: string
  aliases: string[]
}

function App() {
  // Use the hard-coded list straight-away
  const languages: Language[] = SUPPORTED_LANGUAGES

  // Default to the first language in that list
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    languages[0].language
  )

  const [code, setCode] = useState<string>(`// Welcome to Codex!
// Select a language and start coding

console.log("Hello, World!");`)
  const [input, setInput] = useState<string>('')
  const [output, setOutput] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language)
    setOutput('')
    setError('')

    // Simple template switch
    const templates: Record<string, string> = {
      javascript: `// Welcome to Codex!
console.log("Hello, World!");`,
      python: `# Welcome to Codex!
print("Hello, World!")`,
      cpp: `// Welcome to Codex!
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      java: `// Welcome to Codex!
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      c: `// Welcome to Codex!
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
    }
    if (templates[language]) {
      setCode(templates[language])
    }
  }

  const handleExecute = async () => {
    if (!code.trim()) {
      setError('Please enter some code to execute')
      setOutput('')
      return
    }

    setIsLoading(true)
    setError('')
    setOutput('')

    try {
      const result = await executeCode(selectedLanguage, code, input)
      if (result.run.stderr) {
        setError(result.run.stderr)
      } else {
        setOutput(result.run.stdout || 'Program executed successfully with no output.')
      }
    } catch {
      setError('Failed to execute code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={false} sx={{ height: '100vh', py: 2 }}>
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700, mb: 1 }}>
            CODEX
          </Typography>
          <Typography variant="subtitle1" sx={{ color: '#000000' }}>
            Online Code Compiler & Executor
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ height: 'calc(100vh - 120px)' }}>
          {/* Left Side */}
          <Grid item xs={12} md={7}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
              <LanguageSelector
                selectedLanguage={selectedLanguage}
                onLanguageChange={handleLanguageChange}
                languages={languages}
              />
              <Box sx={{ flexGrow: 1, minHeight: 0 }}>
                <CodeEditor
                  value={code}
                  onChange={setCode}
                  language={selectedLanguage}
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 2 }}>
              <ExecuteButton onClick={handleExecute} isLoading={isLoading} />
              <InputBox value={input} onChange={setInput} />
              <Box sx={{ flexGrow: 1 }}>
                <OutputBox output={output} error={error} isLoading={isLoading} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  )
}

export default App