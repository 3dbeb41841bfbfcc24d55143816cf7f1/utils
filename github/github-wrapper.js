var GitHubApi = require("github");
var credentials = require("./credentials");

(function() {

  var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: false,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "/",        // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
      "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    }
  });

  var authenticate = function() {
    github.authenticate( { type: "basic", username: credentials.username, password: credentials.password } );
  };

  module.exports.github = github;
  module.exports.authenticate = authenticate;

})();
