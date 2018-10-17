import _ from "lodash";
import { POST_PROPERTIES } from "../../components/Autocomplete/actions";

export default function(state = [], action) {
  switch (action.type) {
    case POST_PROPERTIES:
      return action.payload;
    default:
      return state;
  }
}
