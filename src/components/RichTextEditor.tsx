import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Box, Button, Grid } from '@mui/material';

const RichTextEditor = () => {
  const [content, setContent] = useState<string>('');
  const [isSaved, setIsSaved] = useState<boolean>(true);

  // Load content from localStorage ONLY when the user manually saves
  useEffect(() => {
    const savedContent = localStorage.getItem('richTextData');
    if (savedContent) {
      setIsSaved(true);
    }

    // Warn user if there are unsaved changes
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isSaved) {
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave?';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Handle content change
  const handleContentChange = (value: string) => {
    setContent(value);
    setIsSaved(false);
  };

  // Save content to localStorage
  const saveContent = () => {
    localStorage.setItem('richTextData', content);
    setIsSaved(true);
    alert('Content Saved ✅');
  };

  return (
    <Box sx={{ border: '2px solid white', padding: 2, borderRadius: '8px' }}>
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        style={{ color: 'white', fontWeight: 'bold', border: '1px solid white' }}
      />
      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={saveContent}
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            color: 'white',
            fontWeight: 'bold',
            borderColor: 'white',
            '&:hover': {
              borderColor: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          Save
        </Button>
      </Grid>
    </Box>
  );
};

export default RichTextEditor;
