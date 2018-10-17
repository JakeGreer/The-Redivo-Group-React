import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import SearchedData from "./pages/Properties/reducer_properties";
import CurrentProperty from "./pages/PropertyDetail/reducer_detail";

const rootReducer = combineReducers({
  form: formReducer,
  SearchedData,
  CurrentProperty
});

export default rootReducer;
