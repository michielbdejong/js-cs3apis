/**
 * @fileoverview gRPC-Web generated client stub for cs3.sharing.collaboration.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_sharing_collaboration_v1beta1_resources_pb = require('../../../../cs3/sharing/collaboration/v1beta1/resources_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.sharing = {};
proto.cs3.sharing.collaboration = {};
proto.cs3.sharing.collaboration.v1beta1 = require('./collaboration_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient =
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient =
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
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>}
 */
const methodDescriptor_CollaborationAPI_CreateShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/CreateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse>}
 */
const methodInfo_CollaborationAPI_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.CreateShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/CreateShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_CreateShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.createShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/CreateShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_CreateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>}
 */
const methodDescriptor_CollaborationAPI_RemoveShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/RemoveShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse>}
 */
const methodInfo_CollaborationAPI_RemoveShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.RemoveShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.removeShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_RemoveShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.removeShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_RemoveShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>}
 */
const methodDescriptor_CollaborationAPI_GetShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.GetShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.GetShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.GetShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetShareResponse>}
 */
const methodInfo_CollaborationAPI_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.GetShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.GetShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_GetShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.getShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_GetShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>}
 */
const methodDescriptor_CollaborationAPI_ListShares = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest,
  proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse>}
 */
const methodInfo_CollaborationAPI_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.ListSharesResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.listShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListShares',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_ListShares,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListShares',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_ListShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>}
 */
const methodDescriptor_CollaborationAPI_UpdateShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse>}
 */
const methodInfo_CollaborationAPI_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.UpdateShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_UpdateShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.updateShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_UpdateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>}
 */
const methodDescriptor_CollaborationAPI_ListReceivedShares = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListReceivedShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest,
  proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse>}
 */
const methodInfo_CollaborationAPI_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.ListReceivedSharesResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.listReceivedShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_ListReceivedShares,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>}
 */
const methodDescriptor_CollaborationAPI_UpdateReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateReceivedShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse>}
 */
const methodInfo_CollaborationAPI_UpdateReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.UpdateReceivedShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.updateReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_UpdateReceivedShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.updateReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_UpdateReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>}
 */
const methodDescriptor_CollaborationAPI_GetReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetReceivedShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest,
  proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest,
 *   !proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse>}
 */
const methodInfo_CollaborationAPI_GetReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse,
  /** @param {!proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.sharing.collaboration.v1beta1.GetReceivedShareResponse.deserializeBinary
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIClient.prototype.getReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_GetReceivedShare,
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
proto.cs3.sharing.collaboration.v1beta1.CollaborationAPIPromiseClient.prototype.getReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_CollaborationAPI_GetReceivedShare);
};


module.exports = proto.cs3.sharing.collaboration.v1beta1;

