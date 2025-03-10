const core = require('@actions/core');

try {
  // Get input from the user
  const name = core.getInput('name');
  
  // Set the output
  const message = `Hello world, ${name}!`;
  core.setOutput('message', message);
  
  console.log(message); // Log the message to the console
} catch (error) {
  core.setFailed(`Action failed with error: ${error}`);
}

