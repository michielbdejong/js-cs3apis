/**
 * @fileoverview gRPC-Web generated client stub for cs3.storage.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.storage = {};
proto.cs3.storage.provider = {};
proto.cs3.storage.provider.v1beta1 = require('./provider_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient =
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient =
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
 *   !proto.cs3.storage.provider.v1beta1.AddGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.AddGrantResponse>}
 */
const methodDescriptor_ProviderAPI_AddGrant = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/AddGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.AddGrantRequest,
  proto.cs3.storage.provider.v1beta1.AddGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.AddGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.AddGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.AddGrantResponse>}
 */
const methodInfo_ProviderAPI_AddGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.AddGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.AddGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.AddGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.AddGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.addGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/AddGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_AddGrant,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.AddGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.AddGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.addGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/AddGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_AddGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerResponse>}
 */
const methodDescriptor_ProviderAPI_CreateContainer = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/CreateContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateContainerRequest,
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateContainerResponse>}
 */
const methodInfo_ProviderAPI_CreateContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateContainerResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.createContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateContainer,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.createContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.DeleteRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteResponse>}
 */
const methodDescriptor_ProviderAPI_Delete = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/Delete',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.DeleteRequest,
  proto.cs3.storage.provider.v1beta1.DeleteResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.DeleteRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteResponse>}
 */
const methodInfo_ProviderAPI_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.DeleteResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Delete',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Delete,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Delete',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.DenyGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.DenyGrantResponse>}
 */
const methodDescriptor_ProviderAPI_DenyGrant = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/DenyGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.DenyGrantRequest,
  proto.cs3.storage.provider.v1beta1.DenyGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DenyGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DenyGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.DenyGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.DenyGrantResponse>}
 */
const methodInfo_ProviderAPI_DenyGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.DenyGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DenyGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DenyGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DenyGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.DenyGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.DenyGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.denyGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/DenyGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_DenyGrant,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DenyGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.DenyGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.denyGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/DenyGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_DenyGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.GetPathRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetPathResponse>}
 */
const methodDescriptor_ProviderAPI_GetPath = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/GetPath',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.GetPathRequest,
  proto.cs3.storage.provider.v1beta1.GetPathResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.GetPathRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetPathResponse>}
 */
const methodInfo_ProviderAPI_GetPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.GetPathResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetPathResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.getPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetPath',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetPath,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.getPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetPath',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 */
const methodDescriptor_ProviderAPI_GetQuota = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/GetQuota',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.GetQuotaRequest,
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 */
const methodInfo_ProviderAPI_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetQuota',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetQuota,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.GetQuotaResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.getQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetQuota',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetQuota);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest,
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse>}
 */
const methodDescriptor_ProviderAPI_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest,
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest,
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse>}
 */
const methodInfo_ProviderAPI_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.initiateFileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_InitiateFileDownload,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.InitiateFileDownloadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.initiateFileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_InitiateFileDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest,
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse>}
 */
const methodDescriptor_ProviderAPI_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest,
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest,
 *   !proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse>}
 */
const methodInfo_ProviderAPI_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.initiateFileUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_InitiateFileUpload,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.InitiateFileUploadRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.InitiateFileUploadResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.initiateFileUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_InitiateFileUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListGrantsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListGrantsResponse>}
 */
const methodDescriptor_ProviderAPI_ListGrants = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListGrants',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListGrantsRequest,
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListGrantsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListGrantsResponse>}
 */
const methodInfo_ProviderAPI_ListGrants = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListGrantsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListGrantsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListGrantsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listGrants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListGrants',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListGrants,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListGrantsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listGrants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListGrants',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListGrants);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 */
const methodDescriptor_ProviderAPI_ListContainerStream = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest,
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 */
const methodInfo_ProviderAPI_ListContainerStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListContainerStream);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListContainerStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerResponse>}
 */
const methodDescriptor_ProviderAPI_ListContainer = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListContainerRequest,
  proto.cs3.storage.provider.v1beta1.ListContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListContainerRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListContainerResponse>}
 */
const methodInfo_ProviderAPI_ListContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListContainerResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListContainerResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainer',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListContainer,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainer',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>}
 */
const methodDescriptor_ProviderAPI_ListFileVersions = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListFileVersions',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest,
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse>}
 */
const methodInfo_ProviderAPI_ListFileVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListFileVersionsResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listFileVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListFileVersions,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listFileVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListFileVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 */
const methodDescriptor_ProviderAPI_ListRecycleStream = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycleStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest,
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 */
const methodInfo_ProviderAPI_ListRecycleStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListRecycleStream);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListRecycleStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 */
const methodDescriptor_ProviderAPI_ListRecycle = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListRecycleRequest,
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 */
const methodInfo_ProviderAPI_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListRecycle,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.MoveRequest,
 *   !proto.cs3.storage.provider.v1beta1.MoveResponse>}
 */
const methodDescriptor_ProviderAPI_Move = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/Move',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.MoveRequest,
  proto.cs3.storage.provider.v1beta1.MoveResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.MoveRequest,
 *   !proto.cs3.storage.provider.v1beta1.MoveResponse>}
 */
const methodInfo_ProviderAPI_Move = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.MoveResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.MoveResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Move',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Move,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Move',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.RemoveGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.RemoveGrantResponse>}
 */
const methodDescriptor_ProviderAPI_RemoveGrant = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/RemoveGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.RemoveGrantRequest,
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.RemoveGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.RemoveGrantResponse>}
 */
const methodInfo_ProviderAPI_RemoveGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RemoveGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.RemoveGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.removeGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RemoveGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RemoveGrant,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.RemoveGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.RemoveGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.removeGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RemoveGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RemoveGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 */
const methodDescriptor_ProviderAPI_PurgeRecycle = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/PurgeRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest,
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest,
 *   !proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 */
const methodInfo_ProviderAPI_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.purgeRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_PurgeRecycle,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.PurgeRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.purgeRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_PurgeRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>}
 */
const methodDescriptor_ProviderAPI_RestoreFileVersion = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreFileVersion',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest,
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse>}
 */
const methodInfo_ProviderAPI_RestoreFileVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RestoreFileVersionResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.restoreFileVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RestoreFileVersion,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.restoreFileVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RestoreFileVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>}
 */
const methodDescriptor_ProviderAPI_RestoreRecycleItem = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreRecycleItem',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest,
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest,
 *   !proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse>}
 */
const methodInfo_ProviderAPI_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.RestoreRecycleItemResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.restoreRecycleItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RestoreRecycleItem,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.restoreRecycleItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_RestoreRecycleItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.StatRequest,
 *   !proto.cs3.storage.provider.v1beta1.StatResponse>}
 */
const methodDescriptor_ProviderAPI_Stat = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/Stat',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.StatRequest,
  proto.cs3.storage.provider.v1beta1.StatResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.StatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.StatRequest,
 *   !proto.cs3.storage.provider.v1beta1.StatResponse>}
 */
const methodInfo_ProviderAPI_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.StatResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.StatResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.stat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Stat',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Stat,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.stat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/Stat',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Stat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.UpdateGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateGrantResponse>}
 */
const methodDescriptor_ProviderAPI_UpdateGrant = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.UpdateGrantRequest,
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.UpdateGrantRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateGrantResponse>}
 */
const methodInfo_ProviderAPI_UpdateGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.UpdateGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.updateGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UpdateGrant,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.UpdateGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.updateGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateGrant',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UpdateGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse>}
 */
const methodDescriptor_ProviderAPI_CreateSymlink = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/CreateSymlink',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest,
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse>}
 */
const methodInfo_ProviderAPI_CreateSymlink = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.createSymlink =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateSymlink',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateSymlink,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateSymlinkRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateSymlinkResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.createSymlink =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateSymlink',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateSymlink);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateReferenceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateReferenceResponse>}
 */
const methodDescriptor_ProviderAPI_CreateReference = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/CreateReference',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateReferenceRequest,
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateReferenceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateReferenceResponse>}
 */
const methodInfo_ProviderAPI_CreateReference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateReferenceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateReferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.createReference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateReference',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateReference,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateReferenceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.createReference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateReference',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateReference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>}
 */
const methodDescriptor_ProviderAPI_SetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/SetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest,
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse>}
 */
const methodInfo_ProviderAPI_SetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.SetArbitraryMetadataResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.setArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_SetArbitraryMetadata,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.setArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_SetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>}
 */
const methodDescriptor_ProviderAPI_UnsetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/UnsetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest,
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse>}
 */
const methodInfo_ProviderAPI_UnsetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UnsetArbitraryMetadataResponse.deserializeBinary
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
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.unsetArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UnsetArbitraryMetadata,
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
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.unsetArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UnsetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateHomeRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateHomeResponse>}
 */
const methodDescriptor_ProviderAPI_CreateHome = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/CreateHome',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateHomeRequest,
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateHomeRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateHomeResponse>}
 */
const methodInfo_ProviderAPI_CreateHome = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateHomeResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.createHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateHome',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateHome,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateHomeResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.createHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateHome',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateHome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetHomeResponse>}
 */
const methodDescriptor_ProviderAPI_GetHome = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/GetHome',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.GetHomeRequest,
  proto.cs3.storage.provider.v1beta1.GetHomeResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetHomeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.GetHomeRequest,
 *   !proto.cs3.storage.provider.v1beta1.GetHomeResponse>}
 */
const methodInfo_ProviderAPI_GetHome = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.GetHomeResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.GetHomeResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.GetHomeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.GetHomeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.getHome =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetHome,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.GetHomeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.GetHomeResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.getHome =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/GetHome',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_GetHome);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 */
const methodDescriptor_ProviderAPI_CreateStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/CreateStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 */
const methodInfo_ProviderAPI_CreateStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.createStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.CreateStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.createStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/CreateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_CreateStorageSpace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 */
const methodDescriptor_ProviderAPI_ListStorageSpaces = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/ListStorageSpaces',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest,
 *   !proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 */
const methodInfo_ProviderAPI_ListStorageSpaces = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.listStorageSpaces =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListStorageSpaces',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListStorageSpaces,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.ListStorageSpacesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.ListStorageSpacesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.listStorageSpaces =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/ListStorageSpaces',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_ListStorageSpaces);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 */
const methodDescriptor_ProviderAPI_UpdateStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 */
const methodInfo_ProviderAPI_UpdateStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.updateStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UpdateStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.UpdateStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.updateStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_UpdateStorageSpace);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 */
const methodDescriptor_ProviderAPI_DeleteStorageSpace = new grpc.web.MethodDescriptor(
  '/cs3.storage.provider.v1beta1.ProviderAPI/DeleteStorageSpace',
  grpc.web.MethodType.UNARY,
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest,
 *   !proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 */
const methodInfo_ProviderAPI_DeleteStorageSpace = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse,
  /** @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIClient.prototype.deleteStorageSpace =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/DeleteStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_DeleteStorageSpace,
      callback);
};


/**
 * @param {!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storage.provider.v1beta1.DeleteStorageSpaceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storage.provider.v1beta1.ProviderAPIPromiseClient.prototype.deleteStorageSpace =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storage.provider.v1beta1.ProviderAPI/DeleteStorageSpace',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_DeleteStorageSpace);
};


module.exports = proto.cs3.storage.provider.v1beta1;

