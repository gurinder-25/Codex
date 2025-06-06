import React from 'react';
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Language {
  language: string;
  version: string;
  aliases: string[];
}

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  languages: Language[];
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
  languages,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    onLanguageChange(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={selectedLanguage}
        label="Language"
        onChange={handleChange}
        sx={{
          backgroundColor: '#2D1B3D',
          color: '#FFFFFF',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#000',
            borderWidth: '2px',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7E52A0',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#7E52A0',
          },
          '& .MuiSvgIcon-root': {
            color: '#FFFFFF',
          },
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: '#2D1B3D',
              '& .MuiMenuItem-root': {
                color: '#FFFFFF',
                '&:hover': {
                  backgroundColor: '#7E52A0',
                },
                '&.Mui-selected': {
                  backgroundColor: '#7E52A0',
                  '&:hover': {
                    backgroundColor: '#5A2D7A',
                  },
                },
              },
            },
          },
        }}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.language} value={lang.language}>
            {lang.language} ({lang.version})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;