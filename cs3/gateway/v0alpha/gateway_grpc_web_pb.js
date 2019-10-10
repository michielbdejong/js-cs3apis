/**
 * @fileoverview gRPC-Web generated client stub for cs3.gatewayv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_appregistry_v0alpha_appregistry_pb = require('../../../cs3/appregistry/v0alpha/appregistry_pb.js')

var cs3_auth_v0alpha_auth_pb = require('../../../cs3/auth/v0alpha/auth_pb.js')

var cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb = require('../../../cs3/ocmshareprovider/v0alpha/ocmshareprovider_pb.js')

var cs3_preferences_v0alpha_preferences_pb = require('../../../cs3/preferences/v0alpha/preferences_pb.js')

var cs3_publicshareprovider_v0alpha_publicshareprovider_pb = require('../../../cs3/publicshareprovider/v0alpha/publicshareprovider_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_storageprovider_v0alpha_storageprovider_pb = require('../../../cs3/storageprovider/v0alpha/storageprovider_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')

var cs3_userprovider_v0alpha_userprovider_pb = require('../../../cs3/userprovider/v0alpha/userprovider_pb.js')

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
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileDownloadRequest,
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>}
 */
const methodInfo_GatewayService_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>|undefined}
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
 * @return {!Promise<!proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>}
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
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.InitiateFileUploadRequest,
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>}
 */
const methodInfo_GatewayService_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.InitiateFileUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>|undefined}
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
 * @return {!Promise<!proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>}
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
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>}
 */
const methodDescriptor_GatewayService_SetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/SetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.SetArbitraryMetadataRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>}
 */
const methodInfo_GatewayService_SetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.setArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayService_SetArbitraryMetadata,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.setArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayService_SetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>}
 */
const methodDescriptor_GatewayService_UnsetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UnsetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  cs3_storageprovider_v0alpha_storageprovider_pb.UnsetArbitraryMetadataRequest,
  cs3_storageprovider_v0alpha_storageprovider_pb.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>}
 */
const methodInfo_GatewayService_UnsetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_storageprovider_v0alpha_storageprovider_pb.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_storageprovider_v0alpha_storageprovider_pb.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.unsetArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UnsetArbitraryMetadata,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.unsetArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UnsetArbitraryMetadata);
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
 *   !proto.cs3.preferencesv0alpha.SetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.SetKeyResponse>}
 */
const methodDescriptor_GatewayService_SetKey = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/SetKey',
  grpc.web.MethodType.UNARY,
  cs3_preferences_v0alpha_preferences_pb.SetKeyRequest,
  cs3_preferences_v0alpha_preferences_pb.SetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v0alpha_preferences_pb.SetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferencesv0alpha.SetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.SetKeyResponse>}
 */
const methodInfo_GatewayService_SetKey = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_preferences_v0alpha_preferences_pb.SetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v0alpha_preferences_pb.SetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferencesv0alpha.SetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferencesv0alpha.SetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.setKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/SetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayService_SetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferencesv0alpha.SetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferencesv0alpha.SetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.setKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/SetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayService_SetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.preferencesv0alpha.GetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.GetKeyResponse>}
 */
const methodDescriptor_GatewayService_GetKey = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetKey',
  grpc.web.MethodType.UNARY,
  cs3_preferences_v0alpha_preferences_pb.GetKeyRequest,
  cs3_preferences_v0alpha_preferences_pb.GetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v0alpha_preferences_pb.GetKeyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.preferencesv0alpha.GetKeyRequest,
 *   !proto.cs3.preferencesv0alpha.GetKeyResponse>}
 */
const methodInfo_GatewayService_GetKey = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_preferences_v0alpha_preferences_pb.GetKeyResponse,
  /** @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_preferences_v0alpha_preferences_pb.GetKeyResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.preferencesv0alpha.GetKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.preferencesv0alpha.GetKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetKey,
      callback);
};


/**
 * @param {!proto.cs3.preferencesv0alpha.GetKeyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.preferencesv0alpha.GetKeyResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getKey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetKey',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetKey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>}
 */
const methodDescriptor_GatewayService_CreatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/CreatePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.CreatePublicShareRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.CreatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.CreatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>}
 */
const methodInfo_GatewayService_CreatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.CreatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.CreatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.createPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.createPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>}
 */
const methodDescriptor_GatewayService_RemovePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RemovePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.RemovePublicShareRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.RemovePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.RemovePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>}
 */
const methodInfo_GatewayService_RemovePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.RemovePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.RemovePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.removePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemovePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.removePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemovePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>}
 */
const methodDescriptor_GatewayService_GetPublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetPublicShare',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>}
 */
const methodInfo_GatewayService_GetPublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>}
 */
const methodDescriptor_GatewayService_GetPublicShareByToken = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetPublicShareByToken',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareByTokenRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>}
 */
const methodInfo_GatewayService_GetPublicShareByToken = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getPublicShareByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPublicShareByToken,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getPublicShareByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetPublicShareByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest,
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>}
 */
const methodDescriptor_GatewayService_ListPublicShares = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListPublicShares',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.ListPublicSharesRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.ListPublicSharesResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.ListPublicSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest,
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>}
 */
const methodInfo_GatewayService_ListPublicShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.ListPublicSharesResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.ListPublicSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listPublicShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListPublicShares,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListPublicShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>}
 */
const methodDescriptor_GatewayService_UpdatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UpdatePublicShare',
  grpc.web.MethodType.UNARY,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.UpdatePublicShareRequest,
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.UpdatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>}
 */
const methodInfo_GatewayService_UpdatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.UpdatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_publicshareprovider_v0alpha_publicshareprovider_pb.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.updatePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdatePublicShare,
      callback);
};


/**
 * @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.updatePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>}
 */
const methodDescriptor_GatewayService_CreateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/CreateOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.CreateOCMShareRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.CreateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.CreateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>}
 */
const methodInfo_GatewayService_CreateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.CreateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.CreateOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.createOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.createOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_CreateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>}
 */
const methodDescriptor_GatewayService_RemoveOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RemoveOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.RemoveOCMShareRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.RemoveOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>}
 */
const methodInfo_GatewayService_RemoveOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.RemoveOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.removeOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemoveOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.removeOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_RemoveOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>}
 */
const methodDescriptor_GatewayService_GetOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.GetOCMShareRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.GetOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.GetOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>}
 */
const methodInfo_GatewayService_GetOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.GetOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.GetOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>}
 */
const methodDescriptor_GatewayService_ListOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListOCMShares',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListOCMSharesRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>}
 */
const methodInfo_GatewayService_ListOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListOCMSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListOCMShares,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>}
 */
const methodDescriptor_GatewayService_UpdateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UpdateOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateOCMShareRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>}
 */
const methodInfo_GatewayService_UpdateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.updateOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.updateOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>}
 */
const methodDescriptor_GatewayService_ListReceivedOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListReceivedOCMShares',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListReceivedOCMSharesRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>}
 */
const methodInfo_GatewayService_ListReceivedOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listReceivedOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListReceivedOCMShares,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listReceivedOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListReceivedOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>}
 */
const methodDescriptor_GatewayService_UpdateReceivedOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedOCMShare',
  grpc.web.MethodType.UNARY,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateReceivedOCMShareRequest,
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>}
 */
const methodInfo_GatewayService_UpdateReceivedOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_ocmshareprovider_v0alpha_ocmshareprovider_pb.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.updateReceivedOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateReceivedOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.updateReceivedOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_GatewayService_UpdateReceivedOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersResponse>}
 */
const methodDescriptor_GatewayService_GetAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetAppProviders',
  grpc.web.MethodType.UNARY,
  cs3_appregistry_v0alpha_appregistry_pb.GetAppProvidersRequest,
  cs3_appregistry_v0alpha_appregistry_pb.GetAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_appregistry_v0alpha_appregistry_pb.GetAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.GetAppProvidersResponse>}
 */
const methodInfo_GatewayService_GetAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_appregistry_v0alpha_appregistry_pb.GetAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.GetAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_appregistry_v0alpha_appregistry_pb.GetAppProvidersResponse.deserializeBinary
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
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetAppProviders,
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
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersResponse>}
 */
const methodDescriptor_GatewayService_ListAppProviders = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListAppProviders',
  grpc.web.MethodType.UNARY,
  cs3_appregistry_v0alpha_appregistry_pb.ListAppProvidersRequest,
  cs3_appregistry_v0alpha_appregistry_pb.ListAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_appregistry_v0alpha_appregistry_pb.ListAppProvidersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersRequest,
 *   !proto.cs3.appregistryv0alpha.ListAppProvidersResponse>}
 */
const methodInfo_GatewayService_ListAppProviders = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_appregistry_v0alpha_appregistry_pb.ListAppProvidersResponse,
  /** @param {!proto.cs3.appregistryv0alpha.ListAppProvidersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_appregistry_v0alpha_appregistry_pb.ListAppProvidersResponse.deserializeBinary
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
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.listAppProviders =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListAppProviders,
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
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.listAppProviders =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/ListAppProviders',
      request,
      metadata || {},
      methodDescriptor_GatewayService_ListAppProviders);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.GetUserRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserResponse>}
 */
const methodDescriptor_GatewayService_GetUser = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetUser',
  grpc.web.MethodType.UNARY,
  cs3_userprovider_v0alpha_userprovider_pb.GetUserRequest,
  cs3_userprovider_v0alpha_userprovider_pb.GetUserResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.GetUserRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserResponse>}
 */
const methodInfo_GatewayService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_userprovider_v0alpha_userprovider_pb.GetUserResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetUser',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetUser,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetUser',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 */
const methodDescriptor_GatewayService_GetUserGroups = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetUserGroups',
  grpc.web.MethodType.UNARY,
  cs3_userprovider_v0alpha_userprovider_pb.GetUserGroupsRequest,
  cs3_userprovider_v0alpha_userprovider_pb.GetUserGroupsResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.GetUserGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 */
const methodInfo_GatewayService_GetUserGroups = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_userprovider_v0alpha_userprovider_pb.GetUserGroupsResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.GetUserGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.GetUserGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.GetUserGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.getUserGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetUserGroups,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.getUserGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_GatewayService_GetUserGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.IsInGroupRequest,
 *   !proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 */
const methodDescriptor_GatewayService_IsInGroup = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/IsInGroup',
  grpc.web.MethodType.UNARY,
  cs3_userprovider_v0alpha_userprovider_pb.IsInGroupRequest,
  cs3_userprovider_v0alpha_userprovider_pb.IsInGroupResponse,
  /** @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.IsInGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.IsInGroupRequest,
 *   !proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 */
const methodInfo_GatewayService_IsInGroup = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_userprovider_v0alpha_userprovider_pb.IsInGroupResponse,
  /** @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.IsInGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.IsInGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.IsInGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.isInGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_GatewayService_IsInGroup,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.isInGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_GatewayService_IsInGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.FindUsersRequest,
 *   !proto.cs3.userproviderv0alpha.FindUsersResponse>}
 */
const methodDescriptor_GatewayService_FindUsers = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/FindUsers',
  grpc.web.MethodType.UNARY,
  cs3_userprovider_v0alpha_userprovider_pb.FindUsersRequest,
  cs3_userprovider_v0alpha_userprovider_pb.FindUsersResponse,
  /** @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.FindUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.FindUsersRequest,
 *   !proto.cs3.userproviderv0alpha.FindUsersResponse>}
 */
const methodInfo_GatewayService_FindUsers = new grpc.web.AbstractClientBase.MethodInfo(
  cs3_userprovider_v0alpha_userprovider_pb.FindUsersResponse,
  /** @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  cs3_userprovider_v0alpha_userprovider_pb.FindUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.FindUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.FindUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.gatewayv0alpha.GatewayServiceClient.prototype.findUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/FindUsers',
      request,
      metadata || {},
      methodDescriptor_GatewayService_FindUsers,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.FindUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.gatewayv0alpha.GatewayServicePromiseClient.prototype.findUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.gatewayv0alpha.GatewayService/FindUsers',
      request,
      metadata || {},
      methodDescriptor_GatewayService_FindUsers);
};


module.exports = proto.cs3.gatewayv0alpha;

