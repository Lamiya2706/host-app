import { mode } from '@chakra-ui/theme-tools';

export const TableStyle = {
  variants: {
    simple: (props) => ({
      table: {
        bg: mode('white', 'gray.800')(props),
        color: mode('gray.900', 'white')(props)
      },
      tbody: {
        tr: {
          _hover: { backgroundColor: mode('gray.50', 'whiteAlpha.100')(props) }
        }
      },
      thead: {
        tr: {
          _hover: { backgroundColor: 'none' }
        }
      }
    }),
    secondry: (props) => ({
      table: {
        bg: mode(props.theme.colors.gray[50], props.theme.colors.whiteAlpha[50])(props),
        borderRadius: '12px',
        overflow: 'hidden'
      },
      tbody: {
        th: {
          borderRightWidth: '1px',
          borderBottomWidth: '1px'
        },
        td: {
          borderBottomWidth: '1px'
        }
      }
    }),

    striped: () => ({
      thead: {
        th: {
          padding: '16px 30px'
        }
      },
      tbody: {
        td: {
          padding: '22px 30px'
        }
      }
    })
  }
};
