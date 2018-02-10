// Defining methods for the postController
module.exports = {
    search: function(req, result) {

        let type = "/properties?&"
        let query = req.body.query

        if( query ) {
            type += query
        }

        var https = require('https');
        var options = {
            host: "api.simplyrets.com",
            path: type,
            auth: "simplyrets:simplyrets"
        };

        https.get(options, function(res) {
            var body = "";
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                var response = JSON.parse(body);
                result.json(response)
            });
        });
    }
};
  