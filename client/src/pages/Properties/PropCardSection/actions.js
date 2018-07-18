import propertiesService from "../../../services/axios/propertiesService";

export default function(values, cb) {
  const request = propertiesService.post(null, values).then(() => cb());

  return {
    type: fetchProperties,
    payload: request
  };
}
