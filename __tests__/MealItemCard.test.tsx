import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import {MealItemCard} from '../src/components/cards';

// Mock your API function
jest.mock('../src/api/MealApi', () => ({
  fetchMealById: jest.fn(() =>
    Promise.resolve({
      id: 1,
      title: 'Meal Title',
      description: 'Meal Description',
      ingredients: 'Ingredient1, Ingredient2',
      picture: 'meal.png',
    }),
  ),
}));

describe('MealItemCard component', () => {
  it('renders meal item card correctly', async () => {
    const {getByTestId, getByText} = render(
      <MealItemCard
        mealItem={{id: 1, title: 'Meal Title', picture: 'meal.png'}}
      />,
    );

    // Click on the meal item card
    fireEvent.press(getByTestId('mealItemCard'));

    // Wait for the modal to be visible
    await waitFor(() => {
      expect(getByText('Meal Title')).toBeTruthy();
    });
    expect(getByText('Meal Description')).toBeTruthy();
    expect(getByTestId('mealImage')).toBeTruthy();

    // Check if the ingredients title is visible
    expect(getByText('Ingredients')).toBeTruthy();
    expect(getByText('Ingredient1')).toBeTruthy();
    expect(getByText('Ingredient2')).toBeTruthy();
  });

  it('handles error when fetching meal detail', async () => {
    // Mock API to throw an error
    require('../src/api/MealApi').fetchMealById.mockRejectedValueOnce(
      new Error('Failed to fetch meal detail'),
    );

    const {getByTestId} = render(
      <MealItemCard
        mealItem={{id: 1, title: 'Meal Title', picture: 'meal.png'}}
      />,
    );

    // Click on the meal item card
    fireEvent.press(getByTestId('mealItemCard'));

    // Wait for the error modal to be visible
    await waitFor(() => {
      expect(getByTestId('errorConnectionDialog')).toBeTruthy();
    });
  });
});
