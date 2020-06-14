const rp = require('request-promise');
const restConfig = require('../../rest/rest-config');
const github = require('@actions/github');

/**
 * Gets the milestone with the nearest 'dueOn'
 */
function getCurrentMilestone() {
    console.log(`Repository: ${github.context.repository}`);
    console.log(`Event: ${github.context.event}`);
    // return rp(restConfig.buildRequest(`repos/${github.context.repository}/milestones?state=open&direction=desc`, 'GET'));
}

module.exports = {getCurrentMilestone}