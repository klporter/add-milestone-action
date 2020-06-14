const rp = require('request-promise');
const restConfig = require('../request/rest-config');
const github = require('@actions/github');

/**
 * Gets the milestone with the nearest 'dueOn'
 */
function getCurrentMilestone() {
    console.log(`Repository: ${github.repository}`);
    console.log(`Event: ${github.event}`);
    // return rp(restConfig.buildRequest(`repos/${github.context.repository}/milestones?state=open&direction=desc`, 'GET'));
}

module.exports = {getCurrentMilestone}