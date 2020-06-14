const core = require('@actions/core');
const milestone = require('milestones/milestone');
const issue = require('issues/issue');

try {
    const currentMilestone = milestone.getCurrentMilestone();
} catch (error) {
    core.setFailed(error.message);
}