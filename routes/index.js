var express = require('express');
var router = express.Router();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});


/* GET home page. */
router.get('/user/:username', function (req, res, next) {
  const getUserName = (req) => {
    return req.params.username
  }

  async function asyncCall(req) {
    console.log('calling');
    const result = await octokit.request('GET /users/' + req.params.username)
    // const repos = await octokit.request('https://api.github.com/users/fabpot/repos');
    const repos = await octokit.request('GET /users/{username}/repos', {
      username: req.params.username
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
