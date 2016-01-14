# spark
JavaScript browser module for using Cisco Spark REST API.

This library has a dependency on jQuery, which must be included before calling the library.

## Usage
### Quick Start
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Spark Test Page</title>
</head>
<body>
    <script src="//code.jquery.com/jquery-2.2.0.min.js" type="text/javascript"></script>
    <script src="spark.js" type="text/javascript"></script>
    <script type="text/javascript">
        CiscoSpark = new CiscoSpark('YOUR_ACCESS_TOKEN_HERE');

        CiscoSpark.getMyDetails();
    </script>
</body>
</html>
```

### Instantiation
The module requires you have an existing [Access Token](https://developer.ciscospark.com/authentication.html).

	CiscoSpark = new CiscoSpark('YOUR_ACCESS_TOKEN_HERE');
	
### Methods
Pass in success and error callbacks for when data has been successfully received or when there is an error in the API call.

The default success callback simply prints the response to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `success(Anything data, String textStatus, jqXHR jqXHR)`.

The default error callback simply prints the error received to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `error(jqXHR jqXHR, String textStatus, String errorThrown)`.

#### getMyDetails([success], [error])
Show the profile for the authenticated user.

	CiscoSpark.getMyDetails();

## Building

### Preparation
This task only needs to be run once or whenever a new node module is installed.

	npm install
	
For easier access it is recommended to install gulp globally.

	sudo npm install -g gulp
	
If grunt is not installed globally, then you must run

	./node_modules/gulp/bin/gulp.js
	
instead of

	gulp

### Gulp Tasks
The default task will lint all JS and build the module.

	gulp
	
Lint and check both the configuration and lib JavaScript files. This task should be run after any change to the JavaScript files and all errors should be fixed before committing.

	gulp lint
	
Produces the build module.

	gulp webpack
	
Launches a webpack development server for live testing.

	gulp dev
	
## Contributing
Ensure that your code lints properly and has the existing styles.
