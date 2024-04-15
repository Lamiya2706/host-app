import { extendTheme } from '@chakra-ui/react';

import { BadgeStyle } from './components/badge';
import Button from './components/button';
import { Checkbox } from './components/checkbox';
import Container from './components/container';
import { FormLabelStyle } from './components/form-label';
import Heading from './components/heading';
import InputStyle from './components/input';
import ModalStyle from './components/modal';
import { Radio } from './components/radio';
import { TabsStyle } from './components/tab';
import { TableStyle } from './components/table';
import TextStyle from './components/text';
import TextareaStyle from './components/textarea';
import TooltipStyle from './components/tooltip';
import borderRadius from './foundations/borderRadius';
import boxShadow from './foundations/boxShadow';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import spacing from './foundations/spacing';
import typography from './foundations/typography';
import styles from './styles';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const overrides = {
  styles,
  colors,
  typography,
  borderRadius,
  spacing,
  boxShadow,
  breakpoints,
  components: {
    Button,
    Container,
    Heading,
    Badge: BadgeStyle,
    Tabs: TabsStyle,
    Table: TableStyle,
    Input: InputStyle,
    FormLabel: FormLabelStyle,
    Checkbox,
    Modal: ModalStyle,
    Textarea: TextareaStyle,
    Text: TextStyle,
    Tooltip: TooltipStyle,
    Radio
  }
};

export default extendTheme({ ...overrides, config });
