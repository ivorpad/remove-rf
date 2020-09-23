const core = require('@actions/core');
const io = require("@actions/io");

async function run() {
  try {
    const path = core.getInput('path', { required: true });
    await io.rmRF(path);
    core.debug(path); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
  } catch (error) {
    core.setFailed(error.message);
  }
}
run();
 