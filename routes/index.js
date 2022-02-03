var express = require('express');
var router = express.Router();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.KEY,
});


/* GET user details by user name. */
router.get('/user/:username', function (req, res, next) {


  const getUserName = (req) => {
    return req.params.username
  }

  async function asyncCall(req) {
    console.log('calling');
    const result = await octokit.request('GET /users/' + getUserName(req))
    const repo = octokit.rest.repos.listForUser({
      username: req.params.username
    });
    const starred = await octokit.request('https://api.github.com/users/fabpot/starred');
    const repos = await octokit.request('GET /users/{username}/repos', {
      username: getUserName(req)
    })


    let repoData = repos.data.map((item) => {
      return { 
      "name": item.name,
      "desc": item.description,
      "starts": item.stargazers_count,
      "fork": item.fork,
      "watchers": item.watchers }
    }
    );
    // delete result.data.updated._at;
    // console.log(repos);

    result.data = {
      "basic": result.data,
      "repositories": repoData
    }
    // expected output: "resolved"
    res.end(JSON.stringify(result.data, null, 2))
    return result
  }
  asyncCall(req);
});
module.exports = router;
