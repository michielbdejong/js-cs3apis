/**
 * @fileoverview gRPC-Web generated client stub for cs3.ocm.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.ocm = {};
proto.cs3.ocm.provider = {};
proto.cs3.ocm.provider.v1beta1 = require('./provider_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIClient =
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
proto.cs3.ocm.provider.v1beta1.ProviderAPIPromiseClient =
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
 *   !proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest,
 *   !proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse>}
 */
const methodDescriptor_ProviderAPI_IsProviderAllowed = new grpc.web.MethodDescriptor(
  '/cs3.ocm.provider.v1beta1.ProviderAPI/IsProviderAllowed',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest,
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest,
 *   !proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse>}
 */
const methodInfo_ProviderAPI_IsProviderAllowed = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIClient.prototype.isProviderAllowed =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/IsProviderAllowed',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_IsProviderAllowed,
      callback);
};


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.provider.v1beta1.IsProviderAllowedResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIPromiseClient.prototype.isProviderAllowed =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/IsProviderAllowed',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_IsProviderAllowed);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest,
 *   !proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse>}
 */
const methodDescriptor_ProviderAPI_GetInfoByDomain = new grpc.web.MethodDescriptor(
  '/cs3.ocm.provider.v1beta1.ProviderAPI/GetInfoByDomain',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest,
  proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest,
 *   !proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse>}
 */
const methodInfo_ProviderAPI_GetInfoByDomain = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIClient.prototype.getInfoByDomain =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/GetInfoByDomain',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetInfoByDomain,
      callback);
};


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.provider.v1beta1.GetInfoByDomainResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIPromiseClient.prototype.getInfoByDomain =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/GetInfoByDomain',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetInfoByDomain);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest,
 *   !proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse>}
 */
const methodDescriptor_ProviderAPI_ListAllProviders = new grpc.web.MethodDescriptor(
  '/cs3.ocm.provider.v1beta1.ProviderAPI/ListAllProviders',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest,
  proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest,
 *   !proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse>}
 */
const methodInfo_ProviderAPI_ListAllProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse,
  /** @param {!proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIClient.prototype.listAllProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/ListAllProviders',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListAllProviders,
      callback);
};


/**
 * @param {!proto.cs3.ocm.provider.v1beta1.ListAllProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.provider.v1beta1.ListAllProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.provider.v1beta1.ProviderAPIPromiseClient.prototype.listAllProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.provider.v1beta1.ProviderAPI/ListAllProviders',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListAllProviders);
};


module.exports = proto.cs3.ocm.provider.v1beta1;

