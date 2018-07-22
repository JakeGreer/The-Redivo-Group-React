import _ from "lodash";
import FETCH_LOCAL from "./constants";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LOCAL:
      return state.payload;
    default:
      return state.payload;
  }
}
