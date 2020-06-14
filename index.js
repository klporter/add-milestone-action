const core = require('@actions/core');
const milestone = require('./milestones/milestone');
const issue = require('./issues/issue');
const githubContext = process.env.GH_CONTEXT
const repo = process.env.GITHUB_REPOSITORY

try {
    console.log(`Repo: ${repo}`)
    console.log(`Repository: ${githubContext.repository}`);
    console.log(`Event: ${githubContext.event}`);
    // const currentMilestone = milestone.getCurrentMilestone();
} catch (error) {
    core.setFailed(error.message);
}