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
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_CreateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest,
  proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse>}
 */
const methodInfo_OCMShareProviderService_CreateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.CreateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.CreateOCMShareResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.createOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_CreateOCMShare,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.createOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/CreateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_CreateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_RemoveOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest,
  proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse>}
 */
const methodInfo_OCMShareProviderService_RemoveOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.RemoveOCMShareResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.removeOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_RemoveOCMShare,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.removeOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/RemoveOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_RemoveOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_GetOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest,
  proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse>}
 */
const methodInfo_OCMShareProviderService_GetOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.GetOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.GetOCMShareResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.getOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_GetOCMShare,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.getOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/GetOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_GetOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>}
 */
const methodDescriptor_OCMShareProviderService_ListOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListOCMShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest,
  proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse>}
 */
const methodInfo_OCMShareProviderService_ListOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListOCMSharesResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.listOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListOCMShares,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.listOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListOCMShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_UpdateOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest,
  proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse>}
 */
const methodInfo_OCMShareProviderService_UpdateOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateOCMShareResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.updateOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateOCMShare,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.updateOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateOCMShare);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>}
 */
const methodDescriptor_OCMShareProviderService_ListReceivedOCMShares = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedOCMShares',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest,
  proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse>}
 */
const methodInfo_OCMShareProviderService_ListReceivedOCMShares = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.ListReceivedOCMSharesResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.listReceivedOCMShares =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListReceivedOCMShares,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.listReceivedOCMShares =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/ListReceivedOCMShares',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_ListReceivedOCMShares);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>}
 */
const methodDescriptor_OCMShareProviderService_UpdateReceivedOCMShare = new grpc.web.MethodDescriptor(
  '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedOCMShare',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest,
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest,
 *   !proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse>}
 */
const methodInfo_OCMShareProviderService_UpdateReceivedOCMShare = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse,
  /** @param {!proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocmshareproviderv0alpha.UpdateReceivedOCMShareResponse.deserializeBinary
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServiceClient.prototype.updateReceivedOCMShare =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateReceivedOCMShare,
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
proto.cs3.ocmshareproviderv0alpha.OCMShareProviderServicePromiseClient.prototype.updateReceivedOCMShare =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocmshareproviderv0alpha.OCMShareProviderService/UpdateReceivedOCMShare',
      request,
      metadata || {},
      methodDescriptor_OCMShareProviderService_UpdateReceivedOCMShare);
};


module.exports = proto.cs3.ocmshareproviderv0alpha;

