/**
 * Telstra Messaging API
 * The API specification for Telstra Messaging API
 *
 * The version of the OpenAPI document: 2.2.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SendSMSRequest model module.
 * @module model/SendSMSRequest
 * @version 1.0.8
 */
class SendSMSRequest {
    /**
     * Constructs a new <code>SendSMSRequest</code>.
     * @alias module:model/SendSMSRequest
     * @param to {String} Phone number (in E.164 format) to send the SMS to. This number can be in international format `\"to\": \"+61412345678\"` or in national format. Can be an array of strings if sending to multiple numbers: `\"to\":[\"+61412345678\", \"+61418765432\"]` 
     * @param body {String} The text body of the message. Messages longer than 160 characters will be counted as multiple messages. This field contains the message text, this can be up to 1900 (for a single recipient) or 500 (for multiple recipients) UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device 
     */
    constructor(to, body) { 
        
        SendSMSRequest.initialize(this, to, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, to, body) { 
        obj['to'] = to;
        obj['body'] = body;
    }

    /**
     * Constructs a <code>SendSMSRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SendSMSRequest} obj Optional instance to populate.
     * @return {module:model/SendSMSRequest} The populated <code>SendSMSRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SendSMSRequest();

            if (data.hasOwnProperty('to')) {
                obj['to'] = ApiClient.convertToType(data['to'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('from')) {
                obj['from'] = ApiClient.convertToType(data['from'], 'String');
            }
            if (data.hasOwnProperty('validity')) {
                obj['validity'] = ApiClient.convertToType(data['validity'], 'Number');
            }
            if (data.hasOwnProperty('scheduledDelivery')) {
                obj['scheduledDelivery'] = ApiClient.convertToType(data['scheduledDelivery'], 'Number');
            }
            if (data.hasOwnProperty('notifyURL')) {
                obj['notifyURL'] = ApiClient.convertToType(data['notifyURL'], 'String');
            }
            if (data.hasOwnProperty('replyRequest')) {
                obj['replyRequest'] = ApiClient.convertToType(data['replyRequest'], 'Boolean');
            }
            if (data.hasOwnProperty('priority')) {
                obj['priority'] = ApiClient.convertToType(data['priority'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Phone number (in E.164 format) to send the SMS to. This number can be in international format `\"to\": \"+61412345678\"` or in national format. Can be an array of strings if sending to multiple numbers: `\"to\":[\"+61412345678\", \"+61418765432\"]` 
 * @member {String} to
 */
SendSMSRequest.prototype['to'] = undefined;

/**
 * The text body of the message. Messages longer than 160 characters will be counted as multiple messages. This field contains the message text, this can be up to 1900 (for a single recipient) or 500 (for multiple recipients) UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device 
 * @member {String} body
 */
SendSMSRequest.prototype['body'] = undefined;

/**
 * This will be the source address that will be displayed on the receiving device. You can set an Alphanumeric sender ID of up to 11 characters that the SMS was sent from. Phone numbers in the `from` attribute will be blocked (400-error) to prevent number spoofing.  Most standard ASCII characters are accepted in the alphanumeric `from` attribute, however there are some limitations. The following limitations and characters are allowed in the alphanumeric `from` attribute; any alphabetic character (e.g. `abc`), any number mixed with alphabetic characters (e.g. `123abc`), uppercase and lowercase characters (e.g. `aBc`), any of the following special characters mixed with alphabetic characters are allowed; `~!@#$%^&*()~_~+-={}|[];'?,./` (e.g. `abc~!@`), any combination of lowercase, uppercase, numeric or allowed special characters (e.g. `abc@#123DE`). All other characters, including spaces and extended ASCII characters, are not allowed (e.g. `<>:\"\\`).  If attribute is not present, the service will use the mobile number associated with the application (in E.164 format).  If `replyRequest` is set to true, then this field should not be present.  This feature is only available on Telstra Account paid plans, not through Free Trials or credit card paid plans.  *Please note that Alphanumeric sender ID works for domestic, i.e. Australian, destinations only.* 
 * @member {String} from
 */
SendSMSRequest.prototype['from'] = undefined;

/**
 * How long the platform should attempt to deliver the message for.  This period is specified in minutes from the message.  Normally if the message cannot be delivered immediately, it will be stored and delivery will be periodically reattempted. The network will attempt to send the message for up to seven days. It is possible to define a period smaller than 7 days by including this parameter and specifying the number of minutes that delivery should be attempted.  e.g.: including `\"validity\": 60` will specify that if a message can't be delivered within the first 60 minutes then the network should stop. 
 * @member {Number} validity
 */
SendSMSRequest.prototype['validity'] = undefined;

/**
 * How long the platform should wait before attempting to send the message - specified in minutes.  e.g.: If `\"scheduledDelivery\": 120` is included, then the network will not attempt to start message delivery for two hours after the message has been submitted 
 * @member {Number} scheduledDelivery
 */
SendSMSRequest.prototype['scheduledDelivery'] = undefined;

/**
 * Contains a URL that will be called once your message has been processed. The status may be delivered, expired, deleted, etc. Please refer to the Delivery Status section for more information.  If you are using a domain URL you must include the forward slash at the end of the URL (e.g. http://www.example.com/). 
 * @member {String} notifyURL
 */
SendSMSRequest.prototype['notifyURL'] = undefined;

/**
 * If set to true, the reply message functionality will be implemented. The `from` field should not be present.  If false or not present, then normal message handling is implemented.  When set to true, network will use a temporary number to deliver this message. All messages sent by a mobile to this temporary number will be stored against the same `messageId`. If a `notifyURL` is provided then user replies will be delivered to the URL where `messageId` will be same as `messageId` in the response to the original API request.  This field contains the message text, this can be up to 500 UTF-8 characters. As mobile devices rarely support the full range of UTF-8 characters, it is possible that some characters may not be translated correctly by the mobile device. 
 * @member {Boolean} replyRequest
 */
SendSMSRequest.prototype['replyRequest'] = undefined;

/**
 * When messages are queued up for a number, then it is possible to set where a new message will be placed in the queue. If the priority is set to true then the new message will be placed ahead of all messages with a normal priority. If there are no messages queued for the number, then this parameter has no effect. 
 * @member {Boolean} priority
 */
SendSMSRequest.prototype['priority'] = undefined;






export default SendSMSRequest;

