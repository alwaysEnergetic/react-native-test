import {ReactNode} from 'react';
import {DefaultTheme, ThemeProvider} from 'styled-components';
import {Platform} from 'react-native';

const primary = {
  lighter: '#C7EBFF',
  light: '#60BBEE',
  main: '#33B6FF',
  dark: '#0170AE',
  darker: '#013959',
  error:'#ff0000'
};

const mainColors = {
  primary,
};

const textColors = {
  primary: '#021008',
  secondary: '#7F8783',
  disabled: '#7F8783',
};

const backgroundColors = {
  paper: '#FFFFFF',
  default: '#FAFAFA',
  neutral: '#E5E5E5',
};

const theme: DefaultTheme = {
  colors: {
    ...mainColors,
    text: textColors,
    background: backgroundColors,
  },
  fontSizes: {
    small: '16px',
    medium: '18px',
    large: '24px',
  },
  fontWeights: {
    s: '400',
    m: '600',
    l: '800',
  },
  button: {
    borderRadius: 8,
  },
};

type Props = {
  children: ReactNode;
};
const Theme = ({children}: Props) => {
  const themeOptions = {
    ...theme,
  };

  return <ThemeProvider theme={themeOptions}>{children}</ThemeProvider>;
};

export default Theme;
