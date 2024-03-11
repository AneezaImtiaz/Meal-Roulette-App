import React from 'react';
import {ActivityIndicator, Modal, View, Text} from 'react-native';
import styles from './ActivityIndicatorOverlayStyles';
import Theme from '../../../Theme';

export type ActivityIndicatorOverlayProps = {
  isVisible: boolean;
  label?: boolean | string;
  transparent?: boolean;
};

export const ActivityIndicatorOverlay: React.FC<
  ActivityIndicatorOverlayProps
> = ({label = '', isVisible = true, transparent = false}) => {
  return (
    <Modal testID="indicator" transparent visible={isVisible}>
      <View style={[styles.container, transparent && styles.transparent]}>
        <View style={styles.content}>
          <ActivityIndicator
            size="large"
            color={Theme.colors.primary.default}
          />
          {label && <Text style={styles.label}>{label}</Text>}
        </View>
      </View>
    </Modal>
  );
};

export default ActivityIndicatorOverlay;
