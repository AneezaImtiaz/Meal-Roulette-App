import React from 'react';
import MessageDialog from './MessageDialog';
import {Modal, View} from 'react-native';
import {ERROR_MODAL, TRY_AGAIN} from '../../utils/Constants';
import styles from './ErrorConnectionDialogStyles';
import Theme from '../../../Theme';

export type ErrorConnectionDialogProps = {
  isVisible: boolean;
  buttonClick?: void | (() => void);
};

const ErrorConnectionDialog: React.FC<ErrorConnectionDialogProps> = ({
  buttonClick = () => null,
  isVisible = true,
}) => {
  return (
    <Modal
      testID="errorConnectionDialog"
      animationType="slide"
      transparent
      visible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <MessageDialog
            image={Theme.images.noConnection}
            title={ERROR_MODAL.title}
            description={ERROR_MODAL.description}
            buttonText={TRY_AGAIN}
            buttonClick={buttonClick}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ErrorConnectionDialog;
