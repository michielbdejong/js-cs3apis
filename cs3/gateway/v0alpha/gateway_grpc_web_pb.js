/**
 * @fileoverview gRPC-Web generated client stub for cs3.gatewayv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
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
 *   !proto.cs3.gatewayv0alpha.CreateContainerRequest,
 *   !proto.cs3.gatewayv0alpha.CreateContainerResponse>}
 */
const methodDescriptor_GatewayService_CreateContainer = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/CreateContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.CreateContainerRequest,
  proto.cs3.gatewayv0alpha.CreateContainerResponse,
  /** @param {!proto.cs3.gatewayv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.CreateContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.CreateContainerRequest,
 *   !proto.cs3.gatewayv0alpha.CreateContainerResponse>}
 */
const methodInfo_GatewayService_CreateContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.CreateContainerResponse,
  /** @param {!proto.cs3.gatewayv0alpha.CreateContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.CreateContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.CreateContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.CreateContainerResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.CreateContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.CreateContainerResponse>}
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
 *   !proto.cs3.gatewayv0alpha.DeleteRequest,
 *   !proto.cs3.gatewayv0alpha.DeleteResponse>}
 */
const methodDescriptor_GatewayService_Delete = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Delete',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.DeleteRequest,
  proto.cs3.gatewayv0alpha.DeleteResponse,
  /** @param {!proto.cs3.gatewayv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.DeleteRequest,
 *   !proto.cs3.gatewayv0alpha.DeleteResponse>}
 */
const methodInfo_GatewayService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.DeleteResponse,
  /** @param {!proto.cs3.gatewayv0alpha.DeleteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.DeleteResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.DeleteResponse>}
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
 *   !proto.cs3.gatewayv0alpha.GetPathRequest,
 *   !proto.cs3.gatewayv0alpha.GetPathResponse>}
 */
const methodDescriptor_GatewayService_GetPath = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetPath',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.GetPathRequest,
  proto.cs3.gatewayv0alpha.GetPathResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.GetPathResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.GetPathRequest,
 *   !proto.cs3.gatewayv0alpha.GetPathResponse>}
 */
const methodInfo_GatewayService_GetPath = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.GetPathResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetPathRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.GetPathResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.GetPathResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.GetPathResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.GetPathRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.GetPathResponse>}
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
 *   !proto.cs3.gatewayv0alpha.GetQuotaResponse>}
 */
const methodDescriptor_GatewayService_GetQuota = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/GetQuota',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.GetQuotaRequest,
  proto.cs3.gatewayv0alpha.GetQuotaResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.GetQuotaResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.GetQuotaRequest,
 *   !proto.cs3.gatewayv0alpha.GetQuotaResponse>}
 */
const methodInfo_GatewayService_GetQuota = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.GetQuotaResponse,
  /** @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.GetQuotaResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.GetQuotaRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.GetQuotaResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.GetQuotaResponse>|undefined}
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
 * @return {!Promise<!proto.cs3.gatewayv0alpha.GetQuotaResponse>}
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
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileDownload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileDownload',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest,
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse>}
 */
const methodInfo_GatewayService_InitiateFileDownload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse,
  /** @param {!proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileDownloadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest} request The
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
 * @param {!proto.cs3.gatewayv0alpha.InitiateFileDownloadRequest} request The
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
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>}
 */
const methodDescriptor_GatewayService_InitiateFileUpload = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/InitiateFileUpload',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.InitiateFileUploadRequest,
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.gatewayv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadRequest,
 *   !proto.cs3.gatewayv0alpha.InitiateFileUploadResponse>}
 */
const methodInfo_GatewayService_InitiateFileUpload = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse,
  /** @param {!proto.cs3.gatewayv0alpha.InitiateFileUploadRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.InitiateFileUploadResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.InitiateFileUploadRequest} request The
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
 * @param {!proto.cs3.gatewayv0alpha.InitiateFileUploadRequest} request The
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
 *   !proto.cs3.gatewayv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.gatewayv0alpha.ListContainerStreamResponse>}
 */
const methodDescriptor_GatewayService_ListContainerStream = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListContainerStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.gatewayv0alpha.ListContainerStreamRequest,
  proto.cs3.gatewayv0alpha.ListContainerStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListContainerStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListContainerStreamRequest,
 *   !proto.cs3.gatewayv0alpha.ListContainerStreamResponse>}
 */
const methodInfo_GatewayService_ListContainerStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.ListContainerStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListContainerStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListContainerStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListContainerStreamResponse>}
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
 * @param {!proto.cs3.gatewayv0alpha.ListContainerStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListContainerStreamResponse>}
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
 *   !proto.cs3.gatewayv0alpha.ListContainerRequest,
 *   !proto.cs3.gatewayv0alpha.ListContainerResponse>}
 */
const methodDescriptor_GatewayService_ListContainer = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListContainer',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.ListContainerRequest,
  proto.cs3.gatewayv0alpha.ListContainerResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListContainerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListContainerRequest,
 *   !proto.cs3.gatewayv0alpha.ListContainerResponse>}
 */
const methodInfo_GatewayService_ListContainer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.ListContainerResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListContainerRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListContainerResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.ListContainerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListContainerResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.ListContainerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.ListContainerResponse>}
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
 *   !proto.cs3.gatewayv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.gatewayv0alpha.ListFileVersionsResponse>}
 */
const methodDescriptor_GatewayService_ListFileVersions = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListFileVersions',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.ListFileVersionsRequest,
  proto.cs3.gatewayv0alpha.ListFileVersionsResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListFileVersionsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListFileVersionsRequest,
 *   !proto.cs3.gatewayv0alpha.ListFileVersionsResponse>}
 */
const methodInfo_GatewayService_ListFileVersions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.ListFileVersionsResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListFileVersionsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListFileVersionsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.ListFileVersionsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListFileVersionsResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.ListFileVersionsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.ListFileVersionsResponse>}
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
 *   !proto.cs3.gatewayv0alpha.ListRecycleStreamResponse>}
 */
const methodDescriptor_GatewayService_ListRecycleStream = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListRecycleStream',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.cs3.gatewayv0alpha.ListRecycleStreamRequest,
  proto.cs3.gatewayv0alpha.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListRecycleStreamRequest,
 *   !proto.cs3.gatewayv0alpha.ListRecycleStreamResponse>}
 */
const methodInfo_GatewayService_ListRecycleStream = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.ListRecycleStreamResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListRecycleStreamResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleStreamRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListRecycleStreamResponse>}
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
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListRecycleStreamResponse>}
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
 *   !proto.cs3.gatewayv0alpha.ListRecycleResponse>}
 */
const methodDescriptor_GatewayService_ListRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/ListRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.ListRecycleRequest,
  proto.cs3.gatewayv0alpha.ListRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.ListRecycleRequest,
 *   !proto.cs3.gatewayv0alpha.ListRecycleResponse>}
 */
const methodInfo_GatewayService_ListRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.ListRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.ListRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.ListRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.ListRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.ListRecycleResponse>|undefined}
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
 * @return {!Promise<!proto.cs3.gatewayv0alpha.ListRecycleResponse>}
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
 *   !proto.cs3.gatewayv0alpha.MoveRequest,
 *   !proto.cs3.gatewayv0alpha.MoveResponse>}
 */
const methodDescriptor_GatewayService_Move = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Move',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.MoveRequest,
  proto.cs3.gatewayv0alpha.MoveResponse,
  /** @param {!proto.cs3.gatewayv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.MoveResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.MoveRequest,
 *   !proto.cs3.gatewayv0alpha.MoveResponse>}
 */
const methodInfo_GatewayService_Move = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.MoveResponse,
  /** @param {!proto.cs3.gatewayv0alpha.MoveRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.MoveResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.MoveResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.MoveResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.MoveRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.MoveResponse>}
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
 *   !proto.cs3.gatewayv0alpha.PurgeRecycleResponse>}
 */
const methodDescriptor_GatewayService_PurgeRecycle = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/PurgeRecycle',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.PurgeRecycleRequest,
  proto.cs3.gatewayv0alpha.PurgeRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.PurgeRecycleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.PurgeRecycleRequest,
 *   !proto.cs3.gatewayv0alpha.PurgeRecycleResponse>}
 */
const methodInfo_GatewayService_PurgeRecycle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.PurgeRecycleResponse,
  /** @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.PurgeRecycleResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.PurgeRecycleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.PurgeRecycleResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.PurgeRecycleResponse>|undefined}
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
 * @return {!Promise<!proto.cs3.gatewayv0alpha.PurgeRecycleResponse>}
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
 *   !proto.cs3.gatewayv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.gatewayv0alpha.RestoreFileVersionResponse>}
 */
const methodDescriptor_GatewayService_RestoreFileVersion = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RestoreFileVersion',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.RestoreFileVersionRequest,
  proto.cs3.gatewayv0alpha.RestoreFileVersionResponse,
  /** @param {!proto.cs3.gatewayv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.RestoreFileVersionRequest,
 *   !proto.cs3.gatewayv0alpha.RestoreFileVersionResponse>}
 */
const methodInfo_GatewayService_RestoreFileVersion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.RestoreFileVersionResponse,
  /** @param {!proto.cs3.gatewayv0alpha.RestoreFileVersionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.RestoreFileVersionResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.RestoreFileVersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.RestoreFileVersionResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.RestoreFileVersionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.RestoreFileVersionResponse>}
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
 *   !proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse>}
 */
const methodDescriptor_GatewayService_RestoreRecycleItem = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/RestoreRecycleItem',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest,
  proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest,
 *   !proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse>}
 */
const methodInfo_GatewayService_RestoreRecycleItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse,
  /** @param {!proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.RestoreRecycleItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.RestoreRecycleItemResponse>}
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
 *   !proto.cs3.gatewayv0alpha.StatRequest,
 *   !proto.cs3.gatewayv0alpha.StatResponse>}
 */
const methodDescriptor_GatewayService_Stat = new grpc.web.MethodDescriptor(
  '/cs3.gatewayv0alpha.GatewayService/Stat',
  grpc.web.MethodType.UNARY,
  proto.cs3.gatewayv0alpha.StatRequest,
  proto.cs3.gatewayv0alpha.StatResponse,
  /** @param {!proto.cs3.gatewayv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.StatResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.gatewayv0alpha.StatRequest,
 *   !proto.cs3.gatewayv0alpha.StatResponse>}
 */
const methodInfo_GatewayService_Stat = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.gatewayv0alpha.StatResponse,
  /** @param {!proto.cs3.gatewayv0alpha.StatRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.gatewayv0alpha.StatResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.gatewayv0alpha.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.gatewayv0alpha.StatResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.gatewayv0alpha.StatResponse>|undefined}
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
 * @param {!proto.cs3.gatewayv0alpha.StatRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.gatewayv0alpha.StatResponse>}
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


module.exports = proto.cs3.gatewayv0alpha;

