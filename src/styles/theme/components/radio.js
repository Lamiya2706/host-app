import { mode } from '@chakra-ui/theme-tools';

export const Radio = {
  baseStyle: (props) => ({
    container: { color: mode('gray.700', 'white')(props) },
    icon: { color: 'white' },
    control: {
      _checked: { bg: mode('brand.800', 'brand.500')(props), borderColor: mode('brand.800', 'brand.500')(props) }
    }
  })
};
