/**
 * @fileoverview gRPC-Web generated client stub for cs3.authproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.authproviderv0alpha = require('./authprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.authproviderv0alpha.AuthProviderServiceClient =
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
proto.cs3.authproviderv0alpha.AuthProviderServicePromiseClient =
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
 *   !proto.cs3.authproviderv0alpha.AuthenticateRequest,
 *   !proto.cs3.authproviderv0alpha.AuthenticateResponse>}
 */
const methodDescriptor_AuthProviderService_Authenticate = new grpc.web.MethodDescriptor(
  '/cs3.authproviderv0alpha.AuthProviderService/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.cs3.authproviderv0alpha.AuthenticateRequest,
  proto.cs3.authproviderv0alpha.AuthenticateResponse,
  /** @param {!proto.cs3.authproviderv0alpha.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authproviderv0alpha.AuthenticateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.authproviderv0alpha.AuthenticateRequest,
 *   !proto.cs3.authproviderv0alpha.AuthenticateResponse>}
 */
const methodInfo_AuthProviderService_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.authproviderv0alpha.AuthenticateResponse,
  /** @param {!proto.cs3.authproviderv0alpha.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.authproviderv0alpha.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.authproviderv0alpha.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.authproviderv0alpha.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.authproviderv0alpha.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.authproviderv0alpha.AuthProviderServiceClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.authproviderv0alpha.AuthProviderService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthProviderService_Authenticate,
      callback);
};


/**
 * @param {!proto.cs3.authproviderv0alpha.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.authproviderv0alpha.AuthenticateResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.authproviderv0alpha.AuthProviderServicePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.authproviderv0alpha.AuthProviderService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_AuthProviderService_Authenticate);
};


module.exports = proto.cs3.authproviderv0alpha;

