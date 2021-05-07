/**
 * @fileoverview gRPC-Web generated client stub for cs3.auth.provider.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_auth_provider_v1beta1_resources_pb = require('../../../../cs3/auth/provider/v1beta1/resources_pb.js')

var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.auth = {};
proto.cs3.auth.provider = {};
proto.cs3.auth.provider.v1beta1 = require('./provider_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.auth.provider.v1beta1.ProviderAPIClient =
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
proto.cs3.auth.provider.v1beta1.ProviderAPIPromiseClient =
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
 *   !proto.cs3.auth.provider.v1beta1.AuthenticateRequest,
 *   !proto.cs3.auth.provider.v1beta1.AuthenticateResponse>}
 */
const methodDescriptor_ProviderAPI_Authenticate = new grpc.web.MethodDescriptor(
  '/cs3.auth.provider.v1beta1.ProviderAPI/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.cs3.auth.provider.v1beta1.AuthenticateRequest,
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse,
  /** @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.auth.provider.v1beta1.AuthenticateRequest,
 *   !proto.cs3.auth.provider.v1beta1.AuthenticateResponse>}
 */
const methodInfo_ProviderAPI_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse,
  /** @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.auth.provider.v1beta1.AuthenticateResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.auth.provider.v1beta1.AuthenticateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.auth.provider.v1beta1.AuthenticateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.auth.provider.v1beta1.ProviderAPIClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.auth.provider.v1beta1.ProviderAPI/Authenticate',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Authenticate,
      callback);
};


/**
 * @param {!proto.cs3.auth.provider.v1beta1.AuthenticateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.auth.provider.v1beta1.AuthenticateResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.auth.provider.v1beta1.ProviderAPIPromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.auth.provider.v1beta1.ProviderAPI/Authenticate',
      request,
      metadata || {},
      methodDescriptor_ProviderAPI_Authenticate);
};


module.exports = proto.cs3.auth.provider.v1beta1;

