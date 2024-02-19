const { execSync } = require('child_process');
const path = require('path');

// Get the project name from the command line arguments
const projectName = process.argv[2];

if (!projectName) {
    console.error('Please provide a project name');
    process.exit(1);
}

// Define the path where the project should be cloned
const projectPath = path.join(process.cwd(), projectName);

// Clone the template into the project path
execSync(`git clone https://github.com/eekelof/SoloJSX-template-ts.git ${projectPath}`);