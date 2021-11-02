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
var cs3_identity_group_v1beta1_group_api_pb = require('../../../../cs3/identity/group/v1beta1/group_api_pb.js');
var cs3_identity_group_v1beta1_resources_pb = require('../../../../cs3/identity/group/v1beta1/resources_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_identity_group_v1beta1_FindGroupsRequest(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.FindGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_FindGroupsRequest(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_FindGroupsResponse(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.FindGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_FindGroupsResponse(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetGroupByClaimRequest(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetGroupByClaimRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetGroupByClaimRequest(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetGroupByClaimResponse(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetGroupByClaimResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetGroupByClaimResponse(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetGroupRequest(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetGroupRequest(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetGroupResponse(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetGroupResponse(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetMembersRequest(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetMembersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetMembersRequest(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_GetMembersResponse(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.GetMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_GetMembersResponse(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_HasMemberRequest(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.HasMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_HasMemberRequest(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_identity_group_v1beta1_HasMemberResponse(arg) {
  if (!(arg instanceof cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse)) {
    throw new Error('Expected argument of type cs3.identity.group.v1beta1.HasMemberResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_identity_group_v1beta1_HasMemberResponse(buffer_arg) {
  return cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// GroupProvider API.
//
// The GroupProvider API is responsible for providing methods to retrieve
// information about groups and their interactions with users.
//
// The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL
// NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and
// "OPTIONAL" in this document are to be interpreted as described in
// RFC 2119.
//
// The following are global requirements that apply to all methods:
// Any method MUST return CODE_OK on a successful operation.
// Any method MAY return NOT_IMPLEMENTED.
// Any method MAY return INTERNAL.
// Any method MAY return UNKNOWN.
// Any method MAY return UNAUTHENTICATED.
//
// Provides an API for managing groups.
var GroupAPIService = exports.GroupAPIService = {
  // Gets the information about a group by the group id.
getGroup: {
    path: '/cs3.identity.group.v1beta1.GroupAPI/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest,
    responseType: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse,
    requestSerialize: serialize_cs3_identity_group_v1beta1_GetGroupRequest,
    requestDeserialize: deserialize_cs3_identity_group_v1beta1_GetGroupRequest,
    responseSerialize: serialize_cs3_identity_group_v1beta1_GetGroupResponse,
    responseDeserialize: deserialize_cs3_identity_group_v1beta1_GetGroupResponse,
  },
  // Gets the information about a group based on a specified claim.
getGroupByClaim: {
    path: '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest,
    responseType: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse,
    requestSerialize: serialize_cs3_identity_group_v1beta1_GetGroupByClaimRequest,
    requestDeserialize: deserialize_cs3_identity_group_v1beta1_GetGroupByClaimRequest,
    responseSerialize: serialize_cs3_identity_group_v1beta1_GetGroupByClaimResponse,
    responseDeserialize: deserialize_cs3_identity_group_v1beta1_GetGroupByClaimResponse,
  },
  // Gets the members of a group.
getMembers: {
    path: '/cs3.identity.group.v1beta1.GroupAPI/GetMembers',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest,
    responseType: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse,
    requestSerialize: serialize_cs3_identity_group_v1beta1_GetMembersRequest,
    requestDeserialize: deserialize_cs3_identity_group_v1beta1_GetMembersRequest,
    responseSerialize: serialize_cs3_identity_group_v1beta1_GetMembersResponse,
    responseDeserialize: deserialize_cs3_identity_group_v1beta1_GetMembersResponse,
  },
  // Tells if the group has certain member.
hasMember: {
    path: '/cs3.identity.group.v1beta1.GroupAPI/HasMember',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest,
    responseType: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse,
    requestSerialize: serialize_cs3_identity_group_v1beta1_HasMemberRequest,
    requestDeserialize: deserialize_cs3_identity_group_v1beta1_HasMemberRequest,
    responseSerialize: serialize_cs3_identity_group_v1beta1_HasMemberResponse,
    responseDeserialize: deserialize_cs3_identity_group_v1beta1_HasMemberResponse,
  },
  // Finds groups whose names match the specified filter.
findGroups: {
    path: '/cs3.identity.group.v1beta1.GroupAPI/FindGroups',
    requestStream: false,
    responseStream: false,
    requestType: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest,
    responseType: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse,
    requestSerialize: serialize_cs3_identity_group_v1beta1_FindGroupsRequest,
    requestDeserialize: deserialize_cs3_identity_group_v1beta1_FindGroupsRequest,
    responseSerialize: serialize_cs3_identity_group_v1beta1_FindGroupsResponse,
    responseDeserialize: deserialize_cs3_identity_group_v1beta1_FindGroupsResponse,
  },
};

exports.GroupAPIClient = grpc.makeGenericClientConstructor(GroupAPIService);
