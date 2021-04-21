/**
 * @fileoverview gRPC-Web generated client stub for cs3.admin.group.v1beta1
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
proto.cs3.admin = {};
proto.cs3.admin.group = {};
proto.cs3.admin.group.v1beta1 = require('./group_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.admin.group.v1beta1.GroupAPIClient =
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
proto.cs3.admin.group.v1beta1.GroupAPIPromiseClient =
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
 *   !proto.cs3.admin.group.v1beta1.CreateGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.CreateGroupResponse>}
 */
const methodDescriptor_GroupAPI_CreateGroup = new grpc.web.MethodDescriptor(
  '/cs3.admin.group.v1beta1.GroupAPI/CreateGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.group.v1beta1.CreateGroupRequest,
  proto.cs3.admin.group.v1beta1.CreateGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.CreateGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.CreateGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.group.v1beta1.CreateGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.CreateGroupResponse>}
 */
const methodInfo_GroupAPI_CreateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.group.v1beta1.CreateGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.CreateGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.CreateGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.group.v1beta1.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.group.v1beta1.CreateGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.group.v1beta1.CreateGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.group.v1beta1.GroupAPIClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_CreateGroup,
      callback);
};


/**
 * @param {!proto.cs3.admin.group.v1beta1.CreateGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.group.v1beta1.CreateGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.group.v1beta1.GroupAPIPromiseClient.prototype.createGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_CreateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.admin.group.v1beta1.DeleteGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.DeleteGroupResponse>}
 */
const methodDescriptor_GroupAPI_DeleteGroup = new grpc.web.MethodDescriptor(
  '/cs3.admin.group.v1beta1.GroupAPI/DeleteGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.group.v1beta1.DeleteGroupRequest,
  proto.cs3.admin.group.v1beta1.DeleteGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.DeleteGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.DeleteGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.group.v1beta1.DeleteGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.DeleteGroupResponse>}
 */
const methodInfo_GroupAPI_DeleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.group.v1beta1.DeleteGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.DeleteGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.DeleteGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.group.v1beta1.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.group.v1beta1.DeleteGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.group.v1beta1.DeleteGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.group.v1beta1.GroupAPIClient.prototype.deleteGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_DeleteGroup,
      callback);
};


/**
 * @param {!proto.cs3.admin.group.v1beta1.DeleteGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.group.v1beta1.DeleteGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.group.v1beta1.GroupAPIPromiseClient.prototype.deleteGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_DeleteGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.admin.group.v1beta1.AddUserToGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.AddUserToGroupResponse>}
 */
const methodDescriptor_GroupAPI_AddUserToGroup = new grpc.web.MethodDescriptor(
  '/cs3.admin.group.v1beta1.GroupAPI/AddUserToGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.group.v1beta1.AddUserToGroupRequest,
  proto.cs3.admin.group.v1beta1.AddUserToGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.AddUserToGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.AddUserToGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.group.v1beta1.AddUserToGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.AddUserToGroupResponse>}
 */
const methodInfo_GroupAPI_AddUserToGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.group.v1beta1.AddUserToGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.AddUserToGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.AddUserToGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.group.v1beta1.AddUserToGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.group.v1beta1.AddUserToGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.group.v1beta1.AddUserToGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.group.v1beta1.GroupAPIClient.prototype.addUserToGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/AddUserToGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_AddUserToGroup,
      callback);
};


/**
 * @param {!proto.cs3.admin.group.v1beta1.AddUserToGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.group.v1beta1.AddUserToGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.group.v1beta1.GroupAPIPromiseClient.prototype.addUserToGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/AddUserToGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_AddUserToGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse>}
 */
const methodDescriptor_GroupAPI_RemoveUserFromGroup = new grpc.web.MethodDescriptor(
  '/cs3.admin.group.v1beta1.GroupAPI/RemoveUserFromGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest,
  proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest,
 *   !proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse>}
 */
const methodInfo_GroupAPI_RemoveUserFromGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse,
  /** @param {!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.admin.group.v1beta1.GroupAPIClient.prototype.removeUserFromGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/RemoveUserFromGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_RemoveUserFromGroup,
      callback);
};


/**
 * @param {!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.admin.group.v1beta1.RemoveUserFromGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.admin.group.v1beta1.GroupAPIPromiseClient.prototype.removeUserFromGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.admin.group.v1beta1.GroupAPI/RemoveUserFromGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_RemoveUserFromGroup);
};


module.exports = proto.cs3.admin.group.v1beta1;

