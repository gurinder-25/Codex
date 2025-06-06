import React from 'react';
import { TextField, Typography, Box } from '@mui/material';

interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ value, onChange }) => {
  return (
    <Box>
      <Typography variant="subtitle1\" sx={{ mb: 1, fontWeight: 600, color: '#7E52A0' }}>
        Input (stdin)
      </Typography>
      <TextField
        multiline
        rows={8}
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter your input here..."
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#2D1B3D',
            color: '#FFFFFF',
            fontFamily: 'Monaco, Consolas, "Courier New", monospace',
            '& fieldset': {
              borderColor: '#000',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: '#000',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#7E52A0',
            },
            '& input::placeholder': {
              color: '#B0B0B0',
              opacity: 1,
            },
            '& textarea::placeholder': {
              color: '#B0B0B0',
              opacity: 1,
            },
          },
        }}
      />
    </Box>
  );
};

export default InputBox;