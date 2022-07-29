import { GET_MEAL_FAILED, GET_MEAL_REQUEST, GET_MEAL_SUCCESS } from "../Constants/mealConstants";

const initialState = {
    isLoading: false,
    meals: [],
    error: null
};

const mealReducers = (state=initialState, action) =>{
    switch (action.type) {
        case GET_MEAL_REQUEST:
            
            return {
                ...state,
                isLoading: true
            }
        case GET_MEAL_SUCCESS:
            
            return {
                isLoading: false,
                meals: action.payload,
                error: null
                
            }
        case GET_MEAL_FAILED:
            
            return {
                isLoading: false,
                meals: [],
                error: action.payload
                
            }
    
        default:
            return state;
    }
}

export default mealReducers;