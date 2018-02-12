/**
 * Telstra Messaging API
 *  The Telstra SMS Messaging API allows your applications to send and receive SMS text messages from Australia's leading network operator.  It also allows your application to track the delivery status of both sent and received SMS messages. 
 *
 * OpenAPI spec version: 2.2.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.TelstraMessaging) {
      root.TelstraMessaging = {};
    }
    root.TelstraMessaging.InboundPollResponse = factory(root.TelstraMessaging.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The InboundPollResponse model module.
   * @module model/InboundPollResponse
   * @version 1.0.1
   */

  /**
   * Constructs a new <code>InboundPollResponse</code>.
   * Poll for incoming messages returning the latest. Only works if no callback url was specified when provisioning a number.
   * @alias module:model/InboundPollResponse
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InboundPollResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InboundPollResponse} obj Optional instance to populate.
   * @return {module:model/InboundPollResponse} The populated <code>InboundPollResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('destinationAddress')) {
        obj['destinationAddress'] = ApiClient.convertToType(data['destinationAddress'], 'String');
      }
      if (data.hasOwnProperty('senderAddress')) {
        obj['senderAddress'] = ApiClient.convertToType(data['senderAddress'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageId')) {
        obj['messageId'] = ApiClient.convertToType(data['messageId'], 'String');
      }
      if (data.hasOwnProperty('sentTimestamp')) {
        obj['sentTimestamp'] = ApiClient.convertToType(data['sentTimestamp'], 'String');
      }
    }
    return obj;
  }

  /**
   * message status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The phone number (recipient) that the message was sent to(in E.164 format).
   * @member {String} destinationAddress
   */
  exports.prototype['destinationAddress'] = undefined;
  /**
   * The phone number (sender) that the message was sent from (in E.164 format).
   * @member {String} senderAddress
   */
  exports.prototype['senderAddress'] = undefined;
  /**
   * Text of the message that was sent
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * Message Id
   * @member {String} messageId
   */
  exports.prototype['messageId'] = undefined;
  /**
   * The date and time when the message was sent by recipient.
   * @member {String} sentTimestamp
   */
  exports.prototype['sentTimestamp'] = undefined;



  return exports;
}));

