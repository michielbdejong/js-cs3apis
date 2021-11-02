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
var cs3_admin_group_v1beta1_group_api_pb = require('../../../../cs3/admin/group/v1beta1/group_api_pb.js');
var cs3_identity_group_v1beta1_resources_pb = require('../../../../cs3/identity/group/v1beta1/resources_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_admin_group_v1beta1_AddUserToGroupRequest(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.AddUserToGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_AddUserToGroupRequest(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_AddUserToGroupResponse(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.AddUserToGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_AddUserToGroupResponse(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_CreateGroupRequest(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.CreateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_CreateGroupRequest(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_CreateGroupResponse(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.CreateGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_CreateGroupResponse(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_DeleteGroupRequest(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.DeleteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_DeleteGroupRequest(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_DeleteGroupResponse(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.DeleteGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_DeleteGroupResponse(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_RemoveUserFromGroupRequest(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.RemoveUserFromGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_RemoveUserFromGroupRequest(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_group_v1beta1_RemoveUserFromGroupResponse(arg) {
  if (!(arg instanceof cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse)) {
    throw new Error('Expected argument of type cs3.admin.group.v1beta1.RemoveUserFromGroupResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_group_v1beta1_RemoveUserFromGroupResponse(buffer_arg) {
  return cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides a write only API for managing groups.
var GroupAPIService = exports.GroupAPIService = {
  // Create a group.
createGroup: {
    path: '/cs3.admin.group.v1beta1.GroupAPI/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest,
    responseType: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse,
    requestSerialize: serialize_cs3_admin_group_v1beta1_CreateGroupRequest,
    requestDeserialize: deserialize_cs3_admin_group_v1beta1_CreateGroupRequest,
    responseSerialize: serialize_cs3_admin_group_v1beta1_CreateGroupResponse,
    responseDeserialize: deserialize_cs3_admin_group_v1beta1_CreateGroupResponse,
  },
  // Delete a group.
deleteGroup: {
    path: '/cs3.admin.group.v1beta1.GroupAPI/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest,
    responseType: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse,
    requestSerialize: serialize_cs3_admin_group_v1beta1_DeleteGroupRequest,
    requestDeserialize: deserialize_cs3_admin_group_v1beta1_DeleteGroupRequest,
    responseSerialize: serialize_cs3_admin_group_v1beta1_DeleteGroupResponse,
    responseDeserialize: deserialize_cs3_admin_group_v1beta1_DeleteGroupResponse,
  },
  // Add a user to a group.
addUserToGroup: {
    path: '/cs3.admin.group.v1beta1.GroupAPI/AddUserToGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest,
    responseType: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse,
    requestSerialize: serialize_cs3_admin_group_v1beta1_AddUserToGroupRequest,
    requestDeserialize: deserialize_cs3_admin_group_v1beta1_AddUserToGroupRequest,
    responseSerialize: serialize_cs3_admin_group_v1beta1_AddUserToGroupResponse,
    responseDeserialize: deserialize_cs3_admin_group_v1beta1_AddUserToGroupResponse,
  },
  // Remove a user from a group.
removeUserFromGroup: {
    path: '/cs3.admin.group.v1beta1.GroupAPI/RemoveUserFromGroup',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest,
    responseType: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse,
    requestSerialize: serialize_cs3_admin_group_v1beta1_RemoveUserFromGroupRequest,
    requestDeserialize: deserialize_cs3_admin_group_v1beta1_RemoveUserFromGroupRequest,
    responseSerialize: serialize_cs3_admin_group_v1beta1_RemoveUserFromGroupResponse,
    responseDeserialize: deserialize_cs3_admin_group_v1beta1_RemoveUserFromGroupResponse,
  },
};

exports.GroupAPIClient = grpc.makeGenericClientConstructor(GroupAPIService);
