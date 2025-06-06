import React from 'react';
import { Editor } from '@monaco-editor/react';
import { Box, Paper } from '@mui/material';

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language }) => {
  const handleEditorChange = (value: string | undefined) => {
    onChange(value || '');
  };

  const getMonacoLanguage = (lang: string) => {
    switch (lang.toLowerCase()) {
      case 'javascript':
        return 'javascript';
      case 'python':
        return 'python';
      case 'cpp':
        return 'cpp';
      case 'java':
        return 'java';
      case 'c':
        return 'c';
      default:
        return 'javascript';
    }
  };

  const handleEditorDidMount = (editor: any, monaco: any) => {
    // Define a custom theme that matches our dark background
    monaco.editor.defineTheme('codex-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#2D1B3D', // Same as Input/Output boxes
        'editor.foreground': '#FFFFFF',
        'editorLineNumber.foreground': '#B0B0B0',
        'editorCursor.foreground': '#FFFFFF',
        'editor.selectionBackground': '#7E52A0',
        'editor.lineHighlightBackground': '#3D2B4D',
      }
    });
    
    // Apply the custom theme
    monaco.editor.setTheme('codex-dark');
  };

  return (
    <Paper
      elevation={0}
      sx={{
        height: '100%',
        border: '2px solid #000',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#2D1B3D',
      }}
    >
      <Editor
        height="100%"
        language={getMonacoLanguage(language)}
        value={value}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          fontFamily: 'Monaco, Consolas, "Courier New", monospace',
        }}
      />
    </Paper>
  );
};

export default CodeEditor;