/**
 * @fileoverview gRPC-Web generated client stub for cs3.auth.registry.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_auth_registry_v1beta1_resources_pb = require('../../../../cs3/auth/registry/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.auth = {};
proto.cs3.auth.registry = {};
proto.cs3.auth.registry.v1beta1 = require('./registry_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.auth.registry.v1beta1.RegistryAPIClient =
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
proto.cs3.auth.registry.v1beta1.RegistryAPIPromiseClient =
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
 *   !proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest,
 *   !proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse>}
 */
const methodDescriptor_RegistryAPI_GetAuthProvider = new grpc.web.MethodDescriptor(
  '/cs3.auth.registry.v1beta1.RegistryAPI/GetAuthProvider',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest,
  proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest,
 *   !proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse>}
 */
const methodInfo_RegistryAPI_GetAuthProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.registry.v1beta1.RegistryAPIClient.prototype.getAuthProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.registry.v1beta1.RegistryAPI/GetAuthProvider',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetAuthProvider,
      callback);
};


/**
 * @param {!proto.cs3.auth.registry.v1beta1.GetAuthProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.registry.v1beta1.GetAuthProviderResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.registry.v1beta1.RegistryAPIPromiseClient.prototype.getAuthProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.registry.v1beta1.RegistryAPI/GetAuthProvider',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetAuthProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest,
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_ListAuthProviders = new grpc.web.MethodDescriptor(
  '/cs3.auth.registry.v1beta1.RegistryAPI/ListAuthProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest,
  proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest,
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse>}
 */
const methodInfo_RegistryAPI_ListAuthProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.registry.v1beta1.RegistryAPIClient.prototype.listAuthProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.registry.v1beta1.RegistryAPI/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListAuthProviders,
      callback);
};


/**
 * @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.registry.v1beta1.ListAuthProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.registry.v1beta1.RegistryAPIPromiseClient.prototype.listAuthProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.registry.v1beta1.RegistryAPI/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListAuthProviders);
};


module.exports = proto.cs3.auth.registry.v1beta1;

