/**
 * @fileoverview gRPC-Web generated client stub for cs3.appregistryv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_appregistry_v0alpha_resources_pb = require('../../../cs3/appregistry/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.appregistryv0alpha = require('./appregistry_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.appregistryv0alpha.AppRegistryServiceClient =
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
proto.cs3.appregistryv0alpha.AppRegistryServicePromiseClient =
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
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersResponse>}
 */
const methodDescriptor_AppRegistryService_GetAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.appregistryv0alpha.AppRegistryService/GetAppProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.appregistryv0alpha.GetAppProvidersRequest,
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersResponse>}
 */
const methodInfo_AppRegistryService_GetAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appregistryv0alpha.GetAppProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.appregistryv0alpha.GetAppProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.appregistryv0alpha.GetAppProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.appregistryv0alpha.AppRegistryServiceClient.prototype.getAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.appregistryv0alpha.AppRegistryService/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_AppRegistryService_GetAppProviders,
      callback);
};


/**
 * @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.appregistryv0alpha.GetAppProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.appregistryv0alpha.AppRegistryServicePromiseClient.prototype.getAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.appregistryv0alpha.AppRegistryService/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_AppRegistryService_GetAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersResponse>}
 */
const methodDescriptor_AppRegistryService_ListAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.appregistryv0alpha.AppRegistryService/ListAppProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.appregistryv0alpha.ListAppProvidersRequest,
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersResponse>}
 */
const methodInfo_AppRegistryService_ListAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appregistryv0alpha.ListAppProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.appregistryv0alpha.ListAppProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.appregistryv0alpha.ListAppProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.appregistryv0alpha.AppRegistryServiceClient.prototype.listAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.appregistryv0alpha.AppRegistryService/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_AppRegistryService_ListAppProviders,
      callback);
};


/**
 * @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.appregistryv0alpha.ListAppProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.appregistryv0alpha.AppRegistryServicePromiseClient.prototype.listAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.appregistryv0alpha.AppRegistryService/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_AppRegistryService_ListAppProviders);
};


module.exports = proto.cs3.appregistryv0alpha;

