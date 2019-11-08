/**
 * @fileoverview gRPC-Web generated client stub for cs3.authregistryv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_authregistry_v0alpha_resources_pb = require('../../../cs3/authregistry/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.authregistryv0alpha = require('./authregistry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.authregistryv0alpha.AuthRegistryServiceClient =
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
proto.cs3.authregistryv0alpha.AuthRegistryServicePromiseClient =
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
 *   !proto.cs3.authregistryv0alpha.GetAuthProviderRequest,
 *   !proto.cs3.authregistryv0alpha.GetAuthProviderResponse>}
 */
const methodDescriptor_AuthRegistryService_GetAuthProvider = new grpc.web.MethodDescriptor(
  '/cs3.authregistryv0alpha.AuthRegistryService/GetAuthProvider',
  grpc.web.MethodType.UNARY,
  proto.cs3.authregistryv0alpha.GetAuthProviderRequest,
  proto.cs3.authregistryv0alpha.GetAuthProviderResponse,
  /** @param {!proto.cs3.authregistryv0alpha.GetAuthProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authregistryv0alpha.GetAuthProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authregistryv0alpha.GetAuthProviderRequest,
 *   !proto.cs3.authregistryv0alpha.GetAuthProviderResponse>}
 */
const methodInfo_AuthRegistryService_GetAuthProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.authregistryv0alpha.GetAuthProviderResponse,
  /** @param {!proto.cs3.authregistryv0alpha.GetAuthProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authregistryv0alpha.GetAuthProviderResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authregistryv0alpha.GetAuthProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authregistryv0alpha.GetAuthProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authregistryv0alpha.GetAuthProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.authregistryv0alpha.AuthRegistryServiceClient.prototype.getAuthProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.authregistryv0alpha.AuthRegistryService/GetAuthProvider',
      request,
      metadata || {},
      methodDescriptor_AuthRegistryService_GetAuthProvider,
      callback);
};


/**
 * @param {!proto.cs3.authregistryv0alpha.GetAuthProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authregistryv0alpha.GetAuthProviderResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.authregistryv0alpha.AuthRegistryServicePromiseClient.prototype.getAuthProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.authregistryv0alpha.AuthRegistryService/GetAuthProvider',
      request,
      metadata || {},
      methodDescriptor_AuthRegistryService_GetAuthProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.authregistryv0alpha.ListAuthProvidersRequest,
 *   !proto.cs3.authregistryv0alpha.ListAuthProvidersResponse>}
 */
const methodDescriptor_AuthRegistryService_ListAuthProviders = new grpc.web.MethodDescriptor(
  '/cs3.authregistryv0alpha.AuthRegistryService/ListAuthProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.authregistryv0alpha.ListAuthProvidersRequest,
  proto.cs3.authregistryv0alpha.ListAuthProvidersResponse,
  /** @param {!proto.cs3.authregistryv0alpha.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authregistryv0alpha.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authregistryv0alpha.ListAuthProvidersRequest,
 *   !proto.cs3.authregistryv0alpha.ListAuthProvidersResponse>}
 */
const methodInfo_AuthRegistryService_ListAuthProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.authregistryv0alpha.ListAuthProvidersResponse,
  /** @param {!proto.cs3.authregistryv0alpha.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authregistryv0alpha.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authregistryv0alpha.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authregistryv0alpha.ListAuthProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authregistryv0alpha.ListAuthProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.authregistryv0alpha.AuthRegistryServiceClient.prototype.listAuthProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.authregistryv0alpha.AuthRegistryService/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_AuthRegistryService_ListAuthProviders,
      callback);
};


/**
 * @param {!proto.cs3.authregistryv0alpha.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authregistryv0alpha.ListAuthProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.authregistryv0alpha.AuthRegistryServicePromiseClient.prototype.listAuthProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.authregistryv0alpha.AuthRegistryService/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_AuthRegistryService_ListAuthProviders);
};


module.exports = proto.cs3.authregistryv0alpha;

