# spark
JavaScript browser AMD/CommonJS module for using Cisco Spark REST API v1.

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

### RequireJS
```
define(['spark'], function(CiscoSparkAPI){
	CiscoSpark = new CiscoSparkAPI('YOUR_ACCESS_TOKEN_HERE');
});
```

### CommonJS
```
var CiscoSparkAPI = require('./spark.js');

CiscoSpark = new CiscoSparkAPI('YOUR_ACCESS_TOKEN_HERE');
```

### Instantiation
The module requires you have an existing [Access Token](https://developer.ciscospark.com/authentication.html).

	CiscoSpark = new CiscoSpark('YOUR_ACCESS_TOKEN_HERE');
	
### Methods
Pass in success and error callbacks for when data has been successfully received or when there is an error in the API call.

The default success callback simply prints the response to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `success(Anything data, String textStatus, jqXHR jqXHR)`.

The default error callback simply prints the error received to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `error(jqXHR jqXHR, String textStatus, String errorThrown)`.

Options object parameters, example response types, and error message types are available at each of the 'Official Documentation' links.

#### getMyDetails([success] [, error])
Show the profile for the authenticated user.

	CiscoSpark.getMyDetails();
	
[Official Documentation](https://developer.ciscospark.com/endpoint-people-me-get.html)
	
#### listMessages(options [, success] [, error])
Lists all messages in a room. If present, includes the associated media content attachment for each message.

The list sorts the messages in descending order by creation date.

	CiscoSpark.listMessages({
		'roomId' : 'ROOM_ID_HERE'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-messages-get.html)

#### listRooms([options] [, success] [, error])
List rooms.

By default, lists rooms to which the authenticated user belongs.

	CiscoSpark.listRooms();
	
[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-get.html)

#### createMessage([options] [, success] [, error])
Posts a plain text message, and optionally, a media content attachment, to a room.

	CiscoSpark.createMessage({
		'roomId' : 'ROOM_ID_HERE',
		'text' : 'hello, world'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-messages-post.html)

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
