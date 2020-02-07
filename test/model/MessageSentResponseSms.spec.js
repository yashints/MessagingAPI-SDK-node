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
    instance = new TelstraMessaging.MessageSentResponseSms();
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

  describe('MessageSentResponseSms', function() {
    it('should create an instance of MessageSentResponseSms', function() {
      // uncomment below and update the code to test MessageSentResponseSms
      //var instane = new TelstraMessaging.MessageSentResponseSms();
      //expect(instance).to.be.a(TelstraMessaging.MessageSentResponseSms);
    });

    it('should have the property messages (base name: "messages")', function() {
      // uncomment below and update the code to test the property messages
      //var instane = new TelstraMessaging.MessageSentResponseSms();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "Country")', function() {
      // uncomment below and update the code to test the property country
      //var instane = new TelstraMessaging.MessageSentResponseSms();
      //expect(instance).to.be();
    });

    it('should have the property messageType (base name: "messageType")', function() {
      // uncomment below and update the code to test the property messageType
      //var instane = new TelstraMessaging.MessageSentResponseSms();
      //expect(instance).to.be();
    });

    it('should have the property numberSegments (base name: "numberSegments")', function() {
      // uncomment below and update the code to test the property numberSegments
      //var instane = new TelstraMessaging.MessageSentResponseSms();
      //expect(instance).to.be();
    });

  });

}));
