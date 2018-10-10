// Defining methods for the postController
var axios = require("axios");
module.exports = {
  search: function(req, response) {
    let type = "/properties?&";
    let query = req.body.query;
    let searchType = req.body.searchType;

    if (query) {
      type += `q=${query.address_components[0].long_name},${
        query.address_components[2].long_name
      }`;
    }

    if (searchType) {
      type += "&type=" + searchType;
    }

    const https = require("https");
    const options = {
      host: "api.simplyrets.com",
      path: type,
      auth: "simplyrets:simplyrets"
    };

    https.get(options, function(res) {
      let body = "";
      res.on("data", function(chunk) {
        body += chunk;
      });
      res.on("end", function() {
        const resp = JSON.parse(body);
        response.json(resp);
      });
    });
  }
};
