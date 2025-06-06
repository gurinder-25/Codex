import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface OutputBoxProps {
  output: string;
  error: string;
  isLoading: boolean;
}

const OutputBox: React.FC<OutputBoxProps> = ({ output, error, isLoading }) => {
  const displayText = isLoading 
    ? 'Executing...' 
    : error 
    ? `Error:\n${error}` 
    : output || 'Click Execute to run your code';

  const textColor = error ? '#FF6B6B' : isLoading ? '#F0A9FF' : '#FFFFFF';

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 600, color: '#7E52A0' }}>
        Output
      </Typography>
      <TextField
        multiline
        rows={8}
        fullWidth
        value={displayText}
        InputProps={{
          readOnly: true,
        }}
        sx={{
          flexGrow: 1,
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#2D1B3D',
            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
            fontSize: '14px',
            color: textColor,
            height: '100%',
            '& fieldset': {
              borderColor: '#000',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#000',
            },
            '& .MuiInputBase-input': {
              height: '100% !important',
              overflow: 'auto !important',
            },
          },
        }}
      />
    </Box>
  );
};

export default OutputBox;