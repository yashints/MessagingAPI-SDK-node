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
 * The MMSContent model module.
 * @module model/MMSContent
 * @version 1.0.8
 */
class MMSContent {
    /**
     * Constructs a new <code>MMSContent</code>.
     * @alias module:model/MMSContent
     * @param type {String} The following types are supported audio/amr audio/aac audio/mp3 audio/mpeg3 audio/mpeg audio/mpg audio/wav audio/3gpp audio/mp4 image/gif image/jpeg image/jpg image/png image/bmp video/mpeg4 video/mp4 video/mpeg video/3gpp video/3gp video/h263 text/plain text/x-vCard text/x-vCalendar 
     * @param filename {String} The file name to be associated with the content. Some devices will display this file name with a placeholder for the content. 
     * @param payload {String} Base64 encoded message content. 
     */
    constructor(type, filename, payload) { 
        
        MMSContent.initialize(this, type, filename, payload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, filename, payload) { 
        obj['type'] = type;
        obj['filename'] = filename;
        obj['payload'] = payload;
    }

    /**
     * Constructs a <code>MMSContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MMSContent} obj Optional instance to populate.
     * @return {module:model/MMSContent} The populated <code>MMSContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MMSContent();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('filename')) {
                obj['filename'] = ApiClient.convertToType(data['filename'], 'String');
            }
            if (data.hasOwnProperty('payload')) {
                obj['payload'] = ApiClient.convertToType(data['payload'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The following types are supported audio/amr audio/aac audio/mp3 audio/mpeg3 audio/mpeg audio/mpg audio/wav audio/3gpp audio/mp4 image/gif image/jpeg image/jpg image/png image/bmp video/mpeg4 video/mp4 video/mpeg video/3gpp video/3gp video/h263 text/plain text/x-vCard text/x-vCalendar 
 * @member {String} type
 */
MMSContent.prototype['type'] = undefined;

/**
 * The file name to be associated with the content. Some devices will display this file name with a placeholder for the content. 
 * @member {String} filename
 */
MMSContent.prototype['filename'] = undefined;

/**
 * Base64 encoded message content. 
 * @member {String} payload
 */
MMSContent.prototype['payload'] = undefined;






export default MMSContent;

