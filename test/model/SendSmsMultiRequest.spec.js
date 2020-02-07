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
    instance = new TelstraMessaging.SendSmsMultiRequest();
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

  describe('SendSmsMultiRequest', function() {
    it('should create an instance of SendSmsMultiRequest', function() {
      // uncomment below and update the code to test SendSmsMultiRequest
      //var instane = new TelstraMessaging.SendSmsMultiRequest();
      //expect(instance).to.be.a(TelstraMessaging.SendSmsMultiRequest);
    });

    it('should have the property smsMulti (base name: "smsMulti")', function() {
      // uncomment below and update the code to test the property smsMulti
      //var instane = new TelstraMessaging.SendSmsMultiRequest();
      //expect(instance).to.be();
    });

    it('should have the property notifyURL (base name: "notifyURL")', function() {
      // uncomment below and update the code to test the property notifyURL
      //var instane = new TelstraMessaging.SendSmsMultiRequest();
      //expect(instance).to.be();
    });

  });

}));
