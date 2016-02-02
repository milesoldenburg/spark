var accessToken;
var apiRoot = 'https://api.ciscospark.com/v1/';

/**
 * Default parameters used for all API requests.
 *
 * @type {{dataType: string, headers: {Authorization: string}}}
 */
var defaults;

/**
 * Initialization of module.
 */
var init = function(){
    defaults = {
        'dataType' : 'json',
        'error' : function(jqXHR, textStatus, errorThrown){
            console.log(jqXHR.status, errorThrown);
        },
        'headers' : {
            'Authorization' : 'Bearer ' + accessToken
        },
        'success' : function(data){
            console.log(data);
        }
    };
};

/**
 * Constructor for library.
 *
 * @param       _accessToken Valid access token form OAuth login
 * @constructor
 */
function Spark(_accessToken){
    accessToken = _accessToken;
    init();
}

/**
 * Sets new access token.
 *
 * @param _accessToken Valid access token form OAuth login
 */
Spark.prototype.setToken = function(_accessToken){
    accessToken = _accessToken;
    init();
};

/**
 * Retrieves access token.
 *
 * @returns String The access token
 */
Spark.prototype.getToken = function(){
    return accessToken;
};

/*
 * PEOPLE API CALLS
 */

/**
 * List people in your organization.
 *
 * @param options   https://developer.ciscospark.com/endpoint-people-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.listPeople = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'people'
    }));
};

/**
 * Shows details for a person, by ID.
 *
 * @param personId  String the personId
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getPersonDetails = function(personId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'people/' + personId
    }));
};

/**
 * Gets details from logged in user.
 *
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getMyDetails = function(success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'people/me'
    }));
};

/*
 * ROOMS API CALLS
 */

/**
 * Lists rooms that the logged in user is a member of.
 *
 * @param options   https://developer.ciscospark.com/endpoint-rooms-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.listRooms = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'rooms'
    }));
};

/**
 * Creates a room. The authenticated user is automatically added as a member of the room.
 *
 * @param options   https://developer.ciscospark.com/endpoint-rooms-post.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.createRoom = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'POST',
        'url' : apiRoot + 'rooms'
    }));
};

/**
 * Shows details for a room, by ID.
 *
 * @param roomId    String the roomId requested
 * @param options   https://developer.ciscospark.com/endpoint-rooms-roomId-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getRoomDetails = function(roomId, options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'rooms/' + roomId
    }));
};

/**
 * Updates details for a room, by ID.
 *
 * @param roomId    String the roomId requested
 * @param options   https://developer.ciscospark.com/endpoint-rooms-roomId-put.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.updateRoom = function(roomId, options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'PUT',
        'url' : apiRoot + 'rooms/' + roomId
    }));
};

/**
 * Deletes a room, by ID.
 *
 * @param roomId    String the roomId requested
 * @param options   https://developer.ciscospark.com/endpoint-rooms-roomId-delete.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.deleteRoom = function(roomId, options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'DELETE',
        'url' : apiRoot + 'rooms/' + roomId
    }));
};

/*
 * MEMBERSHIPS API CALLS
 */

/**
 * Lists all room memberships. By default, lists memberships for rooms to which the authenticated user belongs.
 *
 * @param options   https://developer.ciscospark.com/endpoint-memberships-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.listMemberships = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'memberships'
    }));
};

/**
 * Add someone to a room by Person ID or email address; optionally making them a moderator.
 *
 * @param options   https://developer.ciscospark.com/endpoint-memberships-post.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.createMembership = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'POST',
        'url' : apiRoot + 'memberships'
    }));
};

/**
 * Get details for a membership by ID.
 *
 * @param membershipId  String the membershipId requested.
 * @param success       Callback on success, parameter will be JSON response
 * @param error         Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getMembershipDetails = function(membershipId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'memberships/' + membershipId
    }));
};

/**
 * Updates properties for a membership by ID.
 *
 * @param membershipId  String the membershipId requested.
 * @param options       https://developer.ciscospark.com/endpoint-memberships-membershipId-put.html
 * @param success       Callback on success, parameter will be JSON response
 * @param error         Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.updateMembership = function(membershipId, options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'PUT',
        'url' : apiRoot + 'memberships/' + membershipId
    }));
};

/**
 * Deletes a membership by ID.
 *
 * @param membershipId  String the membershipId requested.
 * @param success       Callback on success, parameter will be JSON response
 * @param error         Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.deleteMembership = function(membershipId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'type' : 'DELETE',
        'url' : apiRoot + 'memberships/' + membershipId
    }));
};

/*
 * MESSAGES API CALLS
 */

/**
 * Lists messages for a specific room.
 *
 * @param options   https://developer.ciscospark.com/endpoint-messages-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.listMessages = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'messages'
    }));
};

/**
 * Posts a plain text message, and optionally, a media content attachment, to a room.
 *
 * @param options   https://developer.ciscospark.com/endpoint-messages-post.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.createMessage = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'POST',
        'url' : apiRoot + 'messages'
    }));
};

/**
 * Shows details for a message, by message ID.
 *
 * @param messageId String the messageId requested
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getMessageDetails = function(messageId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'messages/' + messageId
    }));
};

/**
 * Deletes a message, by message ID.
 *
 * @param messageId String the messageId requested
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.deleteMessage = function(messageId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'type' : 'DELETE',
        'url' : apiRoot + 'messages/' + messageId
    }));
};

/*
 * WEBHOOKS API CALLS
 */

/**
 * Lists all webhooks.
 *
 * @param options   https://developer.ciscospark.com/endpoint-webhooks-get.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.listWebhooks = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'webhooks'
    }));
};

/**
 * Posts a webhook.
 *
 * @param options   https://developer.ciscospark.com/endpoint-webhooks-post.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.createWebhook = function(options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'POST',
        'url' : apiRoot + 'webhooks'
    }));
};

/**
 * Shows details for a webhook, by ID.
 *
 * @param webhookId String the webhookId
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.getWebhookDetails = function(webhookId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'url' : apiRoot + 'webhooks/' + webhookId
    }));
};

/**
 * Updates a webhook, by ID.
 *
 * @param webhookId String the webhookId
 * @param options   https://developer.ciscospark.com/endpoint-webhooks-webhookId-put.html
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.updateWebhook = function(webhookId, options, success, error){
    $.ajax($.extend(defaults, {
        'data' : options,
        'error' : error,
        'success' : success,
        'type' : 'PUT',
        'url' : apiRoot + 'webhooks/' + webhookId
    }));
};

/**
 * Deletes a webhook, by ID.
 *
 * @param webhookId String the webhookId
 * @param success   Callback on success, parameter will be JSON response
 * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
 */
Spark.prototype.deleteWebhook = function(webhookId, success, error){
    $.ajax($.extend(defaults, {
        'error' : error,
        'success' : success,
        'type' : 'DELETE',
        'url' : apiRoot + 'webhooks/' + webhookId
    }));
};

module.exports = Spark;
