const github = require('@actions/github');

/**
 * Gets standard options for a git api rest call
 * @param {string} path the path of the url for the rest call
 * @param {string} method the rest method to call
 * @param {string} body the body of the request
 */
function buildRequest(path, method, body) {
    return {
        method: method,
        uri: `https://api.github.com/${path}`,
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'token ' + github.context.token
        },
        json: true,
        body: body
    }

}

module.exports = {buildRequest}