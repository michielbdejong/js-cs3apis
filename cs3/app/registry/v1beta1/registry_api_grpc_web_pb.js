/**
 * @fileoverview gRPC-Web generated client stub for cs3.app.registry.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_app_registry_v1beta1_resources_pb = require('../../../../cs3/app/registry/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.app = {};
proto.cs3.app.registry = {};
proto.cs3.app.registry.v1beta1 = require('./registry_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.app.registry.v1beta1.RegistryAPIClient =
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
proto.cs3.app.registry.v1beta1.RegistryAPIPromiseClient =
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
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_GetAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.app.registry.v1beta1.GetAppProvidersRequest,
  proto.cs3.app.registry.v1beta1.GetAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.registry.v1beta1.GetAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>}
 */
const methodInfo_RegistryAPI_GetAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.app.registry.v1beta1.GetAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.registry.v1beta1.GetAppProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.app.registry.v1beta1.GetAppProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.app.registry.v1beta1.RegistryAPIClient.prototype.getAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetAppProviders,
      callback);
};


/**
 * @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.app.registry.v1beta1.RegistryAPIPromiseClient.prototype.getAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_ListAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.app.registry.v1beta1.ListAppProvidersRequest,
  proto.cs3.app.registry.v1beta1.ListAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.registry.v1beta1.ListAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>}
 */
const methodInfo_RegistryAPI_ListAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.app.registry.v1beta1.ListAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.registry.v1beta1.ListAppProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.app.registry.v1beta1.ListAppProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.app.registry.v1beta1.RegistryAPIClient.prototype.listAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListAppProviders,
      callback);
};


/**
 * @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.app.registry.v1beta1.RegistryAPIPromiseClient.prototype.listAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListAppProviders);
};


module.exports = proto.cs3.app.registry.v1beta1;

