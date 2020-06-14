const githubContext = JSON.parse(process.env.GH_CONTEXT)
const github = require('@actions/github');
const octokit = github.getOctokit(githubContext.token)

/**
 * Update an issue with the provided milestone
 * @param {number} milestone the number of the milestone to associate this issue with
 */
function updateIssueWithMilestone(milestone) {
    console.log(`Milestone: ${milestone}`);
    console.log(`Repository: ${github.context.repository}`);
    console.log(`Event: ${github.context.event}`);
    // return rp(restConfig.buildRequest(`repos/${github.context.repository}/issues/${pr_number}`, 'PATCH', restBody));
}

module.exports = {updateIssueWithMilestone}