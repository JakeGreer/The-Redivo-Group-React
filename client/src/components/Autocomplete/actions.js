import propertiesService from "../../services/axios/propertiesService";

export const POST_PROPERTIES = "post_properties";

export function postProperties(data, callback) {
  let payload;
  propertiesService
    .post(null, data)
    .then(({ data }) => {
      payload = data;
      callback();
    })
    .catch(err => {
      console.error(err);
    });

  return {
    type: POST_PROPERTIES,
    payload
  };
}
