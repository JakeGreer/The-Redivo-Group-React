import propertiesService from "../../services/axios/propertiesService";

export const POST_PROPERTIES = "post_properties";

export function postProperties(data, cb) {
  const payload = propertiesService.post(null, data);
  cb();
  return {
    type: POST_PROPERTIES,
    payload
  };
}
