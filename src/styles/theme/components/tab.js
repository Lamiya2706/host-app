import { mode } from '@chakra-ui/theme-tools';

export const TabsStyle = {
  variants: {
    line: (props) => ({
      tablist: {},
      tab: {
        color: mode(props.theme.colors.gray[600], props.theme.colors.white)(props),
        fontWeight: props.theme.fontWeights.medium,
        _selected: { color: mode(props.theme.colors.brand[800], props.theme.colors.brand[500])(props) }
      }
    }),

    folder: (props) => ({
      tabpanel: {
        borderColor: mode(props.theme.colors.gray[300], props.theme.colors.whiteAlpha[300])(props),
        borderWidth: '1px'
      },
      tablist: {
        borderColor: mode(props.theme.colors.gray[300], props.theme.colors.whiteAlpha[300])(props),
        borderWidth: '1px'
      },
      tab: {
        orientation: 'vertical',
        p: '16px',
        w: '100%',
        justifyContent: 'start',
        borderRadius: '10px',

        color: mode(props.theme.colors.gray[700], props.theme.colors.gray[400])(props),
        fontWeight: props.theme.fontWeights.medium,

        _selected: {
          color: mode(props.theme.colors.gray[700], 'white')(props),
          backgroundColor: mode(props.theme.colors.blackAlpha[50], props.theme.colors.whiteAlpha[100])(props)
        }
      }
    })
  }
};
