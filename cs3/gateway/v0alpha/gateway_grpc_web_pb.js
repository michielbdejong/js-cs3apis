/**
 * @fileoverview gRPC-Web generated client stub for cs3.gatewayv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_auth_v0alpha_auth_pb = require('../../../cs3/auth/v0alpha/auth_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_storageprovider_v0alpha_storageprovider_pb = require('../../../cs3/storageprovider/v0alpha/storageprovider_pb.js')

var cs3_storageregistry_v0alpha_storageregistry_pb = require('../../../cs3/storageregistry/v0alpha/storageregistry_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')

var cs3_usershareprovider_v0alpha_usershareprovider_pb = require('../../../cs3/usershareprovider/v0alpha/usershareprovider_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.gatewayv0alpha = require('./gateway_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient =
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
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient =
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
 *   !proto.cs3.authv0alpha.GenerateAccessTokenRequest,
 *   !proto.cs3.authv0alpha.GenerateAccessTokenResponse>}
 */
const methodDescriptor_GatewayService_GenerateAccessToken = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GenerateAccessToken',
  grpc.web.MethodType.UNARY,
  cs3_auth_v0alpha_auth_pb.GenerateAccessTokenRequest,
  cs3_auth_v0alpha_auth_pb.GenerateAccessTokenResponse,
  /** @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_auth_v0alpha_auth_pb.GenerateAccessTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authv0alpha.GenerateAccessTokenRequest,
 *   !proto.cs3.authv0alpha.GenerateAccessTokenResponse>}
 */
const methodInfo_GatewayService_GenerateAccessToken = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_auth_v0alpha_auth_pb.GenerateAccessTokenResponse,
  /** @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_auth_v0alpha_auth_pb.GenerateAccessTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authv0alpha.GenerateAccessTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authv0alpha.GenerateAccessTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.generateAccessToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GenerateAccessToken,
      callback);
};


/**
 * @param {!proto.cs3.authv0alpha.GenerateAccessTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authv0alpha.GenerateAccessTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.generateAccessToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GenerateAccessToken',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GenerateAccessToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.authv0alpha.WhoAmIRequest,
 *   !proto.cs3.authv0alpha.WhoAmIResponse>}
 */
const methodDescriptor_GatewayService_WhoAmI = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/WhoAmI',
  grpc.web.MethodType.UNARY,
  cs3_auth_v0alpha_auth_pb.WhoAmIRequest,
  cs3_auth_v0alpha_auth_pb.WhoAmIResponse,
  /** @param {!proto.cs3.authv0alpha.WhoAmIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_auth_v0alpha_auth_pb.WhoAmIResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authv0alpha.WhoAmIRequest,
 *   !proto.cs3.authv0alpha.WhoAmIResponse>}
 */
const methodInfo_GatewayService_WhoAmI = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_auth_v0alpha_auth_pb.WhoAmIResponse,
  /** @param {!proto.cs3.authv0alpha.WhoAmIRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_auth_v0alpha_auth_pb.WhoAmIResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authv0alpha.WhoAmIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authv0alpha.WhoAmIResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authv0alpha.WhoAmIResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.whoAmI =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_GatewayService_WhoAmI,
      callback);
};


/**
 * @param {!proto.cs3.authv0alpha.WhoAmIRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authv0alpha.WhoAmIResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.whoAmI =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/WhoAmI',
      request,
      metadata || {},
      methodDescriptor_GatewayService_WhoAmI);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.CreateContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateContainerResponse>}
 */
const methodDescriptor_GatewayService_CreateContainer = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/CreateContainer',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.CreateContainerRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.CreateContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.CreateContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateContainerResponse>}
 */
const methodInfo_GatewayService_CreateContainer = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.CreateContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.CreateContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.CreateContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.CreateContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.createContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateContainer,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.CreateContainerResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.createContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.DeleteRequest,
 *   !proto.cs3.storageproviderv0alpha.DeleteResponse>}
 */
const methodDescriptor_GatewayService_Delete = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Delete',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.DeleteRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.DeleteResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.DeleteRequest,
 *   !proto.cs3.storageproviderv0alpha.DeleteResponse>}
 */
const methodInfo_GatewayService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.DeleteResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Delete,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.DeleteResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Delete',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.GetPathRequest,
 *   !proto.cs3.storageproviderv0alpha.GetPathResponse>}
 */
const methodDescriptor_GatewayService_GetPath = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetPath',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.GetPathRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.GetPathResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.GetPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.GetPathRequest,
 *   !proto.cs3.storageproviderv0alpha.GetPathResponse>}
 */
const methodInfo_GatewayService_GetPath = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.GetPathResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.GetPathResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.GetPathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.GetPathResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPath',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPath,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.GetPathResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPath',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gatewayv0alpha.GetQuotaRequest,
 *   !proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 */
const methodDescriptor_GatewayService_GetQuota = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetQuota',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.GetQuotaRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.GetQuotaResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.GetQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.GetQuotaRequest,
 *   !proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 */
const methodInfo_GatewayService_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.GetQuotaResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetQuota',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetQuota,
      callback);
};


/**
 * @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetQuota',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetQuota);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>}
 */
const methodInfo_GatewayService_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.initiateFileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_GatewayService_InitiateFileDownload,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.initiateFileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_GatewayService_InitiateFileDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>}
 */
const methodInfo_GatewayService_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.initiateFileUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_GatewayService_InitiateFileUpload,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.initiateFileUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_GatewayService_InitiateFileUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 */
const methodDescriptor_GatewayService_ListContainerStream = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListContainerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerStreamRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 */
const methodInfo_GatewayService_ListContainerStream = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListContainerStream);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListContainerStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerResponse>}
 */
const methodDescriptor_GatewayService_ListContainer = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListContainer',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerResponse>}
 */
const methodInfo_GatewayService_ListContainer = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.ListContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListContainerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListContainer,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.ListContainerResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListContainer',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>}
 */
const methodDescriptor_GatewayService_ListFileVersions = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListFileVersions',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListFileVersionsRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListFileVersionsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListFileVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>}
 */
const methodInfo_GatewayService_ListFileVersions = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.ListFileVersionsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListFileVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.ListFileVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listFileVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListFileVersions,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listFileVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListFileVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gatewayv0alpha.ListRecycleStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 */
const methodDescriptor_GatewayService_ListRecycleStream = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListRecycleStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.gatewayv0alpha.ListRecycleStreamRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListRecycleStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 */
const methodInfo_GatewayService_ListRecycleStream = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListRecycleStream);
};


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListRecycleStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gatewayv0alpha.ListRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 */
const methodDescriptor_GatewayService_ListRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.ListRecycleRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 */
const methodInfo_GatewayService_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.ListRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListRecycle,
      callback);
};


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.MoveRequest,
 *   !proto.cs3.storageproviderv0alpha.MoveResponse>}
 */
const methodDescriptor_GatewayService_Move = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Move',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.MoveRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.MoveResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.MoveRequest,
 *   !proto.cs3.storageproviderv0alpha.MoveResponse>}
 */
const methodInfo_GatewayService_Move = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.MoveResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.MoveResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Move',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Move,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.MoveResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Move',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.gatewayv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 */
const methodDescriptor_GatewayService_PurgeRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/PurgeRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.PurgeRecycleRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.PurgeRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.PurgeRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 */
const methodInfo_GatewayService_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.PurgeRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.purgeRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayService_PurgeRecycle,
      callback);
};


/**
 * @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.purgeRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_GatewayService_PurgeRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>}
 */
const methodDescriptor_GatewayService_RestoreFileVersion = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RestoreFileVersion',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreFileVersionRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>}
 */
const methodInfo_GatewayService_RestoreFileVersion = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.restoreFileVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RestoreFileVersion,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.restoreFileVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RestoreFileVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 */
const methodDescriptor_GatewayService_RestoreRecycleItem = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RestoreRecycleItem',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreRecycleItemRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 */
const methodInfo_GatewayService_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.restoreRecycleItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RestoreRecycleItem,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.restoreRecycleItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RestoreRecycleItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.StatRequest,
 *   !proto.cs3.storageproviderv0alpha.StatResponse>}
 */
const methodDescriptor_GatewayService_Stat = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Stat',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.StatRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.StatResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.StatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.StatRequest,
 *   !proto.cs3.storageproviderv0alpha.StatResponse>}
 */
const methodInfo_GatewayService_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.StatResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.StatResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.StatResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.stat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Stat',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Stat,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.StatResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.stat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/Stat',
      request,
      metadata || {},
      methodDescriptor_GatewayService_Stat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.CreateShareResponse>}
 */
const methodDescriptor_GatewayService_CreateShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/CreateShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.CreateShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.CreateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.CreateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.CreateShareResponse>}
 */
const methodInfo_GatewayService_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.CreateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.CreateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.CreateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.CreateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.CreateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.createShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareResponse>}
 */
const methodDescriptor_GatewayService_RemoveShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RemoveShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.RemoveShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.RemoveShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.RemoveShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareResponse>}
 */
const methodInfo_GatewayService_RemoveShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.RemoveShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.RemoveShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.RemoveShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.RemoveShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.removeShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemoveShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.RemoveShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.removeShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemoveShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetShareResponse>}
 */
const methodDescriptor_GatewayService_GetShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetShareResponse>}
 */
const methodInfo_GatewayService_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.GetShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.GetShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.GetShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListSharesResponse>}
 */
const methodDescriptor_GatewayService_ListShares = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListShares',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListSharesRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListSharesResponse>}
 */
const methodInfo_GatewayService_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.ListSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.ListSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListShares,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.ListSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareResponse>}
 */
const methodDescriptor_GatewayService_UpdateShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UpdateShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareResponse>}
 */
const methodInfo_GatewayService_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.UpdateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.UpdateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.UpdateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.updateShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodDescriptor_GatewayService_ListReceivedShares = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListReceivedShares',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListReceivedSharesRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListReceivedSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodInfo_GatewayService_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListReceivedSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listReceivedShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListReceivedShares,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodDescriptor_GatewayService_UpdateReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateReceivedShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodInfo_GatewayService_UpdateReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.updateReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.updateReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>}
 */
const methodDescriptor_GatewayService_GetReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetReceivedShare',
  grpc.web.MethodType.UNARY,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetReceivedShareRequest,
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>}
 */
const methodInfo_GatewayService_GetReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_usershareprovider_v0alpha_usershareprovider_pb.GetReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageregistryv0alpha.GetHomeRequest,
 *   !proto.cs3.storageregistryv0alpha.GetHomeResponse>}
 */
const methodDescriptor_GatewayService_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetHome',
  grpc.web.MethodType.UNARY,
  cs3_storageregistry_v0alpha_storageregistry_pb.GetHomeRequest,
  cs3_storageregistry_v0alpha_storageregistry_pb.GetHomeResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageregistry_v0alpha_storageregistry_pb.GetHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageregistryv0alpha.GetHomeRequest,
 *   !proto.cs3.storageregistryv0alpha.GetHomeResponse>}
 */
const methodInfo_GatewayService_GetHome = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageregistry_v0alpha_storageregistry_pb.GetHomeResponse,
  /** @param {!proto.cs3.storageregistryv0alpha.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageregistry_v0alpha_storageregistry_pb.GetHomeResponse.deserializeBinary
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
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetHome',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetHome,
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
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetHome',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetHome);
};


module.exports = proto.cs3.gatewayv0alpha;

