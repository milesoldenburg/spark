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
        'headers' : {
            'Authorization' : 'Bearer ' + accessToken
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

module.exports = Spark;
