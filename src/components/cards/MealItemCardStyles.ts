import {StyleSheet} from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.background.default,
    borderRadius: 8,
    flexDirection: 'column',
    width: '48%',
    elevation: 2,
    shadowColor: Theme.colors.background.dark,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    height: 100,
    width: '100%',
    resizeMode: 'stretch',
  },
  title: {
    padding: Theme.spacing.half,
    fontSize: Theme.text.size.medium,
    color: Theme.colors.text.default,
  },
} as const);
