/**
 * @fileoverview gRPC-Web generated client stub for cs3.ocmshareproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_ocmshareprovider_v0alpha_resources_pb = require('../../../cs3/ocmshareprovider/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_storageprovider_v0alpha_resources_pb = require('../../../cs3/storageprovider/v0alpha/resources_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.ocmshareproviderv0alpha = require('./ocmshareprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient =
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient =
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
 *   !proto.cs3.ocmshareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_CreateShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.CreateShareRequest,
  proto.cs3.ocmshareproviderv0alpha.CreateShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.CreateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.CreateShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateShareResponse>}
 */
const methodInfo_OCMShareProviderService_CreateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.CreateShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.CreateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.CreateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.CreateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.createShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_CreateShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.CreateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.CreateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.createShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_CreateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_RemoveShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest,
  proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse>}
 */
const methodInfo_OCMShareProviderService_RemoveShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.removeShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_RemoveShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.RemoveShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.RemoveShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.removeShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_RemoveShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_GetShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.GetShareRequest,
  proto.cs3.ocmshareproviderv0alpha.GetShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.GetShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.GetShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetShareResponse>}
 */
const methodInfo_OCMShareProviderService_GetShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.GetShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.GetShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.GetShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.GetShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.getShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_GetShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.GetShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.GetShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.getShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_GetShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListSharesResponse>}
 */
const methodDescriptor_OCMShareProviderService_ListShares = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.ListSharesRequest,
  proto.cs3.ocmshareproviderv0alpha.ListSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListSharesResponse>}
 */
const methodInfo_OCMShareProviderService_ListShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.ListSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.ListSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.ListSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.listShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListShares,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.ListSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.listShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_UpdateShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest,
  proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse>}
 */
const methodInfo_OCMShareProviderService_UpdateShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.updateShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.UpdateShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.updateShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodDescriptor_OCMShareProviderService_ListReceivedShares = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest,
  proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse>}
 */
const methodInfo_OCMShareProviderService_ListReceivedShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.listReceivedShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListReceivedShares,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.ListReceivedSharesResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.listReceivedShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListReceivedShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_UpdateReceivedShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest,
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse>}
 */
const methodInfo_OCMShareProviderService_UpdateReceivedShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.updateReceivedShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateReceivedShare,
      callback);
};


/**
 * @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedShareResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.updateReceivedShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateReceivedShare);
};


module.exports = proto.cs3.ocmshareproviderv0alpha;

