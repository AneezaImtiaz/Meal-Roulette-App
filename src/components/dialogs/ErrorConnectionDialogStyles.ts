import {StyleSheet} from 'react-native';
import Theme from '../../../Theme';

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: Theme.colors.activityBackDrop,
  },
  modalContent: {
    backgroundColor: Theme.colors.background.default,
    height: '65%',
    borderRadius: 20,
    borderWidth: 1.7,
    borderColor: Theme.colors.background.dark,
  },
} as const);
