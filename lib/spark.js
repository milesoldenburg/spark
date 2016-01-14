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
 * @param   options Parameter object.
 *          roomId          string  List messages for a room, by ID. (Required)
 *          before          string  List messages sent before a date and time, in ISO8601 format.
 *          beforeMessage 	string  List messages sent before a message, by ID.
 *          max             integer Limit the maximum number of messages in the response.
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
 * @param options   Parameter object.
 *          showSipAddress  boolean To show the SIP address for the room in the response, set this value to true.
 *          max 	        integer Limit the maximum number of rooms in the response.
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

module.exports = Spark;
