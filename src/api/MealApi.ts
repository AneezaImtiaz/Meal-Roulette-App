import axios from 'axios';
import {MealItem, MealDetailItem} from '../components/cards/MealItemCard';

export async function fetchNextMeals(
  mealStartingId: number,
): Promise<MealItem[]> {
  try {
    const response = await axios.get(
      `https://playground.devskills.co/api/rest/meal-roulette-app/meals/limit/4/offset/${mealStartingId}`,
    );
    const meals: MealItem[] =
      response.data?.meal_roulette_app_meals_aggregate?.nodes;
    return meals;
  } catch (error) {
    console.error('Error fetching meals:', error);
    throw null;
  }
}

export async function fetchMealById(
  mealId: number,
): Promise<MealDetailItem | null> {
  try {
    const response = await axios.get(
      `https://playground.devskills.co/api/rest/meal-roulette-app/meals/${mealId}`,
    );
    const mealItem: MealDetailItem =
      response.data?.meal_roulette_app_meals_by_pk;
    return mealItem;
  } catch (error) {
    console.error(`Error fetching meal with ID ${mealId}:`, error);
    throw null;
  }
}
