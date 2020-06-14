const githubContext = JSON.parse(process.env.GH_CONTEXT)
const github = require('@actions/github');
const octokit = github.getOctokit(githubContext.token)

/**
 * Update an issue with the provided milestone
 * @param {number} milestone the number of the milestone to associate this issue with
 */
async function updateIssueWithMilestone(milestone) {
    let issueNumber = githubContext.event.number;
    console.log(`Adding milestone, ${milestone}, to pull request: ${issueNumber}`);
    const owner = githubContext.repository.split('/')[0]
    const repo = githubContext.repository.split('/')[1]
    return await octokit.issues.update({
        owner: owner,
        repo: repo,
        issue_number: issueNumber,
        milestone: milestone
    });
}

module.exports = {updateIssueWithMilestone}