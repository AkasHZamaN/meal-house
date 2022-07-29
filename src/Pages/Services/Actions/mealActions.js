import axios from "axios";
import { GET_MEAL_FAILED, GET_MEAL_REQUEST, GET_MEAL_SUCCESS } from "../Constants/mealConstants";

export const getAllMeal = () => async (dispatch) => {
  dispatch({ type: GET_MEAL_REQUEST });

  try {
    const res = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/search.php?s"
    );
    dispatch({ type: GET_MEAL_SUCCESS, payload: res.data.meals });
  } catch (error) {
    dispatch({ type: GET_MEAL_FAILED, payload: error.message });
  }
};
