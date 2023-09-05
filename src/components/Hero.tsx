import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

type HeroProps = {

};

const Hero:React.FC<HeroProps> = () => {

  return (
    <Box>
      <Box>
        <Heading as={'h1'}>
          Create accessible React apps <span>with speed</span>
        </Heading>
        </Box>
      </Box>
  )
}