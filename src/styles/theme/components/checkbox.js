import { mode } from '@chakra-ui/theme-tools';

export const Checkbox = {
  baseStyle: (props) => ({
    container: { color: mode('gray.700', 'white')(props) },
    icon: { color: 'white' },
    control: { _checked: { bg: 'brand.500', borderColor: 'brand.500' } }
  }),
  variants: {
    warning: {
      icon: { color: 'white' },
      control: {
        _checked: {
          bg: 'orange.500',
          borderColor: 'orange.500',
          _hover: { bg: 'orange.600', borderColor: 'orange.600' }
        }
      }
    },
    error: {
      icon: { color: 'white' },
      control: {
        _checked: { bg: 'red.500', borderColor: 'red.500', _hover: { bg: 'red.600', borderColor: 'red.600' } }
      }
    }
  }
};
