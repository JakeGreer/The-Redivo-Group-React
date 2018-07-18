import propertiesService from "../../../services/axios/propertiesService";
import { FETCH_PROPERTIES } from "../constants";

export function fetchProperties(values, cb) {
  const request = propertiesService.post(null, values).then(() => cb());

  return {
    type: FETCH_PROPERTIES,
    payload: request
  };
}
