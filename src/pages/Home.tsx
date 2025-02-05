import Counter from '../components/Counter';
import RichTextEditor from '../components/RichTextEditor';
import { Box } from '@mui/material';
const Home = () => {
  return (
    <Box>
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
    </Box>
  );
};
export default Home;
