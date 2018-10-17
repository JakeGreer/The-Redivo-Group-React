import { CURRENT_PROPERTY } from "./actions";

export default function(state = null, action) {
  switch (action.type) {
    case CURRENT_PROPERTY:
      return action.payload;
    default:
      return state;
  }
}
