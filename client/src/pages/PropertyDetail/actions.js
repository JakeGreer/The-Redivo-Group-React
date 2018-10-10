export const CURRENT_PROPERTY = "current_property";

export function fetchCurrentProperty(id) {
  return {
    type: CURRENT_PROPERTY,
    payload: id
  };
}
