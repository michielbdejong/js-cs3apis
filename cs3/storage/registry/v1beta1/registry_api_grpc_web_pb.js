/**
 * @fileoverview gRPC-Web generated client stub for cs3.storage.registry.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_storage_registry_v1beta1_resources_pb = require('../../../../cs3/storage/registry/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.storage = {};
proto.cs3.storage.registry = {};
proto.cs3.storage.registry.v1beta1 = require('./registry_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient =
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
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient =
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
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse>}
 */
const methodDescriptor_RegistryAPI_GetStorageProvider = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProvider',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest,
  proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse>}
 */
const methodInfo_RegistryAPI_GetStorageProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.getStorageProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProvider',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetStorageProvider,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetStorageProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.GetStorageProviderResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.getStorageProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetStorageProvider',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetStorageProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest,
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>}
 */
const methodDescriptor_RegistryAPI_ListStorageProviders = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest,
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest,
 *   !proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>}
 */
const methodInfo_RegistryAPI_ListStorageProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.listStorageProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListStorageProviders,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.ListStorageProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.listStorageProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_ListStorageProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 */
const methodDescriptor_RegistryAPI_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.registry.v1beta1.GetHomeRequest,
  proto.cs3.storage.registry.v1beta1.GetHomeResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.registry.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 */
const methodInfo_RegistryAPI_GetHome = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.registry.v1beta1.GetHomeResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.registry.v1beta1.GetHomeResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.registry.v1beta1.GetHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.registry.v1beta1.GetHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetHome,
      callback);
};


/**
 * @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.registry.v1beta1.RegistryAPIPromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.registry.v1beta1.RegistryAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_RegistryAPI_GetHome);
};


module.exports = proto.cs3.storage.registry.v1beta1;

