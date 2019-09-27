/**
 * @fileoverview gRPC-Web generated client stub for cs3.storageproviderv0alpha
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
proto.cs3.storageproviderv0alpha = require('./storageprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient =
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient =
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
 *   !proto.cs3.storageproviderv0alpha.AddGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.AddGrantResponse>}
 */
const methodDescriptor_StorageProviderService_AddGrant = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/AddGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.AddGrantRequest,
  proto.cs3.storageproviderv0alpha.AddGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.AddGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.AddGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.AddGrantResponse>}
 */
const methodInfo_StorageProviderService_AddGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.AddGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.AddGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.AddGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.AddGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.addGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/AddGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_AddGrant,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.AddGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.AddGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.addGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/AddGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_AddGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.CreateContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateContainerResponse>}
 */
const methodDescriptor_StorageProviderService_CreateContainer = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/CreateContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.CreateContainerRequest,
  proto.cs3.storageproviderv0alpha.CreateContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.CreateContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateContainerResponse>}
 */
const methodInfo_StorageProviderService_CreateContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.CreateContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.CreateContainerResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.createContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_CreateContainer,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.createContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/CreateContainer',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_CreateContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.DeleteRequest,
 *   !proto.cs3.storageproviderv0alpha.DeleteResponse>}
 */
const methodDescriptor_StorageProviderService_Delete = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/Delete',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.DeleteRequest,
  proto.cs3.storageproviderv0alpha.DeleteResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.DeleteRequest,
 *   !proto.cs3.storageproviderv0alpha.DeleteResponse>}
 */
const methodInfo_StorageProviderService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.DeleteResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.DeleteResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Delete',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Delete,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Delete',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.GetProviderRequest,
 *   !proto.cs3.storageproviderv0alpha.GetProviderResponse>}
 */
const methodDescriptor_StorageProviderService_GetProvider = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/GetProvider',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.GetProviderRequest,
  proto.cs3.storageproviderv0alpha.GetProviderResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetProviderResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.GetProviderRequest,
 *   !proto.cs3.storageproviderv0alpha.GetProviderResponse>}
 */
const methodInfo_StorageProviderService_GetProvider = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.GetProviderResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetProviderResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.GetProviderResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.GetProviderResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.getProvider =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetProvider',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetProvider,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetProviderRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.GetProviderResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.getProvider =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetProvider',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetProvider);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.GetPathRequest,
 *   !proto.cs3.storageproviderv0alpha.GetPathResponse>}
 */
const methodDescriptor_StorageProviderService_GetPath = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/GetPath',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.GetPathRequest,
  proto.cs3.storageproviderv0alpha.GetPathResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.GetPathRequest,
 *   !proto.cs3.storageproviderv0alpha.GetPathResponse>}
 */
const methodInfo_StorageProviderService_GetPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.GetPathResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetPathResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.getPath =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetPath',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetPath,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.getPath =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetPath',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetPath);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.GetQuotaRequest,
 *   !proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 */
const methodDescriptor_StorageProviderService_GetQuota = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/GetQuota',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.GetQuotaRequest,
  proto.cs3.storageproviderv0alpha.GetQuotaResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.GetQuotaRequest,
 *   !proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 */
const methodInfo_StorageProviderService_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.GetQuotaResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.getQuota =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetQuota',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetQuota,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.GetQuotaResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.getQuota =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/GetQuota',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_GetQuota);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>}
 */
const methodDescriptor_StorageProviderService_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse>}
 */
const methodInfo_StorageProviderService_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.InitiateFileDownloadResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.initiateFileDownload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_InitiateFileDownload,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.initiateFileDownload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileDownload',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_InitiateFileDownload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>}
 */
const methodDescriptor_StorageProviderService_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse>}
 */
const methodInfo_StorageProviderService_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.InitiateFileUploadResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.initiateFileUpload =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_InitiateFileUpload,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.initiateFileUpload =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/InitiateFileUpload',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_InitiateFileUpload);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListGrantsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListGrantsResponse>}
 */
const methodDescriptor_StorageProviderService_ListGrants = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListGrants',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.ListGrantsRequest,
  proto.cs3.storageproviderv0alpha.ListGrantsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListGrantsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListGrantsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListGrantsResponse>}
 */
const methodInfo_StorageProviderService_ListGrants = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListGrantsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListGrantsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.ListGrantsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListGrantsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listGrants =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListGrants',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListGrants,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListGrantsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.ListGrantsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listGrants =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListGrants',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListGrants);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 */
const methodDescriptor_StorageProviderService_ListContainerStream = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListContainerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.storageproviderv0alpha.ListContainerStreamRequest,
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 */
const methodInfo_StorageProviderService_ListContainerStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListContainerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListContainerStream);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListContainerStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listContainerStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListContainerStream',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListContainerStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerResponse>}
 */
const methodDescriptor_StorageProviderService_ListContainer = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.ListContainerRequest,
  proto.cs3.storageproviderv0alpha.ListContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListContainerRequest,
 *   !proto.cs3.storageproviderv0alpha.ListContainerResponse>}
 */
const methodInfo_StorageProviderService_ListContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListContainerResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListContainerResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listContainer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListContainer',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListContainer,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listContainer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListContainer',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListContainer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>}
 */
const methodDescriptor_StorageProviderService_ListFileVersions = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListFileVersions',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.ListFileVersionsRequest,
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.storageproviderv0alpha.ListFileVersionsResponse>}
 */
const methodInfo_StorageProviderService_ListFileVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListFileVersionsResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listFileVersions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListFileVersions,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listFileVersions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListFileVersions',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListFileVersions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 */
const methodDescriptor_StorageProviderService_ListRecycleStream = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycleStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest,
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 */
const methodInfo_StorageProviderService_ListRecycleStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListRecycleStream);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleStreamResponse>}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listRecycleStream =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycleStream',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListRecycleStream);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.ListRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 */
const methodDescriptor_StorageProviderService_ListRecycle = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.ListRecycleRequest,
  proto.cs3.storageproviderv0alpha.ListRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.ListRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 */
const methodInfo_StorageProviderService_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.ListRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.ListRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.listRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListRecycle,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.ListRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.listRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/ListRecycle',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_ListRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.MoveRequest,
 *   !proto.cs3.storageproviderv0alpha.MoveResponse>}
 */
const methodDescriptor_StorageProviderService_Move = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/Move',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.MoveRequest,
  proto.cs3.storageproviderv0alpha.MoveResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.MoveRequest,
 *   !proto.cs3.storageproviderv0alpha.MoveResponse>}
 */
const methodInfo_StorageProviderService_Move = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.MoveResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.MoveResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.move =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Move',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Move,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.move =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Move',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Move);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.RemoveGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.RemoveGrantResponse>}
 */
const methodDescriptor_StorageProviderService_RemoveGrant = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/RemoveGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.RemoveGrantRequest,
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RemoveGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.RemoveGrantResponse>}
 */
const methodInfo_StorageProviderService_RemoveGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RemoveGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.RemoveGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.RemoveGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.removeGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RemoveGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RemoveGrant,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.RemoveGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.RemoveGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.removeGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RemoveGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RemoveGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 */
const methodDescriptor_StorageProviderService_PurgeRecycle = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/PurgeRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.PurgeRecycleRequest,
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 */
const methodInfo_StorageProviderService_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.purgeRecycle =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_PurgeRecycle,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.PurgeRecycleResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.purgeRecycle =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/PurgeRecycle',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_PurgeRecycle);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>}
 */
const methodDescriptor_StorageProviderService_RestoreFileVersion = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/RestoreFileVersion',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest,
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse>}
 */
const methodInfo_StorageProviderService_RestoreFileVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreFileVersionResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.restoreFileVersion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RestoreFileVersion,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.restoreFileVersion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreFileVersion',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RestoreFileVersion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 */
const methodDescriptor_StorageProviderService_RestoreRecycleItem = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/RestoreRecycleItem',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse>}
 */
const methodInfo_StorageProviderService_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.RestoreRecycleItemResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.restoreRecycleItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RestoreRecycleItem,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.restoreRecycleItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/RestoreRecycleItem',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_RestoreRecycleItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.StatRequest,
 *   !proto.cs3.storageproviderv0alpha.StatResponse>}
 */
const methodDescriptor_StorageProviderService_Stat = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/Stat',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.StatRequest,
  proto.cs3.storageproviderv0alpha.StatResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.StatRequest,
 *   !proto.cs3.storageproviderv0alpha.StatResponse>}
 */
const methodInfo_StorageProviderService_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.StatResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.StatResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.stat =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Stat',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Stat,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.stat =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/Stat',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_Stat);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.UpdateGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.UpdateGrantResponse>}
 */
const methodDescriptor_StorageProviderService_UpdateGrant = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/UpdateGrant',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.UpdateGrantRequest,
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.UpdateGrantRequest,
 *   !proto.cs3.storageproviderv0alpha.UpdateGrantResponse>}
 */
const methodInfo_StorageProviderService_UpdateGrant = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UpdateGrantResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.UpdateGrantResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.UpdateGrantResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.updateGrant =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UpdateGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_UpdateGrant,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.UpdateGrantRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.UpdateGrantResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.updateGrant =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UpdateGrant',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_UpdateGrant);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.CreateReferenceRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateReferenceResponse>}
 */
const methodDescriptor_StorageProviderService_CreateReference = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/CreateReference',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.CreateReferenceRequest,
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.CreateReferenceRequest,
 *   !proto.cs3.storageproviderv0alpha.CreateReferenceResponse>}
 */
const methodInfo_StorageProviderService_CreateReference = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.CreateReferenceResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.storageproviderv0alpha.CreateReferenceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.storageproviderv0alpha.CreateReferenceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.createReference =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/CreateReference',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_CreateReference,
      callback);
};


/**
 * @param {!proto.cs3.storageproviderv0alpha.CreateReferenceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.storageproviderv0alpha.CreateReferenceResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.createReference =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/CreateReference',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_CreateReference);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>}
 */
const methodDescriptor_StorageProviderService_SetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/SetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest,
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse>}
 */
const methodInfo_StorageProviderService_SetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.SetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.SetArbitraryMetadataResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.setArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_SetArbitraryMetadata,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.setArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/SetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_SetArbitraryMetadata);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>}
 */
const methodDescriptor_StorageProviderService_UnsetArbitraryMetadata = new grpc.web.MethodDescriptor(
  '/cs3.storageproviderv0alpha.StorageProviderService/UnsetArbitraryMetadata',
  grpc.web.MethodType.UNARY,
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest,
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest,
 *   !proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse>}
 */
const methodInfo_StorageProviderService_UnsetArbitraryMetadata = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse,
  /** @param {!proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.storageproviderv0alpha.UnsetArbitraryMetadataResponse.deserializeBinary
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
proto.cs3.storageproviderv0alpha.StorageProviderServiceClient.prototype.unsetArbitraryMetadata =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_UnsetArbitraryMetadata,
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
proto.cs3.storageproviderv0alpha.StorageProviderServicePromiseClient.prototype.unsetArbitraryMetadata =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.storageproviderv0alpha.StorageProviderService/UnsetArbitraryMetadata',
      request,
      metadata || {},
      methodDescriptor_StorageProviderService_UnsetArbitraryMetadata);
};


module.exports = proto.cs3.storageproviderv0alpha;

