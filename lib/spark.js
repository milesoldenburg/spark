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

module.exports = Spark;
