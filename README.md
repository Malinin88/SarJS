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
Javascript file: bin\www
Also tick "Single instance only" - for only one server running

### Known Issues

1) Anton M.: For some reason NPM doesn't install modules from the Express dependencies, when installing Express itself.
There is an issue on SOF http://stackoverflow.com/questions/18401606/npm-doesnt-install-module-dependencies
So I installed all the required modules manually with saving deps to the root-level package.json. 
