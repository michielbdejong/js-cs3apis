/**
 * @fileoverview gRPC-Web generated client stub for cs3.admin.user.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.admin = {};
proto.cs3.admin.user = {};
proto.cs3.admin.user.v1beta1 = require('./user_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.admin.user.v1beta1.UserAPIClient =
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
proto.cs3.admin.user.v1beta1.UserAPIPromiseClient =
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
 *   !proto.cs3.admin.user.v1beta1.CreateUserRequest,
 *   !proto.cs3.admin.user.v1beta1.CreateUserResponse>}
 */
const methodDescriptor_UserAPI_CreateUser = new grpc.web.MethodDescriptor(
  '/cs3.admin.user.v1beta1.UserAPI/CreateUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.user.v1beta1.CreateUserRequest,
  proto.cs3.admin.user.v1beta1.CreateUserResponse,
  /** @param {!proto.cs3.admin.user.v1beta1.CreateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.user.v1beta1.CreateUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.user.v1beta1.CreateUserRequest,
 *   !proto.cs3.admin.user.v1beta1.CreateUserResponse>}
 */
const methodInfo_UserAPI_CreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.user.v1beta1.CreateUserResponse,
  /** @param {!proto.cs3.admin.user.v1beta1.CreateUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.user.v1beta1.CreateUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.user.v1beta1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.user.v1beta1.CreateUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.user.v1beta1.CreateUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.user.v1beta1.UserAPIClient.prototype.createUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.user.v1beta1.UserAPI/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_CreateUser,
      callback);
};


/**
 * @param {!proto.cs3.admin.user.v1beta1.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.user.v1beta1.CreateUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.user.v1beta1.UserAPIPromiseClient.prototype.createUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.user.v1beta1.UserAPI/CreateUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_CreateUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.admin.user.v1beta1.DeleteUserRequest,
 *   !proto.cs3.admin.user.v1beta1.DeleteUserResponse>}
 */
const methodDescriptor_UserAPI_DeleteUser = new grpc.web.MethodDescriptor(
  '/cs3.admin.user.v1beta1.UserAPI/DeleteUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.user.v1beta1.DeleteUserRequest,
  proto.cs3.admin.user.v1beta1.DeleteUserResponse,
  /** @param {!proto.cs3.admin.user.v1beta1.DeleteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.user.v1beta1.DeleteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.user.v1beta1.DeleteUserRequest,
 *   !proto.cs3.admin.user.v1beta1.DeleteUserResponse>}
 */
const methodInfo_UserAPI_DeleteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.user.v1beta1.DeleteUserResponse,
  /** @param {!proto.cs3.admin.user.v1beta1.DeleteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.user.v1beta1.DeleteUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.user.v1beta1.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.user.v1beta1.DeleteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.user.v1beta1.DeleteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.user.v1beta1.UserAPIClient.prototype.deleteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.user.v1beta1.UserAPI/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_DeleteUser,
      callback);
};


/**
 * @param {!proto.cs3.admin.user.v1beta1.DeleteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.user.v1beta1.DeleteUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.user.v1beta1.UserAPIPromiseClient.prototype.deleteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.user.v1beta1.UserAPI/DeleteUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_DeleteUser);
};


module.exports = proto.cs3.admin.user.v1beta1;

