// Intentionally flawed test file for CodeRabbit review research
const password = "hardcoded-password-123";

function runCommand(userInput) {
  const { exec } = require('child_process');
  exec("echo " + userInput);
}

module.exports = { runCommand, password };
