/**
 * @fileoverview gRPC-Web generated client stub for cs3.preferences.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.preferences = {};
proto.cs3.preferences.v1beta1 = require('./preferences_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.preferences.v1beta1.PreferencesAPIClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.preferences.v1beta1.PreferencesAPIPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferences.v1beta1.SetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.SetKeyResponse>}
 */
const methodDescriptor_PreferencesAPI_SetKey = new grpc.web.MethodDescriptor(
  '/cs3.preferences.v1beta1.PreferencesAPI/SetKey',
  grpc.web.MethodType.UNARY,
  proto.cs3.preferences.v1beta1.SetKeyRequest,
  proto.cs3.preferences.v1beta1.SetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferences.v1beta1.SetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferences.v1beta1.SetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.SetKeyResponse>}
 */
const methodInfo_PreferencesAPI_SetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.preferences.v1beta1.SetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferences.v1beta1.SetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferences.v1beta1.SetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferences.v1beta1.SetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.preferences.v1beta1.PreferencesAPIClient.prototype.setKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.preferences.v1beta1.PreferencesAPI/SetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesAPI_SetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferences.v1beta1.SetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.preferences.v1beta1.PreferencesAPIPromiseClient.prototype.setKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.preferences.v1beta1.PreferencesAPI/SetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesAPI_SetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferences.v1beta1.GetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.GetKeyResponse>}
 */
const methodDescriptor_PreferencesAPI_GetKey = new grpc.web.MethodDescriptor(
  '/cs3.preferences.v1beta1.PreferencesAPI/GetKey',
  grpc.web.MethodType.UNARY,
  proto.cs3.preferences.v1beta1.GetKeyRequest,
  proto.cs3.preferences.v1beta1.GetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferences.v1beta1.GetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferences.v1beta1.GetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.GetKeyResponse>}
 */
const methodInfo_PreferencesAPI_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.preferences.v1beta1.GetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferences.v1beta1.GetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferences.v1beta1.GetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferences.v1beta1.GetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.preferences.v1beta1.PreferencesAPIClient.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.preferences.v1beta1.PreferencesAPI/GetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesAPI_GetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferences.v1beta1.GetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.preferences.v1beta1.PreferencesAPIPromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.preferences.v1beta1.PreferencesAPI/GetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesAPI_GetKey);
};


module.exports = proto.cs3.preferences.v1beta1;

