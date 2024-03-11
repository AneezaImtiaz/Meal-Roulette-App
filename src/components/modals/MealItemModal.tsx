import React from 'react';
import {
  Image,
  Modal,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './MealItemModalStyles';
import {MealDetailItem} from '../cards/MealItemCard';
import {INGREDIENTS} from '../../utils/Constants';
import Theme from '../../../Theme';

type MealItemModalProps = {
  isVisible: boolean;
  mealItem: MealDetailItem | any;
  buttonClick?: void | (() => void);
};

export const MealItemModal: React.FC<MealItemModalProps> = ({
  isVisible,
  mealItem,
  buttonClick = () => null,
}) => {
  const renderIngrediants = (ingredients: string) => {
    const ingredientsList = ingredients?.split(',');
    return (
      <View>
        <Text style={styles.ingredients}>{INGREDIENTS}</Text>
        {ingredientsList?.map((item: string, index: number) => (
          <View key={index} style={styles.listContainer}>
            <Text style={styles.description}>{'- '}</Text>
            <Text style={styles.description}>{`${item.trim()}`}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <Modal
      testID="mealItemModal"
      presentationStyle={'formSheet'}
      animationType={'slide'}
      visible={isVisible}
      supportedOrientations={['portrait-upside-down']}>
      <View style={styles.container}>
        <TouchableOpacity onPress={buttonClick}>
          <Image
            style={styles.icon}
            source={Theme.icons.close}
            testID="closeIcon"
          />
        </TouchableOpacity>
        <Image
          style={styles.image}
          testID="mealImage"
          source={{uri: mealItem?.picture}}
        />
        <ScrollView>
          <Text style={styles.title}>{mealItem?.title}</Text>
          <Text style={styles.description}>{mealItem?.description}</Text>
          {renderIngrediants(mealItem?.ingredients)}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default MealItemModal;
