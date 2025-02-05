import React from 'react';
import Counter from '../components/Counter';
import UserForm from '../components/UserForm';
import RichTextEditor from '../components/RichTextEditor';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <Box>
      <h1>Welcome to the React App</h1>
      
      {/* Container for Counter and Rich Text Editor in one row */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" gap={2}>
        {/* Counter Box */}
        <Box flex={1} padding={2} border="1px solid #ccc" borderRadius={2}>
          <Counter />
        </Box>

        {/* Rich Text Editor Box */}
        <Box flex={1} padding={2} border="1px solid #ccc" borderRadius={2}>
          <RichTextEditor />
        </Box>
      </Box>

      {/* User Data Form below the Counter and Rich Text Editor */}
      <Box mt={4}>
        {/* <UserForm /> */}
      </Box>
    </Box>
  );
};

export default Home;
