import Counter from '../components/Counter';
import RichTextEditor from '../components/RichTextEditor';
import { Box, Grid } from '@mui/material';
const Home = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Responsive Container for Counter and Rich Text Editor */}
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {/* Counter Box */}
        <Grid item xs={12} sm={6} md={5} lg={5} xl={4}>
          <Box
            padding={2}
            border="1px solid #ccc"
            borderRadius={2}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              marginLeft: '20px',  // Apply left margin for slight shift
              marginRight: 'auto',  // Ensure it's centered
            }}
          >
            <Counter />
          </Box>
        </Grid>
        {/* Rich Text Editor Box */}
        <Grid item xs={12} sm={6} md={5} lg={5} xl={4}>
          <Box
            padding={2}
            border="1px solid #ccc"
            borderRadius={2}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            sx={{
              marginLeft: '20px',  // Apply left margin for slight shift
              marginRight: 'auto',  // Ensure it's centered
            }}
          >
            <RichTextEditor />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
