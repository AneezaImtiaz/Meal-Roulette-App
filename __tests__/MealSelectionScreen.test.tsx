import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import {
  MealSelectionScreen,
  MealSelectionScreenProps,
} from '../src/screens/MealSelectionScreen';

// Mock your API function
jest.mock('../src/api/MealApi', () => ({
  fetchNextMeals: jest.fn(() => Promise.resolve([])), // Mock the API function to return an empty array
}));

describe('<MealSelectionScreen />', () => {
  const renderComponent = (props?: Partial<MealSelectionScreenProps>) => {
    const defaultProps: MealSelectionScreenProps = {
      // Provide any default props if needed
    };

    return render(<MealSelectionScreen {...defaultProps} {...props} />);
  };

  it('renders loading indicator when loader is true', () => {
    const {getByTestId} = renderComponent({loader: true});
    expect(getByTestId('indicator')).toBeTruthy();
  });

  it('handles error when fetching meals', async () => {
    // Mock API to throw an error
    require('../src/api/MealApi').fetchNextMeals.mockRejectedValueOnce(
      new Error('Failed to fetch meals'),
    );
    const {getByTestId} = renderComponent({});

    // Wait for the error modal to be visible
    await waitFor(() => {
      expect(getByTestId('errorConnectionDialog')).toBeTruthy();
    });
  });

  it('renders no meals message when meals array is empty', async () => {
    const {getByTestId} = renderComponent({meals: []});
    await waitFor(() => expect(getByTestId('messageDialog')).toBeTruthy());
  });

  it('renders meals when meals array is not empty', async () => {
    const mockMeals = [
      {id: 1, title: 'Meal 1'},
      {id: 2, title: 'Meal 2'},
    ];
    require('../src/api/MealApi').fetchNextMeals.mockResolvedValueOnce(
      mockMeals,
    );
    const {getByText} = renderComponent();
    await waitFor(() => expect(getByText('Meal 1')).toBeTruthy());
    expect(getByText('Meal 2')).toBeTruthy();
  });
});
