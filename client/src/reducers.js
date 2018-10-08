import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import SearchedData from "./pages/Properties/reducer_properties";

const rootReducer = combineReducers({
  form: formReducer,
  SearchedData
});

export default rootReducer;
