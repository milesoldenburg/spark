var Q = require('q');
var request = require('superagent');

var accessToken;
var apiRoot = 'https://api.ciscospark.com/v1';

/**
 * Constructor for library.
 *
 * @param       _accessToken Valid access token form OAuth login
 * @constructor
 */
function Spark(_accessToken){
    accessToken = _accessToken;
}

/**
 * Sets new access token.
 *
 * @param _accessToken Valid access token form OAuth login
 */
Spark.prototype.setToken = function(_accessToken){
    accessToken = _accessToken;
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
 */

Spark.prototype.listPeople = function(options){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/people')
        .set('Authorization', 'Bearer ' + accessToken)
        .query(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Shows details for a person, by ID.
 *
 * @param personId  String the personId
 */
Spark.prototype.getPersonDetails = function(personId){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/people/' + personId)
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Gets details from logged in user.
 */
Spark.prototype.getMyDetails = function(){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/people/me')
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/*
 * ROOMS API CALLS
 */

/**
 * Lists rooms that the logged in user is a member of.
 *
 * @param options   https://developer.ciscospark.com/endpoint-rooms-get.html
 */
Spark.prototype.listRooms = function(options){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/rooms')
        .set('Authorization', 'Bearer ' + accessToken)
        .query(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Creates a room. The authenticated user is automatically added as a member of the room.
 *
 * @param options   https://developer.ciscospark.com/endpoint-rooms-post.html
 */
Spark.prototype.createRoom = function(options){
    var deferred = Q.defer();

    request
        .post(apiRoot + '/rooms')
        .set('Authorization', 'Bearer ' + accessToken)
        .type('json')
        .send(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Shows details for a room, by ID.
 *
 * @param roomId    String the roomId requested
 */
Spark.prototype.getRoomDetails = function(roomId){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/rooms/' + roomId)
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Updates details for a room, by ID.
 *
 * @param roomId    String the roomId requested
 * @param options   https://developer.ciscospark.com/endpoint-rooms-roomId-put.html
 */
Spark.prototype.updateRoom = function(roomId, options){
    var deferred = Q.defer();

    request
        .put(apiRoot + '/rooms/' + roomId)
        .set('Authorization', 'Bearer ' + accessToken)
        .type('json')
        .send(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Deletes a room, by ID.
 *
 * @param roomId    String the roomId requested
 */
Spark.prototype.deleteRoom = function(roomId){
    var deferred = Q.defer();

    request
        .delete(apiRoot + '/rooms/' + roomId)
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/*
 * MEMBERSHIPS API CALLS
 */

/**
 * Lists all room memberships. By default, lists memberships for rooms to which the authenticated user belongs.
 *
 * @param options   https://developer.ciscospark.com/endpoint-memberships-get.html
 */
Spark.prototype.listMemberships = function(options){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/memberships')
        .set('Authorization', 'Bearer ' + accessToken)
        .query(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Add someone to a room by Person ID or email address; optionally making them a moderator.
 *
 * @param options   https://developer.ciscospark.com/endpoint-memberships-post.html
 */
Spark.prototype.createMembership = function(options){
    var deferred = Q.defer();

    request
        .post(apiRoot + '/memberships')
        .set('Authorization', 'Bearer ' + accessToken)
        .type('json')
        .send(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Get details for a membership by ID.
 *
 * @param id    String the membershipId requested.
 */
Spark.prototype.getMembershipDetails = function(id){
    var deferred = Q.defer();

    request
        .get(apiRoot + '/memberships/' + id)
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Updates properties for a membership by ID.
 *
 * @param id            String the membershipId requested.
 * @param options       https://developer.ciscospark.com/endpoint-memberships-membershipId-put.html
 */
Spark.prototype.updateMembership = function(id, options){
    var deferred = Q.defer();

    request
        .put(apiRoot + '/memberships/' + id)
        .set('Authorization', 'Bearer ' + accessToken)
        .type('json')
        .send(options)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

/**
 * Deletes a membership by ID.
 *
 * @param id    String the membershipId requested.
 */
Spark.prototype.deleteMembership = function(id){
    var deferred = Q.defer();

    request
        .delete(apiRoot + '/memberships/' + id)
        .set('Authorization', 'Bearer ' + accessToken)
        .end(function(err, res){
            if (err) {
                deferred.reject(err);
            }

            deferred.resolve(res);
        });

    return deferred.promise;
};

// /*
//  * MESSAGES API CALLS
//  */
//
// /**
//  * Lists messages for a specific room.
//  *
//  * @param options   https://developer.ciscospark.com/endpoint-messages-get.html
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.listMessages = function(options, success, error){
//     $.ajax($.extend(defaults, {
//         'data' : options,
//         'error' : error,
//         'success' : success,
//         'url' : apiRoot + 'messages'
//     }));
// };
//
// /**
//  * Posts a plain text message, and optionally, a media content attachment, to a room.
//  *
//  * @param options   https://developer.ciscospark.com/endpoint-messages-post.html
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.createMessage = function(options, success, error){
//     $.ajax($.extend(defaults, {
//         'data' : options,
//         'error' : error,
//         'success' : success,
//         'type' : 'POST',
//         'url' : apiRoot + 'messages'
//     }));
// };
//
// /**
//  * Shows details for a message, by message ID.
//  *
//  * @param messageId String the messageId requested
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.getMessageDetails = function(messageId, success, error){
//     $.ajax($.extend(defaults, {
//         'error' : error,
//         'success' : success,
//         'url' : apiRoot + 'messages/' + messageId
//     }));
// };
//
// /**
//  * Deletes a message, by message ID.
//  *
//  * @param messageId String the messageId requested
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.deleteMessage = function(messageId, success, error){
//     $.ajax($.extend(defaults, {
//         'error' : error,
//         'success' : success,
//         'type' : 'DELETE',
//         'url' : apiRoot + 'messages/' + messageId
//     }));
// };
//
// /*
//  * WEBHOOKS API CALLS
//  */
//
// /**
//  * Lists all webhooks.
//  *
//  * @param options   https://developer.ciscospark.com/endpoint-webhooks-get.html
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.listWebhooks = function(options, success, error){
//     $.ajax($.extend(defaults, {
//         'data' : options,
//         'error' : error,
//         'success' : success,
//         'url' : apiRoot + 'webhooks'
//     }));
// };
//
// /**
//  * Posts a webhook.
//  *
//  * @param options   https://developer.ciscospark.com/endpoint-webhooks-post.html
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.createWebhook = function(options, success, error){
//     $.ajax($.extend(defaults, {
//         'data' : options,
//         'error' : error,
//         'success' : success,
//         'type' : 'POST',
//         'url' : apiRoot + 'webhooks'
//     }));
// };
//
// /**
//  * Shows details for a webhook, by ID.
//  *
//  * @param webhookId String the webhookId
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.getWebhookDetails = function(webhookId, success, error){
//     $.ajax($.extend(defaults, {
//         'error' : error,
//         'success' : success,
//         'url' : apiRoot + 'webhooks/' + webhookId
//     }));
// };
//
// /**
//  * Updates a webhook, by ID.
//  *
//  * @param webhookId String the webhookId
//  * @param options   https://developer.ciscospark.com/endpoint-webhooks-webhookId-put.html
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.updateWebhook = function(webhookId, options, success, error){
//     $.ajax($.extend(defaults, {
//         'data' : options,
//         'error' : error,
//         'success' : success,
//         'type' : 'PUT',
//         'url' : apiRoot + 'webhooks/' + webhookId
//     }));
// };
//
// /**
//  * Deletes a webhook, by ID.
//  *
//  * @param webhookId String the webhookId
//  * @param success   Callback on success, parameter will be JSON response
//  * @param error     Callback on error, parameters will be jqXHR object, String textStatus, and String errorThrown
//  */
// Spark.prototype.deleteWebhook = function(webhookId, success, error){
//     $.ajax($.extend(defaults, {
//         'error' : error,
//         'success' : success,
//         'type' : 'DELETE',
//         'url' : apiRoot + 'webhooks/' + webhookId
//     }));
// };

module.exports = Spark;
