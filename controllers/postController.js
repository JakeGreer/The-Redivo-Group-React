// Defining methods for the postController
module.exports = {
    findPosts: function(req, res) {
        var https = require('https');
        var options = {
            host: "api.simplyrets.com",
            path: "/properties",
            auth: "simplyrets:simplyrets"
        };
        
        https.get(options, function(res) {
            var body = "";
            res.on('data', function(chunk) {
                body += chunk;
            });
            res.on('end', function() {
                var response = JSON.parse(body);
                console.log(response);
            });
        });
    }
};
  