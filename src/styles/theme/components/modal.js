import { mode } from '@chakra-ui/theme-tools';

const ModalStyle = {
  baseStyle: (props) => ({
    dialog: {
      bg: mode('white', 'gray.800')(props),
      color: mode('gray.700', 'white')(props)
    }
  })
};

export default ModalStyle;
