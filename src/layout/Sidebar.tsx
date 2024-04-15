import { Box, Button, Divider, Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const Sidebar: React.FC = () => {

  return (
    <Flex
      gridColumn="1/2"
      gridRow="1/3"
      flexDirection="column"
      justifyContent="start"
      p="21px 16px"
      width="100%"
      maxWidth={'300px'}
      background={'brand.800'}
      h="100vh"
      minH="100%"
      position="fixed"
      transition="max-width 0.1s ease-in"
      zIndex="2"
    >
      <Box textAlign="left" mb="36px" pl="6px" h="40px">
        <img
          src={'/images/logo_icon.svg'}
          alt="Ibar logo"
          style={{ display: 'block', height: '40px' }}
        />
      </Box>

      <Flex direction={'column'} justify={'start'} h="100%">

        <Box w="100%" marginTop={300} color='white' fontSize='24px' transform='rotate(-90deg)'>
          Sidebar from Shell App
        </Box>
      </Flex>

    </Flex>
  );
};

export default Sidebar;
