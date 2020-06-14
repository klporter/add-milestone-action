const core = require('@actions/core');
const milestone = require('./milestones/milestone');
const issue = require('./issues/issue');
const githubContext = JSON.parse(process.env.GH_CONTEXT)

try {
    console.log(`Repository: ${githubContext.repository}`);
    console.log('Getting current milestone')
    const currentMilestone = milestone.getCurrentMilestone();
    issue.updateIssueWithMilestone(currentMilestone[0])
        .then(() => console.log("Finished adding milestone"))
} catch (error) {
    core.setFailed(error.message);
}