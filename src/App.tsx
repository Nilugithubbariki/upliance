import { useState } from 'react';
import { Box } from '@mui/material';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import LeftSideForm from "./components/LeftSideForm"
import RichTextEditor from './components/RichTextEditor';
import { useSpring, animated } from 'react-spring';
const App = () => {
const [userData, setUserData] = useState<any>(null);
  // React Spring animations for sequential box appearance
  const firstAnimation = useSpring({
    opacity: 1,
    height: '30px', 
    width: '100%',  
    from: { opacity: 0, height: '0px' },
    config: { tension: 220, friction: 120 },
  });
  const secondAnimation = useSpring({
    opacity: 1,
    height: '30px',
    width: '100%',
    from: { opacity: 0, height: '0px' },
    delay: 200,  
    config: { tension: 220, friction: 120 },
  });
  const thirdAnimation = useSpring({
    opacity: 1,
    height: '30px',
    width: '100%',
    from: { opacity: 0, height: '0px' },
    delay: 400, 
    config: { tension: 220, friction: 120 },
  });
  return (
    <Box
  sx={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    color: 'white',
    width: '80vw',
    margin: '0 auto',
    height: 'auto',
    minHeight: '100vh',
    backgroundColor: 'black', 
  }}
>
  {/* First Row: Counter and Rich Text Editor */}
  <Box display="flex" flexDirection="row" gap="20px" width="100%" padding="10px">
    {/* Counter Box */}
    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="10px"
    >
      <Counter />
    </Box>

    {/* Rich Text Editor Box */}
    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="10px"
    >
      <RichTextEditor />
    </Box>
  </Box>
  {/* Second Row: Left and Right Side Boxes */}
  <Box display="flex" flexDirection="row" gap="20px" width="100%" marginTop="20px" padding="10px">
    {/* Left Side Box */}
    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="10px"
    >
      <LeftSideForm />
    </Box>
    {/* Right Side Box (UserForm) */}
    <Box
      flex="1"
      display="flex"
      justifyContent="center"
      alignItems="center"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="10px"
    >
      <UserForm />
    </Box>
  </Box>
  {/* Third Row: First Animated Box */}
  <animated.div style={firstAnimation}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      marginTop="20px"
      width="100%" 
      height="30px" 
      border="2px solid #ccc"
      padding="0" 
      borderRadius="20px" 
      sx={{
        background: 'linear-gradient(45deg, #ff6ec7, #ff9a8b)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
    </Box>
  </animated.div>
  {/* Fourth Row: Second Animated Box */}
  <animated.div style={secondAnimation}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      marginTop="20px"
      width="100%" 
      height="30px" 
      border="2px solid #ccc"
      padding="0" 
      borderRadius="20px" 
      sx={{
        background: 'linear-gradient(45deg, #ff6ec7, #ff9a8b)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      }}
    >
    </Box>
  </animated.div>
  {/* Fifth Row: Third Animated Box */}
  <animated.div style={thirdAnimation}>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="20px"
      marginTop="20px"
      width="100%" 
      height="30px" 
      border="2px solid #ccc"
      padding="0" 
      borderRadius="20px" 
      sx={{
        background: 'linear-gradient(45deg, #ff6ec7, #ff9a8b)', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
      }}
    >
    </Box>
  </animated.div>
  {/* Display User Data after form submission */}
  {userData && (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      marginTop="20px"
      width="100%"
      border="2px solid #ccc"
      padding="20px"
      borderRadius="10px"
    >
      <h2>Submitted User Data</h2>
      <Box>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone:</strong> {userData.phone}</p>
      </Box>
    </Box>
  )}
</Box>
  );
};
export default App;
