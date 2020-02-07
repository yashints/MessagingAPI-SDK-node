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
    instance = new TelstraMessaging.MessagingApi();
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

  describe('MessagingApi', function() {
    describe('getMMSStatus', function() {
      it('should call getMMSStatus successfully', function(done) {
        //uncomment below and update the code to test getMMSStatus
        //instance.getMMSStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSMSStatus', function() {
      it('should call getSMSStatus successfully', function(done) {
        //uncomment below and update the code to test getSMSStatus
        //instance.getSMSStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mMSHealthCheck', function() {
      it('should call mMSHealthCheck successfully', function(done) {
        //uncomment below and update the code to test mMSHealthCheck
        //instance.mMSHealthCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveMMSReplies', function() {
      it('should call retrieveMMSReplies successfully', function(done) {
        //uncomment below and update the code to test retrieveMMSReplies
        //instance.retrieveMMSReplies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveSMSReplies', function() {
      it('should call retrieveSMSReplies successfully', function(done) {
        //uncomment below and update the code to test retrieveSMSReplies
        //instance.retrieveSMSReplies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sMSHealthCheck', function() {
      it('should call sMSHealthCheck successfully', function(done) {
        //uncomment below and update the code to test sMSHealthCheck
        //instance.sMSHealthCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sMSMulti', function() {
      it('should call sMSMulti successfully', function(done) {
        //uncomment below and update the code to test sMSMulti
        //instance.sMSMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendMMS', function() {
      it('should call sendMMS successfully', function(done) {
        //uncomment below and update the code to test sendMMS
        //instance.sendMMS(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sendSMS', function() {
      it('should call sendSMS successfully', function(done) {
        //uncomment below and update the code to test sendSMS
        //instance.sendSMS(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
