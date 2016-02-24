This is a code base for SaratovJS project.

### How to start

1) Clone the code base to the local repo;

2) Run "npm i" from root directory of the SarJS project;

### How to build

In console proceed to the "tools" directory and run: 

	NODE_ENV=development webpack
	or for windows:
	set NODE_ENV=development&&webpack

or for production (minified):	
	NODE_ENV=production webpack
for windows:
    set NODE_ENV=production&&webpack
    
### How to create server configuration
Node interpreter - smth like: C:\Program Files\nodejs\node.exe
Javascript file: src\server.js
Also tick "Single instance only" - for only one server running
For finding "config" module in current folder too
    Environment variables: NODE_PATH=.
For logger:
    Environment variables: NODE_ENV=development
    
### How to start tests:
    In console run:
    npm test

### Known Issues

1) Anton M.: For some reason NPM doesn't install modules from the Express dependencies, when installing Express itself.
There is an issue on SOF http://stackoverflow.com/questions/18401606/npm-doesnt-install-module-dependencies
So I installed all the required modules manually with saving deps to the root-level package.json. 

2) Novikov P.: Debugger on windows:
    You could get an error: 
        Cannot stop on breakpoint due to internal error: org.jetbrains.v8.V8CommandProcessor$1: 
    How to fix described there: https://youtrack.jetbrains.com/issue/IDEA-139990
    Also I can say what to do:
        1. go to C:\Program Files (x86)\JetBrains\WebStorm 11.0\bin
        2. open file WebStorm.exe.vmoptions or/and
        3. add string: -Dnodejs.debugger.use.jb.support=false
        4. restart IDE