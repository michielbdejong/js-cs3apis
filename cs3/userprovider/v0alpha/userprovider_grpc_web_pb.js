/**
 * @fileoverview gRPC-Web generated client stub for cs3.userproviderv0alpha
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_authprovider_v0alpha_resources_pb = require('../../../cs3/authprovider/v0alpha/resources_pb.js')

var cs3_rpc_status_pb = require('../../../cs3/rpc/status_pb.js')

var cs3_types_types_pb = require('../../../cs3/types/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.userproviderv0alpha = require('./userprovider_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.userproviderv0alpha.UserProviderServiceClient =
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
proto.cs3.userproviderv0alpha.UserProviderServicePromiseClient =
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
 *   !proto.cs3.userproviderv0alpha.GetUserRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserResponse>}
 */
const methodDescriptor_UserProviderService_GetUser = new grpc.web.MethodDescriptor(
  '/cs3.userproviderv0alpha.UserProviderService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.userproviderv0alpha.GetUserRequest,
  proto.cs3.userproviderv0alpha.GetUserResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.GetUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.GetUserRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserResponse>}
 */
const methodInfo_UserProviderService_GetUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.userproviderv0alpha.GetUserResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.GetUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.GetUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.GetUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.userproviderv0alpha.UserProviderServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_GetUser,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.GetUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.userproviderv0alpha.UserProviderServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/GetUser',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 */
const methodDescriptor_UserProviderService_GetUserGroups = new grpc.web.MethodDescriptor(
  '/cs3.userproviderv0alpha.UserProviderService/GetUserGroups',
  grpc.web.MethodType.UNARY,
  proto.cs3.userproviderv0alpha.GetUserGroupsRequest,
  proto.cs3.userproviderv0alpha.GetUserGroupsResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.GetUserGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsRequest,
 *   !proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 */
const methodInfo_UserProviderService_GetUserGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.userproviderv0alpha.GetUserGroupsResponse,
  /** @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.GetUserGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.GetUserGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.GetUserGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.userproviderv0alpha.UserProviderServiceClient.prototype.getUserGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_GetUserGroups,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.GetUserGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.GetUserGroupsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.userproviderv0alpha.UserProviderServicePromiseClient.prototype.getUserGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/GetUserGroups',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_GetUserGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.IsInGroupRequest,
 *   !proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 */
const methodDescriptor_UserProviderService_IsInGroup = new grpc.web.MethodDescriptor(
  '/cs3.userproviderv0alpha.UserProviderService/IsInGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.userproviderv0alpha.IsInGroupRequest,
  proto.cs3.userproviderv0alpha.IsInGroupResponse,
  /** @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.IsInGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.IsInGroupRequest,
 *   !proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 */
const methodInfo_UserProviderService_IsInGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.userproviderv0alpha.IsInGroupResponse,
  /** @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.IsInGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.IsInGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.IsInGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.userproviderv0alpha.UserProviderServiceClient.prototype.isInGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_IsInGroup,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.IsInGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.IsInGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.userproviderv0alpha.UserProviderServicePromiseClient.prototype.isInGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/IsInGroup',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_IsInGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.userproviderv0alpha.FindUsersRequest,
 *   !proto.cs3.userproviderv0alpha.FindUsersResponse>}
 */
const methodDescriptor_UserProviderService_FindUsers = new grpc.web.MethodDescriptor(
  '/cs3.userproviderv0alpha.UserProviderService/FindUsers',
  grpc.web.MethodType.UNARY,
  proto.cs3.userproviderv0alpha.FindUsersRequest,
  proto.cs3.userproviderv0alpha.FindUsersResponse,
  /** @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.FindUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.userproviderv0alpha.FindUsersRequest,
 *   !proto.cs3.userproviderv0alpha.FindUsersResponse>}
 */
const methodInfo_UserProviderService_FindUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.userproviderv0alpha.FindUsersResponse,
  /** @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.userproviderv0alpha.FindUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.userproviderv0alpha.FindUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.userproviderv0alpha.FindUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.userproviderv0alpha.UserProviderServiceClient.prototype.findUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_FindUsers,
      callback);
};


/**
 * @param {!proto.cs3.userproviderv0alpha.FindUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.userproviderv0alpha.FindUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.userproviderv0alpha.UserProviderServicePromiseClient.prototype.findUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.userproviderv0alpha.UserProviderService/FindUsers',
      request,
      metadata || {},
      methodDescriptor_UserProviderService_FindUsers);
};


module.exports = proto.cs3.userproviderv0alpha;

