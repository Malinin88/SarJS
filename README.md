This is a code base for SaratovJS project.

### Steps to start:

	1) Run "npm i" from root directory of the SarJS project

	2) If using Webstorm, add Babel watcher for es6 files: https://babeljs.io/docs/setup/#webstorm

	3) Run "webpack" command with "webpack --config webpack.config-compiled.js"

### How to build

Run "webpack" command with "webpack --config webpack.config-compiled.js"

### Known Issues

1) Before building, make sure that "webpack.config.js" file is transpiled to es5 version script.
Check is there the "webpack.config-compiled.js" in the "tools" folder. If the source file is not transpiled, make sure you've added the
Babel file watcher, modify the webpack.config file and save it. Thus, you'll initiate the Babel task execution.

