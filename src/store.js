import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import mealReducers from "./Pages/Services/Reducers/mealReducers";


const store = createStore(mealReducers, applyMiddleware(thunk))

export default store;