/**
 * @fileoverview gRPC-Web generated client stub for cs3.preferencesv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.preferencesv0alpha = require('./preferences_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.preferencesv0alpha.PreferencesServiceClient =
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
proto.cs3.preferencesv0alpha.PreferencesServicePromiseClient =
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
 *   !proto.cs3.preferencesv0alpha.SetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.SetKeyResponse>}
 */
const methodDescriptor_PreferencesService_SetKey = new grpc.web.MethodDescriptor(
  '/cs3.preferencesv0alpha.PreferencesService/SetKey',
  grpc.web.MethodType.UNARY,
  proto.cs3.preferencesv0alpha.SetKeyRequest,
  proto.cs3.preferencesv0alpha.SetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferencesv0alpha.SetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferencesv0alpha.SetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.SetKeyResponse>}
 */
const methodInfo_PreferencesService_SetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.preferencesv0alpha.SetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferencesv0alpha.SetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferencesv0alpha.SetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferencesv0alpha.SetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.preferencesv0alpha.PreferencesServiceClient.prototype.setKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.preferencesv0alpha.PreferencesService/SetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesService_SetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferencesv0alpha.SetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.preferencesv0alpha.PreferencesServicePromiseClient.prototype.setKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.preferencesv0alpha.PreferencesService/SetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesService_SetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferencesv0alpha.GetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.GetKeyResponse>}
 */
const methodDescriptor_PreferencesService_GetKey = new grpc.web.MethodDescriptor(
  '/cs3.preferencesv0alpha.PreferencesService/GetKey',
  grpc.web.MethodType.UNARY,
  proto.cs3.preferencesv0alpha.GetKeyRequest,
  proto.cs3.preferencesv0alpha.GetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferencesv0alpha.GetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferencesv0alpha.GetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.GetKeyResponse>}
 */
const methodInfo_PreferencesService_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.preferencesv0alpha.GetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.preferencesv0alpha.GetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferencesv0alpha.GetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferencesv0alpha.GetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.preferencesv0alpha.PreferencesServiceClient.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.preferencesv0alpha.PreferencesService/GetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesService_GetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferencesv0alpha.GetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.preferencesv0alpha.PreferencesServicePromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.preferencesv0alpha.PreferencesService/GetKey',
      request,
      metadata || {},
      methodDescriptor_PreferencesService_GetKey);
};


module.exports = proto.cs3.preferencesv0alpha;

