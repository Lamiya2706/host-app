import { Box, VStack } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  children: React.ReactNode
}

export const Main: React.FC<IProps> = ({ children }) => {
  return (
    <Box gridColumn="2/3" gridRow="2/3" margin="40px 72px" bgColor='white' borderRadius='6px' padding='32px'>
      <VStack align='center' justifyContent='center' h='100%'>
        {children}
      </VStack>
    </Box>
  );
};
