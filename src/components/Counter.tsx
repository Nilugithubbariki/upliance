import { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Button, Box } from '@mui/material';
const Counter = () => {
const [count, setCount] = useState(0);
  const backgroundAnimation = useSpring({
    backgroundColor: `rgba(0, 150, 255, ${count * 0.1})`
  });
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <animated.div style={{ ...backgroundAnimation, padding: '20px', borderRadius: '10px' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <h2>{count}</h2>
        <Box>
          <Button
            onClick={increment}
            sx={{
              border: '2px solid white',
              padding: '10px 20px',
              margin: '5px',
              color: 'white',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.7)',
              }
            }}
          >
            +
          </Button>
          <Button
            onClick={reset}
            sx={{
              border: '2px solid white',
              padding: '10px 20px',
              margin: '5px',
              color: 'white',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.7)',
              }
            }}
          >
            Reset
          </Button>
          <Button
            onClick={decrement}
            sx={{
              border: '2px solid white',
              padding: '10px 20px',
              margin: '5px',
              color: 'white',
              '&:hover': {
                borderColor: 'rgba(255, 255, 255, 0.7)',
              }
            }}
          >
            -
          </Button>
        </Box>
      </Box>
    </animated.div>
  );
};
export default Counter;
