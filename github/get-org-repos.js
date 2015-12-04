var github = require('./github-wrapper').github;
var authenticate = require('./github-wrapper').authenticate;

var org = 'ATL-WDI-Curriculum';

authenticate();

github.repos.getFromOrg({ org: org}, function(err, repos) {
  if (err) {
    console.log('ERROR:', err);
  }
  else {
    repos.forEach(function(repo) {
      // console.log('repo:', JSON.stringify(repo));
      github.issues.repoIssues({ user: org, repo: repo.name }, function(err, issues) {
        if (err) {
          console.log('ERROR:', err);
        }
        else {
          issues.forEach(function(issue) {
            console.log(repo.name + ': ' + issue.title);
          });
        }
      });
      // console.log(repo.name, 'issues:', getIssueCount(repo.name)); // , repo.owner.url);
    });
  }
});

/*
github.user.get({}, function(err, res) {
  if (err) {
    console.log("ERROR:", err);
  }
  else {
    github.repos.getAll({}, function(err, res) {
      if (err) {
        console.log("ERROR:", err);
      }
      else {
        // console.log("GOT RES?", res);
        res.forEach(function(repo) {
          console.log(repo.name, repo.owner.login); // , repo.owner.url);
        });
      }
    });
  }
});
*/
