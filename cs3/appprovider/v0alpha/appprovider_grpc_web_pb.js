/**
 * @fileoverview gRPC-Web generated client stub for cs3.appproviderv0alpha
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
proto.cs3.appproviderv0alpha = require('./appprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.appproviderv0alpha.AppProviderServiceClient =
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
proto.cs3.appproviderv0alpha.AppProviderServicePromiseClient =
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
 *   !proto.cs3.appproviderv0alpha.OpenRequest,
 *   !proto.cs3.appproviderv0alpha.OpenResponse>}
 */
const methodDescriptor_AppProviderService_Open = new grpc.web.MethodDescriptor(
  '/cs3.appproviderv0alpha.AppProviderService/Open',
  grpc.web.MethodType.UNARY,
  proto.cs3.appproviderv0alpha.OpenRequest,
  proto.cs3.appproviderv0alpha.OpenResponse,
  /** @param {!proto.cs3.appproviderv0alpha.OpenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appproviderv0alpha.OpenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.appproviderv0alpha.OpenRequest,
 *   !proto.cs3.appproviderv0alpha.OpenResponse>}
 */
const methodInfo_AppProviderService_Open = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.appproviderv0alpha.OpenResponse,
  /** @param {!proto.cs3.appproviderv0alpha.OpenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.appproviderv0alpha.OpenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.appproviderv0alpha.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.appproviderv0alpha.OpenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.appproviderv0alpha.OpenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.appproviderv0alpha.AppProviderServiceClient.prototype.open =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.appproviderv0alpha.AppProviderService/Open',
      request,
      metadata || {},
      methodDescriptor_AppProviderService_Open,
      callback);
};


/**
 * @param {!proto.cs3.appproviderv0alpha.OpenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.appproviderv0alpha.OpenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.appproviderv0alpha.AppProviderServicePromiseClient.prototype.open =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.appproviderv0alpha.AppProviderService/Open',
      request,
      metadata || {},
      methodDescriptor_AppProviderService_Open);
};


module.exports = proto.cs3.appproviderv0alpha;

