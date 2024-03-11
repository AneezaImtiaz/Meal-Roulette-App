import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {MealItemModal} from '../modals';
import {fetchMealById} from '../../api/MealApi';
import {ActivityIndicatorOverlay} from '../overlays';
import {ErrorConnectionDialog} from '../dialogs';
import styles from './MealItemCardStyles';

export type MealItem = {
  id: number;
  title: string;
  picture: string;
};

export type MealDetailItem = {
  id: number;
  title: string;
  picture: string;
  description: string;
  ingredients: string;
};

type MealItemProps = {mealItem: MealItem};

const MealItemCard: React.FC<MealItemProps> = ({mealItem}) => {
  const [mealDetailItem, setMealDetailItem] = useState<MealDetailItem>();
  const [showMealItemModal, setShowMealItemModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [loader, setLoader] = useState(false);

  const renderErrorConnectionModal = () => {
    return (
      <ErrorConnectionDialog
        isVisible={showErrorModal}
        buttonClick={() => {
          setShowErrorModal(false);
          getMealItemDetail(mealItem?.id);
        }}
      />
    );
  };

  const getMealItemDetail = async (mealId: number) => {
    try {
      setLoader(true);
      const item = await fetchMealById(mealId);
      item && setMealDetailItem(item);
      setShowMealItemModal(true);
    } catch (e) {
      setShowErrorModal(true);
    } finally {
      setLoader(false);
    }
  };
  return (
    <TouchableOpacity
      testID="mealItemCard"
      style={styles.card}
      onPress={() => getMealItemDetail(mealItem?.id)}>
      {renderErrorConnectionModal()}
      <ActivityIndicatorOverlay isVisible={loader} />
      <Image style={styles.image} source={{uri: mealItem?.picture}} />
      <Text style={styles.title}>{mealItem?.title}</Text>
      <MealItemModal
        isVisible={showMealItemModal}
        mealItem={mealDetailItem}
        buttonClick={() => setShowMealItemModal(false)}
      />
    </TouchableOpacity>
  );
};

export default MealItemCard;
