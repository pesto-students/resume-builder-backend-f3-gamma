var express = require('express');
var router = express.Router();
const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: "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",
});


/* GET home page. */
router.get('/user/:username', function(req, res, next) {
  const getUserName= (req) =>{
    return req.params.username
  }
  async function asyncCall(req) {
    console.log('calling');
    const result = await octokit.request('GET /users/'+req.params.username)
    // console.log(result.data);
    // expected output: "resolved"
    res.end(JSON.stringify(result.data,null,2))
    return result
  }
  asyncCall(req);
});
module.exports = router;
