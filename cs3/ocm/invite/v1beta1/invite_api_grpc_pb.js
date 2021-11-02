// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018-2019 CERN
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// In applying this license, CERN does not waive the privileges and immunities
// granted to it by virtue of its status as an Intergovernmental Organization
// or submit itself to any jurisdiction.
//
'use strict';
var grpc = require('@grpc/grpc-js');
var cs3_ocm_invite_v1beta1_invite_api_pb = require('../../../../cs3/ocm/invite/v1beta1/invite_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_ocm_invite_v1beta1_resources_pb = require('../../../../cs3/ocm/invite/v1beta1/resources_pb.js');
var cs3_ocm_provider_v1beta1_resources_pb = require('../../../../cs3/ocm/provider/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.AcceptInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.FindAcceptedUsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.FindAcceptedUsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.ForwardInviteResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GenerateInviteTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetAcceptedUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse(arg) {
  if (!(arg instanceof cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse)) {
    throw new Error('Expected argument of type cs3.ocm.invite.v1beta1.GetAcceptedUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse(buffer_arg) {
  return cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Invite API
//
// The Invite API is meant to invite users and groups belonging to other
// sync'n'share systems, so that collaboration of resources can be enabled.
//
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
//
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a succesful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
var InviteAPIService = exports.InviteAPIService = {
  // Generates a new token for the user with a validity of 24 hours.
generateInviteToken: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GenerateInviteTokenResponse,
  },
  // Forwards a received invite to the sync'n'share system provider.
forwardInvite: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_ForwardInviteResponse,
  },
  // Completes an invitation acceptance.
acceptInvite: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_AcceptInviteResponse,
  },
  // Retrieves details about a remote user who has accepted an invite to share.
getAcceptedUser: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_GetAcceptedUserResponse,
  },
  // Finds users who accepted invite tokens by their attributes.
findAcceptedUsers: {
    path: '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers',
    requestStream: false,
    responseStream: false,
    requestType: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest,
    responseType: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse,
    requestSerialize: serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest,
    requestDeserialize: deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersRequest,
    responseSerialize: serialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse,
    responseDeserialize: deserialize_cs3_ocm_invite_v1beta1_FindAcceptedUsersResponse,
  },
};

exports.InviteAPIClient = grpc.makeGenericClientConstructor(InviteAPIService);
