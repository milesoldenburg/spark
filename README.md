# spark
JavaScript browser AMD/CommonJS module for using Cisco Spark REST API v1.

## Usage

### Dependencies
This library has a dependency on jQuery, which must be included before calling the library.

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
	
You may instantiate the library and then set the Access Token after the constructor as well. The Access Token must be set for making any API calls.

	CiscoSpark = new CiscoSpark();
	CiscoSpark.setToken('YOUR_ACCESS_TOKEN_HERE');
	
### Methods
Pass in success and error callbacks for when data has been successfully received or when there is an error in the API call.

The default success callback simply prints the response to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `success(Anything data, String textStatus, jqXHR jqXHR)`.

The default error callback simply prints the error received to the console. If a callback is supplied the parameters are the jQuery AJAX parameters, `error(jqXHR jqXHR, String textStatus, String errorThrown)`.

Options object parameters, example response types, and error message types are available at each of the 'Official Documentation' links.

#### General

##### getToken()
Returns the Access Token.

	CiscoSpark.getToken();
	
#### People

##### listPeople([options] [, success] [, error])
List people in your organization.

| Option        | Type    | Description                                        | Required |
|-------------|---------|----------------------------------------------------|----------|
| email       | string  | List people with this email address.               |          |
| displayName | string  | List people whose name starts with this string.    |          |
| max         | integer | Limit the maximum number of people in the response |          |

	CiscoSpark.listPeople({
		'email' : 'example@example.com'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-people-get.html)
	
##### getPersonDetails(personId [, success] [, error])
Shows details for a person, by ID.

	CiscoSpark.getPersonDetails('EXAMPLE_PERSON_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-people-personId-get.html)

##### getMyDetails([success] [, error])
Show the profile for the authenticated user.

	CiscoSpark.getMyDetails();
	
[Official Documentation](https://developer.ciscospark.com/endpoint-people-me-get.html)

#### Rooms

##### listRooms([options] [, success] [, error])
List rooms. By default, lists rooms to which the authenticated user belongs.

| Option         | Type    | Description                                                                                                                                                                                                          | Required |
|----------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| showSipAddress | boolean | To show the SIP address for the room in the response, set this value to `true`. A session initiation protocol (SIP) address is a URI that addresses a specific telephone extension on a voice over IP (VOIP) system. |          |
| max            | integer | Limit the maximum number of rooms in the response                                                                                                                                                                    |          |

	CiscoSpark.listRooms();
	
[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-get.html)

##### createRoom(options [, success] [, error])
Creates a room. The authenticated user is automatically added as a member of the room.

| Option | Type   | Description                        | Required           |
|--------|--------|------------------------------------|--------------------|
| title  | string | A user-friendly name for the room. | ✓  |

	CiscoSpark.createRoom({
		'title' : 'My Example Room'
	});

[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-post.html)

##### getRoomDetails(roomId [, options] [, success] [, error])
Shows details for a room, by ID.

| Option         | Type    | Description                                                                                                                                                                                                          | Required |
|----------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| showSipAddress | boolean | To show the SIP address for the room in the response, set this value to `true`. A session initiation protocol (SIP) address is a URI that addresses a specific telephone extension on a voice over IP (VOIP) system. |          |

	CiscoSpark.getRoomDetails('EXAMPLE_ROOM_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-roomId-get.html)

##### updateRoom(roomId, options [, success] [, error])
Updates details for a room, by ID.

| Option | Type   | Description                        | Required           |
|--------|--------|------------------------------------|--------------------|
| title  | string | A user-friendly name for the room. | ✓  |

	CiscoSpark.updateRoom('EXAMPLE_ROOM_ID', {
		'title' : 'My New Room Name'
	});

[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-roomId-put.html)

##### deleteRoom(roomId [, success] [, error])
Deletes a room, by ID.

	CiscoSpark.deleteRoom('EXAMPLE_ROOM_ID');

[Official Documentation](https://developer.ciscospark.com/endpoint-rooms-roomId-delete.html)

#### Memberships

##### listMemberships([options] [, success] [, error])
Lists all room memberships. By default, lists memberships for rooms to which the authenticated user belongs.

| Option      | Type    | Description                                          | Required |
|-------------|---------|------------------------------------------------------|----------|
| roomId      | string  | Limit results to a specific room, by ID              |          |
| personId    | string  | Limit results to a specific person, by ID            |          |
| personEmail | string  | Limit results to a specific person, by email address |          |
| max         | integer | Limit the maximum number of items in the response    |          |

	CiscoSpark.listMemberships();

[Official Documentation](https://developer.ciscospark.com/endpoint-memberships-get.html)

##### createMembership(options [, success] [, error])
Add someone to a room by Person ID or email address; optionally making them a moderator.

| Option      | Type    | Description                                       | Required |
|-------------|---------|---------------------------------------------------|----------|
| roomId      | string  | The room ID                                       | ✓        |
| personId    | string  | The person ID                                     |          |
| personEmail | string  | The email address of the person                   |          |
| isModerator | boolean | Set to `true` to make the person a room moderator |          |

	CiscoSpark.createMembership({
		'roomId' : 'EXAMPLE_ROOM_ID'
	});

[Official Documentation](https://developer.ciscospark.com/endpoint-memberships-post.html)

##### getMembershipDetails(membershipId [, success] [, error]
Get details for a membership by ID.

	CiscoSpark.getMembershipDetails('EXAMPLE_MEMBERSHIP_ID');

[Official Documentation](https://developer.ciscospark.com/endpoint-memberships-membershipId-get.html)

##### updateMembership(membershipId, options [, success] [, error]
Updates properties for a membership by ID.

| Option      | Type    | Description                                       | Required |
|-------------|---------|---------------------------------------------------|----------|
| isModerator | boolean | Set to `true` to make the person a room moderator | ✓        |

	CiscoSpark.updateMembership('EXAMPLE_MEMBERSHIP_ID', {
		'isModerator' : true
	});

[Official Documentation](https://developer.ciscospark.com/endpoint-memberships-membershipId-put.html)

##### deleteMembership(membershipId [, success] [, error]
Deletes a membership by ID.

	CiscoSpark.deleteMembership('EXAMPLE_MEMBERSHIP_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-memberships-membershipId-delete.html)

#### Messages

##### listMessages(options [, success] [, error])
Lists all messages in a room. If present, includes the associated media content attachment for each message.

The list sorts the messages in descending order by creation date.

| Option        | Type    | Description                                                  | Required |
|---------------|---------|--------------------------------------------------------------|----------|
| roomId        | string  | List messages for a room, by ID                              | ✓        |
| before        | string  | List messages sent before a date and time, in ISO8601 format |          |
| beforeMessage | string  | List messages sent before a message, by ID                   |          |
| max           | integer | Limit the maximum number of messages in the response         |          |

	CiscoSpark.listMessages({
		'roomId' : 'ROOM_ID_HERE'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-messages-get.html)

##### createMessage(options [, success] [, error])
Posts a plain text message, and optionally, a media content attachment, to a room.

| Option        | Type   | Description                                                                                                                                                                                                                                                  | Required |
|---------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| roomId        | string | The room ID                                                                                                                                                                                                                                                  |          |
| text          | string | The plain text message to post to the room                                                                                                                                                                                                                   |          |
| files         | string | A public URL that Spark can use to fetch attachments. Currently supports only a single URL.,The Spark Cloud downloads the content one time shortly after the message is created and automatically converts it to a format that all Spark clients can render. |          |
| toPersonId    | string | The ID of the recipient when sending a private1:1 message                                                                                                                                                                                                    |          |
| toPersonEmail | string | The email address of the recipient when sendinga private 1:1 message                                                                                                                                                                                         |          |

	CiscoSpark.createMessage({
		'roomId' : 'ROOM_ID_HERE',
		'text' : 'hello, world'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-messages-post.html)

##### getMessageDetails(messageId [, success] [, error]
Shows details for a message, by message ID.

	CiscoSpark.getMessageDetails('EXAMPLE_MESSAGE_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-messages-messageId-get.html)

##### deleteMessage(messageId [, success] [, error]
Deletes a message, by message ID.

	CiscoSpark.deleteMessage('EXAMPLE_MESSAGE_ID');

[Official Documentation](https://developer.ciscospark.com/endpoint-messages-messageId-delete.html)

#### Webhooks

##### listWebhooks([options] [, success] [, error])
Lists all webhooks.

| Option | Type    | Description                                          | Required |
|--------|---------|------------------------------------------------------|----------|
| max    | integer | Limit the maximum number of webhooks in the response |          |

	CiscoSpark.listWebhooks();
	
[Official Documentation](https://developer.ciscospark.com/endpoint-webhooks-get.html)

##### createWebhook(options [, success] [, error]
Posts a webhook.

| Option    | Type   | Description                                        | Required |
|-----------|--------|----------------------------------------------------|----------|
| name      | string | A user-friendly name for this webhook              | ✓        |
| targetUrl | string | The URL that receives POST requests for each event | ✓        |
| resource  | string | The resource type for the webhook                  | ✓        |
| event     | string | The event type for the webhook                     | ✓        |
| filter    | string | The filter that defines the webhook scope          | ✓        |

	CiscoSpark.createWebhook({
		'name' : 'EXAMPLE_WEBHOOK_NAME',
		'targetUrl' : 'http://example.com/webhook',
		'resource' : 'messages',
		'event' : 'created',
		'filter' : 'roomId=EXAMPLE_ROOM_ID'
	});
	
[Official Documentation](https://developer.ciscospark.com/endpoint-webhooks-post.html)

##### getWebhookDetails(webhookId [, success] [, error])
Shows details for a webhook, by ID.

	CiscoSpark.getWebhookDetails('EXAMPLE_WEBHOOK_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-webhooks-webhookId-get.html)

##### updateWebhook(webhookId, options [, success] [, error])
Updates a webhook, by ID.

| Option    | Type   | Description                                        | Required |
|-----------|--------|----------------------------------------------------|----------|
| name      | string | A user-friendly name for this webhook              | ✓        |
| targetUrl | string | The URL that receives POST requests for each event | ✓        |

	CiscoSpark.updateWebhook('EXAMPLE_WEBHOOK_ID', {
		'name' : 'EXAMPLE_WEBHOOK_NAME',
		'targetUrl' : 'http://example.com/webhook'
	});

[Official Documentation](https://developer.ciscospark.com/endpoint-webhooks-webhookId-put.html)

##### deleteWebhook(webhookId [, success] [, error])
Deletes a webhook, by ID.

	CiscoSpark.deleteWebhook('EXAMPLE_WEBHOOK_ID');
	
[Official Documentation](https://developer.ciscospark.com/endpoint-webhooks-webhookId-delete.html)

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
Ensure that your code lints properly and maintains the existing styles.
