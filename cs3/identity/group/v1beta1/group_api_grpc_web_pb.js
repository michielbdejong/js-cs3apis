/**
 * @fileoverview gRPC-Web generated client stub for cs3.identity.group.v1beta1
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
proto.cs3.identity.group = {};
proto.cs3.identity.group.v1beta1 = require('./group_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient =
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
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient =
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
 *   !proto.cs3.identity.group.v1beta1.GetGroupRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupResponse>}
 */
const methodDescriptor_GroupAPI_GetGroup = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetGroupRequest,
  proto.cs3.identity.group.v1beta1.GetGroupResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.group.v1beta1.GetGroupRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupResponse>}
 */
const methodInfo_GroupAPI_GetGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.group.v1beta1.GetGroupResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.group.v1beta1.GetGroupResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetGroupResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroup,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetGroupResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>}
 */
const methodDescriptor_GroupAPI_GetGroupByClaim = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest,
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest,
 *   !proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>}
 */
const methodInfo_GroupAPI_GetGroupByClaim = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getGroupByClaim =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroupByClaim,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetGroupByClaimRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetGroupByClaimResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getGroupByClaim =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetGroupByClaim);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.GetMembersRequest,
 *   !proto.cs3.identity.group.v1beta1.GetMembersResponse>}
 */
const methodDescriptor_GroupAPI_GetMembers = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.GetMembersRequest,
  proto.cs3.identity.group.v1beta1.GetMembersResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetMembersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.group.v1beta1.GetMembersRequest,
 *   !proto.cs3.identity.group.v1beta1.GetMembersResponse>}
 */
const methodInfo_GroupAPI_GetMembers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.group.v1beta1.GetMembersResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.GetMembersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.group.v1beta1.GetMembersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.GetMembersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.getMembers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetMembers,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.GetMembersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.GetMembersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.getMembers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_GetMembers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.HasMemberRequest,
 *   !proto.cs3.identity.group.v1beta1.HasMemberResponse>}
 */
const methodDescriptor_GroupAPI_HasMember = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.HasMemberRequest,
  proto.cs3.identity.group.v1beta1.HasMemberResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.HasMemberResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.group.v1beta1.HasMemberRequest,
 *   !proto.cs3.identity.group.v1beta1.HasMemberResponse>}
 */
const methodInfo_GroupAPI_HasMember = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.group.v1beta1.HasMemberResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.HasMemberResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.group.v1beta1.HasMemberResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.HasMemberResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.hasMember =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_HasMember,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.HasMemberRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.HasMemberResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.hasMember =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_HasMember);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.identity.group.v1beta1.FindGroupsRequest,
 *   !proto.cs3.identity.group.v1beta1.FindGroupsResponse>}
 */
const methodDescriptor_GroupAPI_FindGroups = new grpc.web.MethodDescriptor(
  '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
  grpc.web.MethodType.UNARY,
  proto.cs3.identity.group.v1beta1.FindGroupsRequest,
  proto.cs3.identity.group.v1beta1.FindGroupsResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.FindGroupsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.identity.group.v1beta1.FindGroupsRequest,
 *   !proto.cs3.identity.group.v1beta1.FindGroupsResponse>}
 */
const methodInfo_GroupAPI_FindGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.identity.group.v1beta1.FindGroupsResponse,
  /** @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.identity.group.v1beta1.FindGroupsResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.identity.group.v1beta1.FindGroupsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.identity.group.v1beta1.FindGroupsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.identity.group.v1beta1.GroupAPIClient.prototype.findGroups =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_FindGroups,
      callback);
};


/**
 * @param {!proto.cs3.identity.group.v1beta1.FindGroupsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.identity.group.v1beta1.FindGroupsResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.identity.group.v1beta1.GroupAPIPromiseClient.prototype.findGroups =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
      request,
      metadata || {},
      methodDescriptor_GroupAPI_FindGroups);
};


module.exports = proto.cs3.identity.group.v1beta1;

