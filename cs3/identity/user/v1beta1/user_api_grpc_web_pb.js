/**
 * @fileoverview gRPC-Web generated client stub for cs3.identity.user.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_group_v1beta1_resources_pb = require('../../../../cs3/identity/group/v1beta1/resources_pb.js')

var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.identity = {};
proto.cs3.identity.user = {};
proto.cs3.identity.user.v1beta1 = require('./user_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.identity.user.v1beta1.UserAPIClient =
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
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient =
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
 *   !proto.cs3.identity.user.v1beta1.GetUserRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserResponse>}
 */
const methodDescriptor_UserAPI_GetUser = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserRequest,
  proto.cs3.identity.user.v1beta1.GetUserResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.GetUserRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserResponse>}
 */
const methodInfo_UserAPI_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.user.v1beta1.GetUserResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUser,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>}
 */
const methodDescriptor_UserAPI_GetUserByClaim = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserByClaimRequest,
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>}
 */
const methodInfo_UserAPI_GetUserByClaim = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserByClaimResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.GetUserByClaimResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUserByClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserByClaim,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserByClaimResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUserByClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserByClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 */
const methodDescriptor_UserAPI_GetUserGroups = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsRequest,
 *   !proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 */
const methodInfo_UserAPI_GetUserGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.GetUserGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.GetUserGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.getUserGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserGroups,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.GetUserGroupsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.getUserGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserAPI_GetUserGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.IsInGroupRequest,
 *   !proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 */
const methodDescriptor_UserAPI_IsInGroup = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/IsInGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.IsInGroupRequest,
  proto.cs3.identity.user.v1beta1.IsInGroupResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.IsInGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.IsInGroupRequest,
 *   !proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 */
const methodInfo_UserAPI_IsInGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.user.v1beta1.IsInGroupResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.IsInGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.IsInGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.IsInGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.isInGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_UserAPI_IsInGroup,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.IsInGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.isInGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_UserAPI_IsInGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.user.v1beta1.FindUsersRequest,
 *   !proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 */
const methodDescriptor_UserAPI_FindUsers = new grpc.web.MethodDescriptor(
  '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.user.v1beta1.FindUsersRequest,
  proto.cs3.identity.user.v1beta1.FindUsersResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.FindUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.user.v1beta1.FindUsersRequest,
 *   !proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 */
const methodInfo_UserAPI_FindUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.user.v1beta1.FindUsersResponse,
  /** @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.user.v1beta1.FindUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.user.v1beta1.FindUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.user.v1beta1.FindUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.user.v1beta1.UserAPIClient.prototype.findUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserAPI_FindUsers,
      callback);
};


/**
 * @param {!proto.cs3.identity.user.v1beta1.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.user.v1beta1.FindUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.user.v1beta1.UserAPIPromiseClient.prototype.findUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.user.v1beta1.UserAPI/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserAPI_FindUsers);
};


module.exports = proto.cs3.identity.user.v1beta1;

