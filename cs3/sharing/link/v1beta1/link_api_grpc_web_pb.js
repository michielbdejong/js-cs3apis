/**
 * @fileoverview gRPC-Web generated client stub for cs3.sharing.link.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_sharing_link_v1beta1_resources_pb = require('../../../../cs3/sharing/link/v1beta1/resources_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.sharing = {};
proto.cs3.sharing.link = {};
proto.cs3.sharing.link.v1beta1 = require('./link_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.sharing.link.v1beta1.LinkAPIClient =
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient =
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
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>}
 */
const methodDescriptor_LinkAPI_CreatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/CreatePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest,
  proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse>}
 */
const methodInfo_LinkAPI_CreatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.CreatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.CreatePublicShareResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.createPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_CreatePublicShare,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.createPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/CreatePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_CreatePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>}
 */
const methodDescriptor_LinkAPI_RemovePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/RemovePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest,
  proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse>}
 */
const methodInfo_LinkAPI_RemovePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.RemovePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.RemovePublicShareResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.removePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_RemovePublicShare,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.removePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/RemovePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_RemovePublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>}
 */
const methodDescriptor_LinkAPI_GetPublicShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.GetPublicShareRequest,
  proto.cs3.sharing.link.v1beta1.GetPublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.GetPublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareResponse>}
 */
const methodInfo_LinkAPI_GetPublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.GetPublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.GetPublicShareResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.getPublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_GetPublicShare,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.getPublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_GetPublicShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>}
 */
const methodDescriptor_LinkAPI_GetPublicShareByToken = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShareByToken',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest,
  proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest,
 *   !proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse>}
 */
const methodInfo_LinkAPI_GetPublicShareByToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.GetPublicShareByTokenResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.getPublicShareByToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_GetPublicShareByToken,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.getPublicShareByToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShareByToken',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_GetPublicShareByToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest,
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>}
 */
const methodDescriptor_LinkAPI_ListPublicShares = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/ListPublicShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest,
  proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest,
 *   !proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse>}
 */
const methodInfo_LinkAPI_ListPublicShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.ListPublicSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.ListPublicSharesResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.listPublicShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_ListPublicShares,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.listPublicShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/ListPublicShares',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_ListPublicShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>}
 */
const methodDescriptor_LinkAPI_UpdatePublicShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.link.v1beta1.LinkAPI/UpdatePublicShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest,
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest,
 *   !proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse>}
 */
const methodInfo_LinkAPI_UpdatePublicShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse,
  /** @param {!proto.cs3.sharing.link.v1beta1.UpdatePublicShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.link.v1beta1.UpdatePublicShareResponse.deserializeBinary
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
proto.cs3.sharing.link.v1beta1.LinkAPIClient.prototype.updatePublicShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_UpdatePublicShare,
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
proto.cs3.sharing.link.v1beta1.LinkAPIPromiseClient.prototype.updatePublicShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.link.v1beta1.LinkAPI/UpdatePublicShare',
      request,
      metadata || {},
      methodDescriptor_LinkAPI_UpdatePublicShare);
};


module.exports = proto.cs3.sharing.link.v1beta1;

