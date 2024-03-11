import {StyleSheet} from 'react-native';
import Theme from '../../Theme';
import Responsive from '../utils/Responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background.default,
    alignItems: 'center',
  },
  list: {
    flexGrow: 0.5,
    padding: Theme.spacing.default,
  },
  listItem: {
    justifyContent: 'space-between',
    paddingVertical: Theme.spacing.default,
  },
  buttonContainer: {
    backgroundColor: Theme.colors.background.header,
    borderRadius: 50,
    alignSelf: 'center',
    height: Responsive.font(90),
    width: Responsive.font(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: Theme.text.size.large,
    color: Theme.colors.background.default,
    fontFamily: Theme.text.font.semiBold,
  },
} as const);
