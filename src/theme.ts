import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  defaults: {
    white: '#FFFFFF',
    black: '#000000',
  },
  colors: {
    primary: '#168BD9',
    lightGrey: '#B9B9B9',
    red: '#FF0000',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F8F8F8',
    tertiary: 'rgba(44, 216, 255, 0.12)',
    disabled: 'E6E6E6',
  },
  border: {
    main: '1px solid #F0F0F0',
    radius: {
      main: '10px',
    },
  },
  text: {
    grey: '#7F7F7F',
    disabled: 'B6BFC9',
  },
  transitions: {
    default: 'all 0.2s ease-in-out',
  },
  breakpoints: {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px)',
    laptop: '(min-width: 1024px)',
    desktop: '(min-width: 1440px)',
  },
};

export default theme;
