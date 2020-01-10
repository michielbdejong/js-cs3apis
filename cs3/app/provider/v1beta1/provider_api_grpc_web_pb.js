/**
 * @fileoverview gRPC-Web generated client stub for cs3.app.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.app = {};
proto.cs3.app.provider = {};
proto.cs3.app.provider.v1beta1 = require('./provider_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.app.provider.v1beta1.ProviderAPIClient =
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
proto.cs3.app.provider.v1beta1.ProviderAPIPromiseClient =
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
 *   !proto.cs3.app.provider.v1beta1.OpenRequest,
 *   !proto.cs3.app.provider.v1beta1.OpenResponse>}
 */
const methodDescriptor_ProviderAPI_Open = new grpc.web.MethodDescriptor(
  '/cs3.app.provider.v1beta1.ProviderAPI/Open',
  grpc.web.MethodType.UNARY,
  proto.cs3.app.provider.v1beta1.OpenRequest,
  proto.cs3.app.provider.v1beta1.OpenResponse,
  /** @param {!proto.cs3.app.provider.v1beta1.OpenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.provider.v1beta1.OpenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.app.provider.v1beta1.OpenRequest,
 *   !proto.cs3.app.provider.v1beta1.OpenResponse>}
 */
const methodInfo_ProviderAPI_Open = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.app.provider.v1beta1.OpenResponse,
  /** @param {!proto.cs3.app.provider.v1beta1.OpenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.app.provider.v1beta1.OpenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.app.provider.v1beta1.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.app.provider.v1beta1.OpenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.app.provider.v1beta1.OpenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.app.provider.v1beta1.ProviderAPIClient.prototype.open =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.app.provider.v1beta1.ProviderAPI/Open',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Open,
      callback);
};


/**
 * @param {!proto.cs3.app.provider.v1beta1.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.app.provider.v1beta1.OpenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.app.provider.v1beta1.ProviderAPIPromiseClient.prototype.open =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.app.provider.v1beta1.ProviderAPI/Open',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Open);
};


module.exports = proto.cs3.app.provider.v1beta1;

