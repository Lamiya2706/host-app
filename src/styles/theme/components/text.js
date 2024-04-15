import { mode } from '@chakra-ui/theme-tools';

const TextStyle = {
  variants: {
    dangerous: (props) => ({
      color: mode('red.500', 'red.500')(props)
    }),
    label: (props) => ({
      color: mode('gray.500', 'gray.400')(props)
    }),
    labelValue: (props) => ({
      color: mode('gray.700', 'white')(props)
    })
  }
};

export default TextStyle;
