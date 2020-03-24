/**
 * @fileoverview gRPC-Web generated client stub for cs3.sharing.ocm.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_sharing_ocm_v1beta1_resources_pb = require('../../../../cs3/sharing/ocm/v1beta1/resources_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.sharing = {};
proto.cs3.sharing.ocm = {};
proto.cs3.sharing.ocm.v1beta1 = require('./ocm_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient =
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient =
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
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_CreateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/CreateOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse>}
 */
const methodInfo_OcmAPI_CreateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.CreateOCMShareResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.createOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_CreateOCMShare,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.createOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_CreateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_RemoveOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/RemoveOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse>}
 */
const methodInfo_OcmAPI_RemoveOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.RemoveOCMShareResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.removeOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_RemoveOCMShare,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.removeOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_RemoveOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_GetOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/GetOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse>}
 */
const methodInfo_OcmAPI_GetOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.GetOCMShareResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.getOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_GetOCMShare,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.getOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_GetOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>}
 */
const methodDescriptor_OcmAPI_ListOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/ListOCMShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest,
  proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse>}
 */
const methodInfo_OcmAPI_ListOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.ListOCMSharesResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.listOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_ListOCMShares,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.listOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_ListOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_UpdateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse>}
 */
const methodInfo_OcmAPI_UpdateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.UpdateOCMShareResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.updateOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_UpdateOCMShare,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.updateOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_UpdateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>}
 */
const methodDescriptor_OcmAPI_ListReceivedOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/ListReceivedOCMShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest,
  proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse>}
 */
const methodInfo_OcmAPI_ListReceivedOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.ListReceivedOCMSharesResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.listReceivedOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_ListReceivedOCMShares,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.listReceivedOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_ListReceivedOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_UpdateReceivedOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateReceivedOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse>}
 */
const methodInfo_OcmAPI_UpdateReceivedOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.UpdateReceivedOCMShareResponse.deserializeBinary
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.updateReceivedOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_UpdateReceivedOCMShare,
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
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.updateReceivedOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_UpdateReceivedOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse>}
 */
const methodDescriptor_OcmAPI_GetReceivedOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.ocm.v1beta1.OcmAPI/GetReceivedOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest,
  proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest,
 *   !proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse>}
 */
const methodInfo_OcmAPI_GetReceivedOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse,
  /** @param {!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.sharing.ocm.v1beta1.OcmAPIClient.prototype.getReceivedOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/GetReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_GetReceivedOCMShare,
      callback);
};


/**
 * @param {!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.sharing.ocm.v1beta1.GetReceivedOCMShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.sharing.ocm.v1beta1.OcmAPIPromiseClient.prototype.getReceivedOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.ocm.v1beta1.OcmAPI/GetReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OcmAPI_GetReceivedOCMShare);
};


module.exports = proto.cs3.sharing.ocm.v1beta1;

