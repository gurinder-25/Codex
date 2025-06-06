import React from 'react';
import { Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface ExecuteButtonProps {
  onClick: () => void;
  isLoading: boolean;
}

const ExecuteButton: React.FC<ExecuteButtonProps> = ({ onClick, isLoading }) => {
  return (
    <Button
      variant="contained"
      size="large"
      onClick={onClick}
      disabled={isLoading}
      startIcon={<PlayArrowIcon />}
      fullWidth
      sx={{
        backgroundColor: '#F0A9FF',
        color: '#000',
        fontWeight: 700,
        fontSize: '18px',
        py: 2,
        border: '4px solid #7E52A0',
        borderRadius: '12px',
        boxShadow: '0 8px 16px rgba(126, 82, 160, 0.3)',
        '&:hover': {
          backgroundColor: '#E090FF',
          boxShadow: '0 12px 20px rgba(126, 82, 160, 0.4)',
          transform: 'translateY(-2px)',
        },
        '&:active': {
          transform: 'translateY(0)',
          boxShadow: '0 4px 8px rgba(126, 82, 160, 0.3)',
        },
        '&:disabled': {
          backgroundColor: '#E0E0E0',
          color: '#999',
          border: '4px solid #CCC',
        },
        transition: 'all 0.2s ease-in-out',
      }}
    >
      {isLoading ? 'Executing...' : 'Execute'}
    </Button>
  );
};

export default ExecuteButton;