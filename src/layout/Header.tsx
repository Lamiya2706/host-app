import { Avatar, Flex, Text, Tooltip } from '@chakra-ui/react';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      backgroundColor="white"
      padding="0 80px"
      gridColumn="2/3"
      width="100%"
      gridRow="1/2"
      bgColor={'white'}
      transition="grid-column 0.1ms ease-in"
    >
      <Flex w="100%" alignItems="center" justifyContent="flex-end">
        <Flex alignItems="center" justifyContent="center">
          <Flex flexDirection="column" marginRight="16px" justifyContent="center" alignItems="flex-end">
            <Text fontSize="24px" variant="labelValue">
              Header from Shell App
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
