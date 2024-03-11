import Responsive from './src/utils/Responsive';

export default {
  spacing: {
    medium: Responsive.font(24),
    default: Responsive.font(16),
    half: Responsive.font(8),
  },
  text: {
    size: {
      extraSmall: Responsive.font(10),
      small: Responsive.font(12),
      medium: Responsive.font(14),
      default: Responsive.font(16),
      large: Responsive.font(18),
    },
    font: {
      regular: 'OpenSans-Regular',
      semiBold: 'OpenSans-SemiBold',
      bold: 'OpenSans-Bold',
    },
    lineHeight: {
      default: Responsive.font(16),
      h1: Responsive.font(32),
      h2: Responsive.font(28),
      h3: Responsive.font(24),
    },
  },
  colors: {
    primary: {
      default: '#9e9ea7',
    },
    background: {
      default: '#ffffff',
      header: '#2ca2c9',
      dark: '#000000',
    },
    text: {
      default: '#525257',
    },
    gray: {
      borders: '#5b6163',
    },
    activityBackDrop: 'rgba(0, 0, 0, 0.5)',
    transparent: 'transparent',
  },
  images: {
    emptyMenu: require('./src/resources/images/emptyMenu.png'),
    noConnection: require('./src/resources/images/noConnection.png'),
  },
  icons: {
    close: require('./src/resources/icons/close.png'),
  },
};
