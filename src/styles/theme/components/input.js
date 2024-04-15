import { mode } from '@chakra-ui/theme-tools';

const InputStyle = {
  variants: {
    outline: (props) => {
      return {
        field: {
          borderColor: mode('gray.200', 'whiteAlpha.600')(props),
          color: mode('gray.700', 'white')(props),
          boxSizing: 'border-box',
          _hover: { borderColor: mode('gray.200', 'whiteAlpha.700')(props) }
        },
        addon: {
          borderColor: mode('gray.200', 'whiteAlpha.600')(props),
          color: mode('gray.700', 'white')(props)
        }
      };
    }
  }
};

export default InputStyle;
