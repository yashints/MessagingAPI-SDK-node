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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TelstraMessaging);
  }
}(this, function(expect, TelstraMessaging) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TelstraMessaging.Message();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Message', function() {
    it('should create an instance of Message', function() {
      // uncomment below and update the code to test Message
      //var instane = new TelstraMessaging.Message();
      //expect(instance).to.be.a(TelstraMessaging.Message);
    });

    it('should have the property to (base name: "to")', function() {
      // uncomment below and update the code to test the property to
      //var instane = new TelstraMessaging.Message();
      //expect(instance).to.be();
    });

    it('should have the property deliveryStatus (base name: "deliveryStatus")', function() {
      // uncomment below and update the code to test the property deliveryStatus
      //var instane = new TelstraMessaging.Message();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "messageId")', function() {
      // uncomment below and update the code to test the property messageId
      //var instane = new TelstraMessaging.Message();
      //expect(instance).to.be();
    });

    it('should have the property messageStatusURL (base name: "messageStatusURL")', function() {
      // uncomment below and update the code to test the property messageStatusURL
      //var instane = new TelstraMessaging.Message();
      //expect(instance).to.be();
    });

  });

}));
