/**
 * Telstra Messaging API
 * The Telstra Messaging API specification
 *
 * The version of the OpenAPI document: 2.2.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import OAuthResponse from '../model/OAuthResponse';

/**
* Authentication service.
* @module api/AuthenticationApi
* @version 1.0.8
*/
export default class AuthenticationApi {

    /**
    * Constructs a new AuthenticationApi. 
    * @alias module:api/AuthenticationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Generate OAuth2 token
     * To generate an OAuth2 Authentication token, pass through your `Client key` and `Client secret` that you received when you registered for the **API Free Trial** Product.  The grant_type should be left as `client_credentials` and the scope as `NSMS`.  The token will expire in one hour. 
     * @param {String} clientId 
     * @param {String} clientSecret 
     * @param {String} grantType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.scope NSMS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/OAuthResponse} and HTTP response
     */
    authTokenWithHttpInfo(clientId, clientSecret, grantType, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientId' is set
      if (clientId === undefined || clientId === null) {
        throw new Error("Missing the required parameter 'clientId' when calling authToken");
      }
      // verify the required parameter 'clientSecret' is set
      if (clientSecret === undefined || clientSecret === null) {
        throw new Error("Missing the required parameter 'clientSecret' when calling authToken");
      }
      // verify the required parameter 'grantType' is set
      if (grantType === undefined || grantType === null) {
        throw new Error("Missing the required parameter 'grantType' when calling authToken");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'client_id': clientId,
        'client_secret': clientSecret,
        'grant_type': grantType,
        'scope': opts['scope']
      };

      let authNames = [];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = OAuthResponse;
      return this.apiClient.callApi(
        '/oauth/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Generate OAuth2 token
     * To generate an OAuth2 Authentication token, pass through your `Client key` and `Client secret` that you received when you registered for the **API Free Trial** Product.  The grant_type should be left as `client_credentials` and the scope as `NSMS`.  The token will expire in one hour. 
     * @param {String} clientId 
     * @param {String} clientSecret 
     * @param {String} grantType 
     * @param {Object} opts Optional parameters
     * @param {String} opts.scope NSMS
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/OAuthResponse}
     */
    authToken(clientId, clientSecret, grantType, opts) {
      return this.authTokenWithHttpInfo(clientId, clientSecret, grantType, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
