/**
 * @fileoverview gRPC-Web generated client stub for cs3.auth.applications.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_auth_applications_v1beta1_resources_pb = require('../../../../cs3/auth/applications/v1beta1/resources_pb.js')

var cs3_auth_provider_v1beta1_resources_pb = require('../../../../cs3/auth/provider/v1beta1/resources_pb.js')

var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.auth = {};
proto.cs3.auth.applications = {};
proto.cs3.auth.applications.v1beta1 = require('./applications_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIClient =
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
proto.cs3.auth.applications.v1beta1.ApplicationsAPIPromiseClient =
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
 *   !proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse>}
 */
const methodDescriptor_ApplicationsAPI_GenerateAppPassword = new grpc.web.MethodDescriptor(
  '/cs3.auth.applications.v1beta1.ApplicationsAPI/GenerateAppPassword',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest,
  proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse>}
 */
const methodInfo_ApplicationsAPI_GenerateAppPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIClient.prototype.generateAppPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/GenerateAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_GenerateAppPassword,
      callback);
};


/**
 * @param {!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.applications.v1beta1.GenerateAppPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIPromiseClient.prototype.generateAppPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/GenerateAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_GenerateAppPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest,
 *   !proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse>}
 */
const methodDescriptor_ApplicationsAPI_ListAppPasswords = new grpc.web.MethodDescriptor(
  '/cs3.auth.applications.v1beta1.ApplicationsAPI/ListAppPasswords',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest,
  proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest,
 *   !proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse>}
 */
const methodInfo_ApplicationsAPI_ListAppPasswords = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIClient.prototype.listAppPasswords =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/ListAppPasswords',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_ListAppPasswords,
      callback);
};


/**
 * @param {!proto.cs3.auth.applications.v1beta1.ListAppPasswordsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.applications.v1beta1.ListAppPasswordsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIPromiseClient.prototype.listAppPasswords =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/ListAppPasswords',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_ListAppPasswords);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse>}
 */
const methodDescriptor_ApplicationsAPI_InvalidateAppPassword = new grpc.web.MethodDescriptor(
  '/cs3.auth.applications.v1beta1.ApplicationsAPI/InvalidateAppPassword',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest,
  proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse>}
 */
const methodInfo_ApplicationsAPI_InvalidateAppPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIClient.prototype.invalidateAppPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/InvalidateAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_InvalidateAppPassword,
      callback);
};


/**
 * @param {!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIPromiseClient.prototype.invalidateAppPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/InvalidateAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_InvalidateAppPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse>}
 */
const methodDescriptor_ApplicationsAPI_GetAppPassword = new grpc.web.MethodDescriptor(
  '/cs3.auth.applications.v1beta1.ApplicationsAPI/GetAppPassword',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest,
  proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest,
 *   !proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse>}
 */
const methodInfo_ApplicationsAPI_GetAppPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse,
  /** @param {!proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIClient.prototype.getAppPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/GetAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_GetAppPassword,
      callback);
};


/**
 * @param {!proto.cs3.auth.applications.v1beta1.GetAppPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.applications.v1beta1.GetAppPasswordResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.applications.v1beta1.ApplicationsAPIPromiseClient.prototype.getAppPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.applications.v1beta1.ApplicationsAPI/GetAppPassword',
      request,
      metadata || {},
      methodDescriptor_ApplicationsAPI_GetAppPassword);
};


module.exports = proto.cs3.auth.applications.v1beta1;

