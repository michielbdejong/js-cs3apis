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
var cs3_admin_user_v1beta1_user_api_pb = require('../../../../cs3/admin/user/v1beta1/user_api_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_admin_user_v1beta1_CreateUserRequest(arg) {
  if (!(arg instanceof cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest)) {
    throw new Error('Expected argument of type cs3.admin.user.v1beta1.CreateUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_user_v1beta1_CreateUserRequest(buffer_arg) {
  return cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_user_v1beta1_CreateUserResponse(arg) {
  if (!(arg instanceof cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse)) {
    throw new Error('Expected argument of type cs3.admin.user.v1beta1.CreateUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_user_v1beta1_CreateUserResponse(buffer_arg) {
  return cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_user_v1beta1_DeleteUserRequest(arg) {
  if (!(arg instanceof cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type cs3.admin.user.v1beta1.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_user_v1beta1_DeleteUserRequest(buffer_arg) {
  return cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_admin_user_v1beta1_DeleteUserResponse(arg) {
  if (!(arg instanceof cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse)) {
    throw new Error('Expected argument of type cs3.admin.user.v1beta1.DeleteUserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_admin_user_v1beta1_DeleteUserResponse(buffer_arg) {
  return cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides a write only API for managing users.
var UserAPIService = exports.UserAPIService = {
  // Create a user account.
createUser: {
    path: '/cs3.admin.user.v1beta1.UserAPI/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_user_v1beta1_user_api_pb.CreateUserRequest,
    responseType: cs3_admin_user_v1beta1_user_api_pb.CreateUserResponse,
    requestSerialize: serialize_cs3_admin_user_v1beta1_CreateUserRequest,
    requestDeserialize: deserialize_cs3_admin_user_v1beta1_CreateUserRequest,
    responseSerialize: serialize_cs3_admin_user_v1beta1_CreateUserResponse,
    responseDeserialize: deserialize_cs3_admin_user_v1beta1_CreateUserResponse,
  },
  // Delete a user account.
deleteUser: {
    path: '/cs3.admin.user.v1beta1.UserAPI/DeleteUser',
    requestStream: false,
    responseStream: false,
    requestType: cs3_admin_user_v1beta1_user_api_pb.DeleteUserRequest,
    responseType: cs3_admin_user_v1beta1_user_api_pb.DeleteUserResponse,
    requestSerialize: serialize_cs3_admin_user_v1beta1_DeleteUserRequest,
    requestDeserialize: deserialize_cs3_admin_user_v1beta1_DeleteUserRequest,
    responseSerialize: serialize_cs3_admin_user_v1beta1_DeleteUserResponse,
    responseDeserialize: deserialize_cs3_admin_user_v1beta1_DeleteUserResponse,
  },
};

exports.UserAPIClient = grpc.makeGenericClientConstructor(UserAPIService);
