/**
 * @fileoverview gRPC-Web generated client stub for cs3.ocm.invite.v1beta1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js')

var cs3_ocm_invite_v1beta1_resources_pb = require('../../../../cs3/ocm/invite/v1beta1/resources_pb.js')

var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js')

var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js')

var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js')
const proto = {};
proto.cs3 = {};
proto.cs3.ocm = {};
proto.cs3.ocm.invite = {};
proto.cs3.ocm.invite.v1beta1 = require('./invite_api_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient =
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
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient =
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
 *   !proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest,
 *   !proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse>}
 */
const methodDescriptor_InviteAPI_GenerateInviteToken = new grpc.web.MethodDescriptor(
  '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest,
  proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest,
 *   !proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse>}
 */
const methodInfo_InviteAPI_GenerateInviteToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient.prototype.generateInviteToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_GenerateInviteToken,
      callback);
};


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient.prototype.generateInviteToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_GenerateInviteToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest,
 *   !proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse>}
 */
const methodDescriptor_InviteAPI_ForwardInvite = new grpc.web.MethodDescriptor(
  '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest,
  proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest,
 *   !proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse>}
 */
const methodInfo_InviteAPI_ForwardInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient.prototype.forwardInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_ForwardInvite,
      callback);
};


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.ForwardInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.invite.v1beta1.ForwardInviteResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient.prototype.forwardInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_ForwardInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest,
 *   !proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse>}
 */
const methodDescriptor_InviteAPI_AcceptInvite = new grpc.web.MethodDescriptor(
  '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest,
  proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest,
 *   !proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse>}
 */
const methodInfo_InviteAPI_AcceptInvite = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient.prototype.acceptInvite =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_AcceptInvite,
      callback);
};


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.AcceptInviteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.invite.v1beta1.AcceptInviteResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient.prototype.acceptInvite =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_AcceptInvite);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest,
 *   !proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse>}
 */
const methodDescriptor_InviteAPI_GetAcceptedUser = new grpc.web.MethodDescriptor(
  '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest,
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest,
 *   !proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse>}
 */
const methodInfo_InviteAPI_GetAcceptedUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient.prototype.getAcceptedUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_GetAcceptedUser,
      callback);
};


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.invite.v1beta1.GetAcceptedUserResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient.prototype.getAcceptedUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_GetAcceptedUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest,
 *   !proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse>}
 */
const methodDescriptor_InviteAPI_FindAcceptedUsers = new grpc.web.MethodDescriptor(
  '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers',
  grpc.web.MethodType.UNARY,
  proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest,
  proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest,
 *   !proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse>}
 */
const methodInfo_InviteAPI_FindAcceptedUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse,
  /** @param {!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse.deserializeBinary
);


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIClient.prototype.findAcceptedUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_FindAcceptedUsers,
      callback);
};


/**
 * @param {!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.cs3.ocm.invite.v1beta1.InviteAPIPromiseClient.prototype.findAcceptedUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers',
      request,
      metadata || {},
      methodDescriptor_InviteAPI_FindAcceptedUsers);
};


module.exports = proto.cs3.ocm.invite.v1beta1;

