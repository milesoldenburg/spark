# spark
JavaScript browser module for using Cisco Spark REST API

## Preparation
This task only needs to be run once or whenever a new node module is installed.

	npm install
	
For easier access it is recommended to install gulp globally.

	sudo npm install -g gulp
	
If grunt is not installed globally, then you must run

	./node_modules/gulp/bin/gulp.js
	
instead of

	gulp

## Gulp Tasks
The default task will lint all JS and build the module.

	gulp
	
Lint and check both the configuration and lib JavaScript files. This task should be run after any change to the JavaScript files and all errors should be fixed before committing.

	grunt lint
