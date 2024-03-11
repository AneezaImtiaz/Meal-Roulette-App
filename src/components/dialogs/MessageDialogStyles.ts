import {StyleSheet} from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    width: 370,
  },
  title: {
    lineHeight: Theme.text.lineHeight.h1,
    fontFamily: Theme.text.font.bold,
    fontSize: Theme.text.size.default,
    marginBottom: Theme.spacing.half,
  },
  description: {
    textAlign: 'center',
    fontFamily: Theme.text.font.regular,
    color: Theme.colors.text.default,
    fontSize: Theme.text.size.medium,
    width: '40%',
    marginBottom: Theme.spacing.medium,
  },
  buttonContainer: {
    borderRadius: Theme.spacing.half,
    backgroundColor: Theme.colors.background.header,
    padding: Theme.spacing.half,
  },
  button: {
    borderRadius: Theme.spacing.half,
    fontSize: Theme.text.size.medium,
    color: Theme.colors.background.default,
  },
} as const);
