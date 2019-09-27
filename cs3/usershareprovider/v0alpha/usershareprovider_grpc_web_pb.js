/**
 * @fileoverview gRPC-Web generated client stub for cs3.usershareproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')

var cs3_usershareprovider_v0alpha_resources_pb = require('../../../cs3/usershareprovider/v0alpha/resources_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.usershareproviderv0alpha = require('./usershareprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient =
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient =
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
 *   !proto.cs3.usershareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.CreateShareResponse>}
 */
const methodDescriptor_UserShareProviderService_CreateShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/CreateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.CreateShareRequest,
  proto.cs3.usershareproviderv0alpha.CreateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.CreateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.CreateShareResponse>}
 */
const methodInfo_UserShareProviderService_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.CreateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.CreateShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_CreateShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.createShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_CreateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareResponse>}
 */
const methodDescriptor_UserShareProviderService_RemoveShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/RemoveShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.RemoveShareRequest,
  proto.cs3.usershareproviderv0alpha.RemoveShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.RemoveShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.RemoveShareResponse>}
 */
const methodInfo_UserShareProviderService_RemoveShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.RemoveShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.RemoveShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.removeShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_RemoveShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.removeShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_RemoveShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetShareResponse>}
 */
const methodDescriptor_UserShareProviderService_GetShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/GetShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.GetShareRequest,
  proto.cs3.usershareproviderv0alpha.GetShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.GetShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetShareResponse>}
 */
const methodInfo_UserShareProviderService_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.GetShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.GetShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/GetShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_GetShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.getShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/GetShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_GetShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListSharesResponse>}
 */
const methodDescriptor_UserShareProviderService_ListShares = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/ListShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.ListSharesRequest,
  proto.cs3.usershareproviderv0alpha.ListSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.ListSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListSharesResponse>}
 */
const methodInfo_UserShareProviderService_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.ListSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.ListSharesResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.listShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/ListShares',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_ListShares,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/ListShares',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_ListShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareResponse>}
 */
const methodDescriptor_UserShareProviderService_UpdateShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.UpdateShareRequest,
  proto.cs3.usershareproviderv0alpha.UpdateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.UpdateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateShareResponse>}
 */
const methodInfo_UserShareProviderService_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.UpdateShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.UpdateShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_UpdateShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.updateShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_UpdateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodDescriptor_UserShareProviderService_ListReceivedShares = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/ListReceivedShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest,
  proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodInfo_UserShareProviderService_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.ListReceivedSharesResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.listReceivedShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_ListReceivedShares,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodDescriptor_UserShareProviderService_UpdateReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateReceivedShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest,
  proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodInfo_UserShareProviderService_UpdateReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.UpdateReceivedShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.updateReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_UpdateReceivedShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.updateReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_UpdateReceivedShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>}
 */
const methodDescriptor_UserShareProviderService_GetReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.usershareproviderv0alpha.UserShareProviderService/GetReceivedShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest,
  proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest,
 *   !proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse>}
 */
const methodInfo_UserShareProviderService_GetReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse,
  /** @param {!proto.cs3.usershareproviderv0alpha.GetReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.usershareproviderv0alpha.GetReceivedShareResponse.deserializeBinary
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServiceClient.prototype.getReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_GetReceivedShare,
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
proto.cs3.usershareproviderv0alpha.UserShareProviderServicePromiseClient.prototype.getReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.usershareproviderv0alpha.UserShareProviderService/GetReceivedShare',
      request,
      metadata || {},
      methodDescriptor_UserShareProviderService_GetReceivedShare);
};


module.exports = proto.cs3.usershareproviderv0alpha;

