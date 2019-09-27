/**
 * @fileoverview gRPC-Web generated client stub for cs3.storageregistryv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_storagetypes_storagetypes_pb = require('../../../cs3/storagetypes/storagetypes_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.storageregistryv0alpha = require('./storageregistry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServiceClient =
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
proto.cs3.storageregistryv0alpha.StorageRegistryServicePromiseClient =
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
 *   !proto.cs3.storageregistryv0alpha.GetStorageProviderRequest,
 *   !proto.cs3.storageregistryv0alpha.GetStorageProviderResponse>}
 */
const methodDescriptor_StorageRegistryService_GetStorageProvider = new grpc.web.MethodDescriptor(
  '/cs3.storageregistryv0alpha.StorageRegistryService/GetStorageProvider',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageregistryv0alpha.GetStorageProviderRequest,
  proto.cs3.storageregistryv0alpha.GetStorageProviderResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetStorageProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.GetStorageProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageregistryv0alpha.GetStorageProviderRequest,
 *   !proto.cs3.storageregistryv0alpha.GetStorageProviderResponse>}
 */
const methodInfo_StorageRegistryService_GetStorageProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageregistryv0alpha.GetStorageProviderResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetStorageProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.GetStorageProviderResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageregistryv0alpha.GetStorageProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageregistryv0alpha.GetStorageProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageregistryv0alpha.GetStorageProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServiceClient.prototype.getStorageProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/GetStorageProvider',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_GetStorageProvider,
      callback);
};


/**
 * @param {!proto.cs3.storageregistryv0alpha.GetStorageProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageregistryv0alpha.GetStorageProviderResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServicePromiseClient.prototype.getStorageProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/GetStorageProvider',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_GetStorageProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest,
 *   !proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse>}
 */
const methodDescriptor_StorageRegistryService_ListStorageProviders = new grpc.web.MethodDescriptor(
  '/cs3.storageregistryv0alpha.StorageRegistryService/ListStorageProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest,
  proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest,
 *   !proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse>}
 */
const methodInfo_StorageRegistryService_ListStorageProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServiceClient.prototype.listStorageProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_ListStorageProviders,
      callback);
};


/**
 * @param {!proto.cs3.storageregistryv0alpha.ListStorageProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageregistryv0alpha.ListStorageProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServicePromiseClient.prototype.listStorageProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/ListStorageProviders',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_ListStorageProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageregistryv0alpha.GetHomeRequest,
 *   !proto.cs3.storageregistryv0alpha.GetHomeResponse>}
 */
const methodDescriptor_StorageRegistryService_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.storageregistryv0alpha.StorageRegistryService/GetHome',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageregistryv0alpha.GetHomeRequest,
  proto.cs3.storageregistryv0alpha.GetHomeResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.GetHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageregistryv0alpha.GetHomeRequest,
 *   !proto.cs3.storageregistryv0alpha.GetHomeResponse>}
 */
const methodInfo_StorageRegistryService_GetHome = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageregistryv0alpha.GetHomeResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageregistryv0alpha.GetHomeResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageregistryv0alpha.GetHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageregistryv0alpha.GetHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServiceClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/GetHome',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_GetHome,
      callback);
};


/**
 * @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageregistryv0alpha.GetHomeResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageregistryv0alpha.StorageRegistryServicePromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageregistryv0alpha.StorageRegistryService/GetHome',
      request,
      metadata || {},
      methodDescriptor_StorageRegistryService_GetHome);
};


module.exports = proto.cs3.storageregistryv0alpha;

