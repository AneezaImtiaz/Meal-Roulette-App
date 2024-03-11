import {StyleSheet} from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  container: {
    padding: Theme.spacing.default,
    backgroundColor: Theme.colors.background.default,
    borderRadius: 8,
  },
  icon: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  image: {
    borderRadius: 8,
    height: 200,
    width: '100%',
    resizeMode: 'stretch',
    marginVertical: Theme.spacing.medium,
  },
  title: {
    fontSize: Theme.text.size.large,
    fontFamily: Theme.text.font.bold,
    marginBottom: Theme.spacing.default,
    textDecorationLine: 'underline',
  },
  description: {
    fontSize: Theme.text.size.medium,
    color: Theme.colors.text.default,
    lineHeight: Theme.text.lineHeight.default,
  },
  ingredients: {
    paddingTop: Theme.spacing.default,
    fontSize: Theme.text.size.default,
    lineHeight: Theme.text.lineHeight.default,
    paddingBottom: Theme.spacing.half,
  },
  listContainer: {
    flexDirection: 'row',
  },
} as const);
