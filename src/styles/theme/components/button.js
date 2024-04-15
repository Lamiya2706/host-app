import { darken, mode } from '@chakra-ui/theme-tools';

const Button = {
  baseStyle: {
    fontWeight: '600',
    borderRadius: '8px'
  },
  variants: {
    create: (props) => ({
      bg: props.theme.colors.brand[500],
      color: props.theme.colors.white
    }),
    solid: (props) => {
      let c = props.colorScheme;

      if (c == 'gray') c = 'brand';
      return {
        color: 'white',
        bg: mode(c + '.800', c + '.500')(props),
        _hover: {
          bg: darken(props.theme.colors[c][600], 5)(props)
        }
      };
    },
    outline: (props) => {
      return {
        color: mode('gray.800', 'white')(props),
        borderColor: mode('gray.200', 'white')(props),
        bg: 'transparent'
      };
    },
    gray: (props) => {
      return {
        color: mode('gray.800', 'white')(props),
        bg: mode('gray.100', 'gray.600')(props),
        _disabled: { opacity: 0.4, cursor: 'not-allowed', bg: mode('gray.100', 'gray.700')(props) },
        _hover: {
          bg: mode('gray.200', 'gray.500')(props),
          _disabled: { bg: mode('gray.100', 'gray.700')(props) }
        }
      };
    },
    ghost: () => {
      return {
        color: ' white',
        bg: 'rgba(255, 255, 255, 0.08);',

        _hover: {
          bg: 'rgba(255, 255, 255, 0.2);'
        }
      };
    }
  }
};
export default Button;
