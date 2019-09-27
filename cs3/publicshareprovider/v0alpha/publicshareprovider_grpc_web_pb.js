/**
 * @fileoverview gRPC-Web generated client stub for cs3.publicshareproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_publicshareprovider_v0alpha_resources_pb = require('../../../cs3/publicshareprovider/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.publicshareproviderv0alpha = require('./publicshareprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient =
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient =
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
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>}
 */
const methodDescriptor_PublicShareProviderService_CreatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/CreatePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest,
  proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse>}
 */
const methodInfo_PublicShareProviderService_CreatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.CreatePublicShareResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.createPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_CreatePublicShare,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.createPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_CreatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>}
 */
const methodDescriptor_PublicShareProviderService_RemovePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/RemovePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest,
  proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse>}
 */
const methodInfo_PublicShareProviderService_RemovePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.RemovePublicShareResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.removePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_RemovePublicShare,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.removePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_RemovePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>}
 */
const methodDescriptor_PublicShareProviderService_GetPublicShare = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest,
  proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse>}
 */
const methodInfo_PublicShareProviderService_GetPublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.GetPublicShareResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_GetPublicShare,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_GetPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>}
 */
const methodDescriptor_PublicShareProviderService_GetPublicShareByToken = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShareByToken',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest,
  proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest,
 *   !proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse>}
 */
const methodInfo_PublicShareProviderService_GetPublicShareByToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.GetPublicShareByTokenResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.getPublicShareByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_GetPublicShareByToken,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.getPublicShareByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_GetPublicShareByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest,
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>}
 */
const methodDescriptor_PublicShareProviderService_ListPublicShares = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/ListPublicShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest,
  proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest,
 *   !proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse>}
 */
const methodInfo_PublicShareProviderService_ListPublicShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.ListPublicSharesResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.listPublicShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_ListPublicShares,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_ListPublicShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>}
 */
const methodDescriptor_PublicShareProviderService_UpdatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.publicshareproviderv0alpha.PublicShareProviderService/UpdatePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest,
  proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest,
 *   !proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse>}
 */
const methodInfo_PublicShareProviderService_UpdatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse,
  /** @param {!proto.cs3.publicshareproviderv0alpha.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.publicshareproviderv0alpha.UpdatePublicShareResponse.deserializeBinary
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServiceClient.prototype.updatePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_UpdatePublicShare,
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
proto.cs3.publicshareproviderv0alpha.PublicShareProviderServicePromiseClient.prototype.updatePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.publicshareproviderv0alpha.PublicShareProviderService/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_PublicShareProviderService_UpdatePublicShare);
};


module.exports = proto.cs3.publicshareproviderv0alpha;

