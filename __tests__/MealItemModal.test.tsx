import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {MealItemModal} from '../src/components/modals';

// Mock data for testing
const mockMealItem = {
  id: 1,
  title: 'Meal Title',
  description: 'Meal Description',
  ingredients: 'Ingredient1, Ingredient2',
  picture: 'meal.png',
};

describe('MealItemModal component', () => {
  it('renders correctly with provided props', () => {
    const {getByText, getByTestId} = render(
      <MealItemModal isVisible={true} mealItem={mockMealItem} />,
    );

    // Check if the modal is visible
    expect(getByTestId('mealItemModal')).toBeTruthy();

    // Check if the title, description, image and ingredients are rendered
    expect(getByText('Meal Title')).toBeTruthy();
    expect(getByText('Meal Description')).toBeTruthy();
    expect(getByTestId('mealImage')).toBeTruthy();

    // Check if the ingredients title is visible
    expect(getByText('Ingredients')).toBeTruthy();
    expect(getByText('Ingredient1')).toBeTruthy();
    expect(getByText('Ingredient2')).toBeTruthy();
  });

  it('calls buttonClick function when close icon is pressed', () => {
    const buttonClickMock = jest.fn();

    const {getByTestId} = render(
      <MealItemModal
        isVisible={true}
        mealItem={mockMealItem}
        buttonClick={buttonClickMock}
      />,
    );

    // Find the close icon and simulate a press event
    fireEvent.press(getByTestId('closeIcon'));

    // Check if the buttonClick function was called
    expect(buttonClickMock).toHaveBeenCalled();
  });
});
