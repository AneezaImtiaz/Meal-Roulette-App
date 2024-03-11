import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity, Text} from 'react-native';
import styles from './MealSelectionScreenStyles';
import {MealItemCard} from '../components/cards';
import {fetchNextMeals} from '../api/MealApi';
import {MealItem} from '../components/cards/MealItemCard';
import {ActivityIndicatorOverlay} from '../components/overlays';
import {MessageDialog, ErrorConnectionDialog} from '../components/dialogs';
import {NO_MEALS_MODAL, LOADING, REFRESH, TRY_AGAIN} from '../utils/Constants';
import Theme from '../../Theme';

export type MealSelectionScreenProps = {};

export const MealSelectionScreen: React.FC<MealSelectionScreenProps> = ({}) => {
  const [meals, setMeals] = useState<MealItem[]>([]);
  const [loader, setLoader] = useState(true);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [mealStartingId, setMealStartingId] = useState(0);

  const refreshMeals = async () => {
    try {
      setLoader(true);
      const nextMeals = await fetchNextMeals(mealStartingId);
      if (nextMeals?.length > 0) {
        setMeals(nextMeals);
        setMealStartingId(mealStartingId + 4);
      }
    } catch (e) {
      setShowErrorModal(true);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    refreshMeals();
  }, []);

  const renderErrorConnectionModal = () => {
    return (
      <ErrorConnectionDialog
        isVisible={showErrorModal}
        buttonClick={() => {
          setShowErrorModal(false);
          refreshMeals();
        }}
      />
    );
  };

  const renderButton = () => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={refreshMeals}>
        <Text style={styles.button}>{REFRESH}</Text>
      </TouchableOpacity>
    );
  };

  const renderNoMeals = () => {
    return (
      <MessageDialog
        image={Theme.images.emptyMenu}
        title={NO_MEALS_MODAL.title}
        description={NO_MEALS_MODAL.description}
        buttonText={TRY_AGAIN}
        buttonClick={refreshMeals}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicatorOverlay isVisible={loader} label={LOADING} />
      {renderErrorConnectionModal()}
      {!loader && !showErrorModal && (
        <SafeAreaView>
          <FlatList
            numColumns={2}
            data={meals}
            renderItem={({item}) => <MealItemCard mealItem={item} />}
            keyExtractor={item => JSON.stringify(item.id)}
            ListEmptyComponent={renderNoMeals}
            columnWrapperStyle={styles.listItem}
            contentContainerStyle={styles.list}
          />
          {meals?.length > 0 && renderButton()}
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};
