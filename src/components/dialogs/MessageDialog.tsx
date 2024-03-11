import React from 'react';
import {
  ImageSourcePropType,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './MessageDialogStyles';

export type MessageDialogProps = {
  image: ImageSourcePropType;
  title: string;
  description?: string;
  buttonText?: string;
  buttonClick?: void | (() => void);
};

const MessageDialog: React.FC<MessageDialogProps> = ({
  image,
  description,
  title,
  buttonText = '',
  buttonClick = () => null,
}) => {
  return (
    <View testID="messageDialog" style={styles.wrapper}>
      <ImageBackground resizeMode="contain" source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
        {!!description && <Text style={styles.description}>{description}</Text>}
        {!!buttonText && (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => buttonClick()}>
            <Text style={styles.button}>{buttonText}</Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  );
};

export default MessageDialog;
