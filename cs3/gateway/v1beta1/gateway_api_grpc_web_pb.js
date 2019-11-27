/**
 * @fileoverview gRPC-Web generated client stub for cs3.gateway.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_app_registry_v1beta1_registry_api_pb = require('../../../cs3/app/registry/v1beta1/registry_api_pb.js')

var cs3_auth_registry_v1beta1_registry_api_pb = require('../../../cs3/auth/registry/v1beta1/registry_api_pb.js')

var cs3_identity_user_v1beta1_resources_pb = require('../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_identity_user_v1beta1_user_api_pb = require('../../../cs3/identity/user/v1beta1/user_api_pb.js')

var cs3_preferences_v1beta1_preferences_api_pb = require('../../../cs3/preferences/v1beta1/preferences_api_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_sharing_collaboration_v1beta1_collaboration_api_pb = require('../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb.js')

var cs3_sharing_link_v1beta1_link_api_pb = require('../../../cs3/sharing/link/v1beta1/link_api_pb.js')

var cs3_sharing_ocm_v1beta1_ocm_api_pb = require('../../../cs3/sharing/ocm/v1beta1/ocm_api_pb.js')

var cs3_storage_provider_v1beta1_provider_api_pb = require('../../../cs3/storage/provider/v1beta1/provider_api_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_storage_registry_v1beta1_registry_api_pb = require('../../../cs3/storage/registry/v1beta1/registry_api_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.gateway = {};
proto.cs3.gateway.v1beta1 = require('./gateway_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient =
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient =
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
 *   !proto.cs3.gateway.v1beta1.AuthenticateRequest,
 *   !proto.cs3.gateway.v1beta1.AuthenticateResponse>}
 */
const methodDescriptor_GatewayAPI_Authenticate = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.cs3.gateway.v1beta1.AuthenticateRequest,
  proto.cs3.gateway.v1beta1.AuthenticateResponse,
  /** @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.AuthenticateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.AuthenticateRequest,
 *   !proto.cs3.gateway.v1beta1.AuthenticateResponse>}
 */
const methodInfo_GatewayAPI_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gateway.v1beta1.AuthenticateResponse,
  /** @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gateway.v1beta1.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gateway.v1beta1.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Authenticate',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Authenticate,
      callback);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gateway.v1beta1.AuthenticateResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Authenticate',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gateway.v1beta1.WhoAmIRequest,
 *   !proto.cs3.gateway.v1beta1.WhoAmIResponse>}
 */
const methodDescriptor_GatewayAPI_WhoAmI = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/WhoAmI',
  grpc.web.MethodType.UNARY,
  proto.cs3.gateway.v1beta1.WhoAmIRequest,
  proto.cs3.gateway.v1beta1.WhoAmIResponse,
  /** @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.WhoAmIResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.WhoAmIRequest,
 *   !proto.cs3.gateway.v1beta1.WhoAmIResponse>}
 */
const methodInfo_GatewayAPI_WhoAmI = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gateway.v1beta1.WhoAmIResponse,
  /** @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.WhoAmIResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gateway.v1beta1.WhoAmIResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gateway.v1beta1.WhoAmIResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.whoAmI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_WhoAmI,
      callback);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.WhoAmIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gateway.v1beta1.WhoAmIResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.whoAmI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_WhoAmI);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerResponse>}
 */
const methodDescriptor_GatewayAPI_CreateContainer = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/CreateContainer',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerResponse>}
 */
const methodInfo_GatewayAPI_CreateContainer = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.createContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateContainer,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateContainerResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.createContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.DeleteRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteResponse>}
 */
const methodDescriptor_GatewayAPI_Delete = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/Delete',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.DeleteRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteResponse>}
 */
const methodInfo_GatewayAPI_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Delete,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.DeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.GetPathRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetPathResponse>}
 */
const methodDescriptor_GatewayAPI_GetPath = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetPath',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.GetPathRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetPathResponse>}
 */
const methodInfo_GatewayAPI_GetPath = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.GetPathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.GetPathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPath',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPath,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.GetPathResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPath',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gateway.v1beta1.GetQuotaRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 */
const methodDescriptor_GatewayAPI_GetQuota = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetQuota',
  grpc.web.MethodType.UNARY,
  proto.cs3.gateway.v1beta1.GetQuotaRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse,
  /** @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.GetQuotaRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 */
const methodInfo_GatewayAPI_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse,
  /** @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetQuota',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetQuota,
      callback);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetQuota',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetQuota);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest,
 *   !proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse>}
 */
const methodDescriptor_GatewayAPI_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest,
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest,
 *   !proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse>}
 */
const methodInfo_GatewayAPI_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.initiateFileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_InitiateFileDownload,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gateway.v1beta1.InitiateFileDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.initiateFileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_InitiateFileDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest,
 *   !proto.cs3.gateway.v1beta1.InitiateFileUploadResponse>}
 */
const methodDescriptor_GatewayAPI_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest,
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest,
 *   !proto.cs3.gateway.v1beta1.InitiateFileUploadResponse>}
 */
const methodInfo_GatewayAPI_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gateway.v1beta1.InitiateFileUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.initiateFileUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_InitiateFileUpload,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gateway.v1beta1.InitiateFileUploadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.initiateFileUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_InitiateFileUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 */
const methodDescriptor_GatewayAPI_ListContainerStream = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListContainerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 */
const methodInfo_GatewayAPI_ListContainerStream = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListContainerStream);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListContainerStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerResponse>}
 */
const methodDescriptor_GatewayAPI_ListContainer = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListContainer',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerResponse>}
 */
const methodInfo_GatewayAPI_ListContainer = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListContainer,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListContainerResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>}
 */
const methodDescriptor_GatewayAPI_ListFileVersions = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListFileVersions',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>}
 */
const methodInfo_GatewayAPI_ListFileVersions = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listFileVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListFileVersions,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listFileVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListFileVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gateway.v1beta1.ListRecycleStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 */
const methodDescriptor_GatewayAPI_ListRecycleStream = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListRecycleStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.gateway.v1beta1.ListRecycleStreamRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.ListRecycleStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 */
const methodInfo_GatewayAPI_ListRecycleStream = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListRecycleStream);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListRecycleStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gateway.v1beta1.ListRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 */
const methodDescriptor_GatewayAPI_ListRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gateway.v1beta1.ListRecycleRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse,
  /** @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.ListRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 */
const methodInfo_GatewayAPI_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse,
  /** @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListRecycle,
      callback);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.MoveRequest,
 *   !proto.cs3.storage.provider.v1beta1.MoveResponse>}
 */
const methodDescriptor_GatewayAPI_Move = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/Move',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.MoveRequest,
 *   !proto.cs3.storage.provider.v1beta1.MoveResponse>}
 */
const methodInfo_GatewayAPI_Move = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.MoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Move',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Move,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.MoveResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Move',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gateway.v1beta1.PurgeRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 */
const methodDescriptor_GatewayAPI_PurgeRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/PurgeRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gateway.v1beta1.PurgeRecycleRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse,
  /** @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gateway.v1beta1.PurgeRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 */
const methodInfo_GatewayAPI_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse,
  /** @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.purgeRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_PurgeRecycle,
      callback);
};


/**
 * @param {!proto.cs3.gateway.v1beta1.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.purgeRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_PurgeRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>}
 */
const methodDescriptor_GatewayAPI_RestoreFileVersion = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/RestoreFileVersion',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>}
 */
const methodInfo_GatewayAPI_RestoreFileVersion = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.restoreFileVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RestoreFileVersion,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.restoreFileVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RestoreFileVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>}
 */
const methodDescriptor_GatewayAPI_RestoreRecycleItem = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/RestoreRecycleItem',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>}
 */
const methodInfo_GatewayAPI_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.restoreRecycleItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RestoreRecycleItem,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.restoreRecycleItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RestoreRecycleItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.StatRequest,
 *   !proto.cs3.storage.provider.v1beta1.StatResponse>}
 */
const methodDescriptor_GatewayAPI_Stat = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/Stat',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.StatRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.StatResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.StatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.StatRequest,
 *   !proto.cs3.storage.provider.v1beta1.StatResponse>}
 */
const methodInfo_GatewayAPI_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.StatResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.StatResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.stat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Stat',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Stat,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.StatResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.stat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/Stat',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_Stat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>}
 */
const methodDescriptor_GatewayAPI_SetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/SetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>}
 */
const methodInfo_GatewayAPI_SetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.setArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_SetArbitraryMetadata,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.setArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_SetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>}
 */
const methodDescriptor_GatewayAPI_UnsetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UnsetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest,
  cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>}
 */
const methodInfo_GatewayAPI_UnsetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.unsetArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UnsetArbitraryMetadata,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.unsetArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UnsetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>}
 */
const methodDescriptor_GatewayAPI_CreateShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/CreateShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>}
 */
const methodInfo_GatewayAPI_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.createShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>}
 */
const methodDescriptor_GatewayAPI_RemoveShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/RemoveShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>}
 */
const methodInfo_GatewayAPI_RemoveShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.removeShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemoveShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.removeShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemoveShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>}
 */
const methodDescriptor_GatewayAPI_GetShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>}
 */
const methodInfo_GatewayAPI_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.GetShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>}
 */
const methodDescriptor_GatewayAPI_ListShares = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListShares',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>}
 */
const methodInfo_GatewayAPI_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListShares,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>}
 */
const methodDescriptor_GatewayAPI_UpdateShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UpdateShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>}
 */
const methodInfo_GatewayAPI_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.updateShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>}
 */
const methodDescriptor_GatewayAPI_ListReceivedShares = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedShares',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>}
 */
const methodInfo_GatewayAPI_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listReceivedShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListReceivedShares,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>}
 */
const methodDescriptor_GatewayAPI_UpdateReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>}
 */
const methodInfo_GatewayAPI_UpdateReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.updateReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.updateReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>}
 */
const methodDescriptor_GatewayAPI_GetReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest,
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>}
 */
const methodInfo_GatewayAPI_GetReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferences.v1beta1.SetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.SetKeyResponse>}
 */
const methodDescriptor_GatewayAPI_SetKey = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/SetKey',
  grpc.web.MethodType.UNARY,
  cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest,
  cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferences.v1beta1.SetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.SetKeyResponse>}
 */
const methodInfo_GatewayAPI_SetKey = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse.deserializeBinary
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
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.setKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/SetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_SetKey,
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.setKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/SetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_SetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferences.v1beta1.GetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.GetKeyResponse>}
 */
const methodDescriptor_GatewayAPI_GetKey = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetKey',
  grpc.web.MethodType.UNARY,
  cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest,
  cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferences.v1beta1.GetKeyRequest,
 *   !proto.cs3.preferences.v1beta1.GetKeyResponse>}
 */
const methodInfo_GatewayAPI_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse,
  /** @param {!proto.cs3.preferences.v1beta1.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse.deserializeBinary
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
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetKey,
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>}
 */
const methodDescriptor_GatewayAPI_CreatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/CreatePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest,
  cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>}
 */
const methodInfo_GatewayAPI_CreatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.createPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.createPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>}
 */
const methodDescriptor_GatewayAPI_RemovePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/RemovePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest,
  cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>}
 */
const methodInfo_GatewayAPI_RemovePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.removePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemovePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.removePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemovePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>}
 */
const methodDescriptor_GatewayAPI_GetPublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest,
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>}
 */
const methodInfo_GatewayAPI_GetPublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.GetPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPublicShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>}
 */
const methodDescriptor_GatewayAPI_GetPublicShareByToken = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShareByToken',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest,
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>}
 */
const methodInfo_GatewayAPI_GetPublicShareByToken = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getPublicShareByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPublicShareByToken,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getPublicShareByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetPublicShareByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest,
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>}
 */
const methodDescriptor_GatewayAPI_ListPublicShares = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListPublicShares',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest,
  cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest,
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>}
 */
const methodInfo_GatewayAPI_ListPublicShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listPublicShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListPublicShares,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListPublicShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>}
 */
const methodDescriptor_GatewayAPI_UpdatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UpdatePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest,
  cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>}
 */
const methodInfo_GatewayAPI_UpdatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.updatePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.updatePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>}
 */
const methodDescriptor_GatewayAPI_CreateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>}
 */
const methodInfo_GatewayAPI_CreateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.createOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.createOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_CreateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>}
 */
const methodDescriptor_GatewayAPI_RemoveOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/RemoveOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>}
 */
const methodInfo_GatewayAPI_RemoveOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.removeOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemoveOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.removeOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_RemoveOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>}
 */
const methodDescriptor_GatewayAPI_GetOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>}
 */
const methodInfo_GatewayAPI_GetOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>}
 */
const methodDescriptor_GatewayAPI_ListOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListOCMShares',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>}
 */
const methodInfo_GatewayAPI_ListOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListOCMShares,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>}
 */
const methodDescriptor_GatewayAPI_UpdateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UpdateOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>}
 */
const methodInfo_GatewayAPI_UpdateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.updateOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.updateOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>}
 */
const methodDescriptor_GatewayAPI_ListReceivedOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedOCMShares',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>}
 */
const methodInfo_GatewayAPI_ListReceivedOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listReceivedOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListReceivedOCMShares,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listReceivedOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListReceivedOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>}
 */
const methodDescriptor_GatewayAPI_UpdateReceivedOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest,
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>}
 */
const methodInfo_GatewayAPI_UpdateReceivedOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.updateReceivedOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateReceivedOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.updateReceivedOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_UpdateReceivedOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>}
 */
const methodDescriptor_GatewayAPI_GetAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetAppProviders',
  grpc.web.MethodType.UNARY,
  cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest,
  cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.GetAppProvidersResponse>}
 */
const methodInfo_GatewayAPI_GetAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse.deserializeBinary
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
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetAppProviders,
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>}
 */
const methodDescriptor_GatewayAPI_ListAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListAppProviders',
  grpc.web.MethodType.UNARY,
  cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest,
  cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersRequest,
 *   !proto.cs3.app.registry.v1beta1.ListAppProvidersResponse>}
 */
const methodInfo_GatewayAPI_ListAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse,
  /** @param {!proto.cs3.app.registry.v1beta1.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse.deserializeBinary
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
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListAppProviders,
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserResponse>}
 */
const methodDescriptor_GatewayAPI_GetUser = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetUser',
  grpc.web.MethodType.UNARY,
  cs3_identity_user_v1beta1_user_api_pb.GetUserRequest,
  cs3_identity_user_v1beta1_user_api_pb.GetUserResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.GetUserRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserResponse>}
 */
const methodInfo_GatewayAPI_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_identity_user_v1beta1_user_api_pb.GetUserResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetUser,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 */
const methodDescriptor_GatewayAPI_GetUserGroups = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetUserGroups',
  grpc.web.MethodType.UNARY,
  cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest,
  cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 */
const methodInfo_GatewayAPI_GetUserGroups = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.GetUserGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getUserGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetUserGroups,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getUserGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetUserGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.IsInGroupRequest,
 *   !proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 */
const methodDescriptor_GatewayAPI_IsInGroup = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/IsInGroup',
  grpc.web.MethodType.UNARY,
  cs3_identity_user_v1beta1_user_api_pb.IsInGroupRequest,
  cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.IsInGroupRequest,
 *   !proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 */
const methodInfo_GatewayAPI_IsInGroup = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.IsInGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.IsInGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.IsInGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.isInGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_IsInGroup,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.isInGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_IsInGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.FindUsersRequest,
 *   !proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 */
const methodDescriptor_GatewayAPI_FindUsers = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/FindUsers',
  grpc.web.MethodType.UNARY,
  cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest,
  cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.FindUsersRequest,
 *   !proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 */
const methodInfo_GatewayAPI_FindUsers = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.FindUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.FindUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.findUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_FindUsers,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.findUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_FindUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest,
 *   !proto.cs3.gateway.v1beta1.ListAuthProvidersResponse>}
 */
const methodDescriptor_GatewayAPI_ListAuthProviders = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/ListAuthProviders',
  grpc.web.MethodType.UNARY,
  cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest,
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest,
 *   !proto.cs3.gateway.v1beta1.ListAuthProvidersResponse>}
 */
const methodInfo_GatewayAPI_ListAuthProviders = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse,
  /** @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gateway.v1beta1.ListAuthProvidersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gateway.v1beta1.ListAuthProvidersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.listAuthProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListAuthProviders,
      callback);
};


/**
 * @param {!proto.cs3.auth.registry.v1beta1.ListAuthProvidersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gateway.v1beta1.ListAuthProvidersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.listAuthProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/ListAuthProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_ListAuthProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.registry.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 */
const methodDescriptor_GatewayAPI_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.gateway.v1beta1.GatewayAPI/GetHome',
  grpc.web.MethodType.UNARY,
  cs3_storage_registry_v1beta1_registry_api_pb.GetHomeRequest,
  cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.registry.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.registry.v1beta1.GetHomeResponse>}
 */
const methodInfo_GatewayAPI_GetHome = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse,
  /** @param {!proto.cs3.storage.registry.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storage_registry_v1beta1_registry_api_pb.GetHomeResponse.deserializeBinary
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
proto.cs3.gateway.v1beta1.GatewayAPIClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetHome,
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
proto.cs3.gateway.v1beta1.GatewayAPIPromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gateway.v1beta1.GatewayAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_GatewayAPI_GetHome);
};


module.exports = proto.cs3.gateway.v1beta1;

