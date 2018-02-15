// Defining methods for the postController
var axios = require('axios')
module.exports = {
    search: function (req, result) {

        let type = "/properties?&"
        let query = req.body.query
        let searchType = req.body.searchType

        if (query) {
            type += "q=" + query
        }

        if(searchType !== "") {
            type += "&type=" + searchType
        }

        console.log("TYPE: ", type)

        var https = require('https');
        var options = {
            host: "api.simplyrets.com",
            path: type,
            auth: "simplyrets:simplyrets"
        };

        https.get(options, function (res) {
            var body = "";
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function () {
                var response = JSON.parse(body);
                result.json(response)
            });
        });
    },
    // autoc: function (req, res) {
    //     axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Amoeba&types=establishment&location=37.76999,-122.44696&radius=500&key=${process.env.GOOGLE_API_KEY}`)
    //     .then(result => res.json(result.data))
    //     .catch(err => console.log("error",err))
    // }
};
