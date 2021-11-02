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
var cs3_auth_applications_v1beta1_applications_api_pb = require('../../../../cs3/auth/applications/v1beta1/applications_api_pb.js');
var cs3_auth_applications_v1beta1_resources_pb = require('../../../../cs3/auth/applications/v1beta1/resources_pb.js');
var cs3_auth_provider_v1beta1_resources_pb = require('../../../../cs3/auth/provider/v1beta1/resources_pb.js');
var cs3_identity_user_v1beta1_resources_pb = require('../../../../cs3/identity/user/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_auth_applications_v1beta1_GenerateAppPasswordRequest(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.GenerateAppPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_GenerateAppPasswordRequest(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_GenerateAppPasswordResponse(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.GenerateAppPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_GenerateAppPasswordResponse(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_GetAppPasswordRequest(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.GetAppPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_GetAppPasswordRequest(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_GetAppPasswordResponse(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.GetAppPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_GetAppPasswordResponse(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordRequest(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.InvalidateAppPasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordRequest(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordResponse(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.InvalidateAppPasswordResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordResponse(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_ListAppPasswordsRequest(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.ListAppPasswordsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_ListAppPasswordsRequest(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_auth_applications_v1beta1_ListAppPasswordsResponse(arg) {
  if (!(arg instanceof cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse)) {
    throw new Error('Expected argument of type cs3.auth.applications.v1beta1.ListAppPasswordsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_auth_applications_v1beta1_ListAppPasswordsResponse(buffer_arg) {
  return cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Auth Applications API
//
// The Auth Applications API is meant to generate and manage authentication
// tokens with specified scopes to be used in third-party applications on behalf
// of the user.
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
var ApplicationsAPIService = exports.ApplicationsAPIService = {
  // GenerateAppPassword creates a password with specified scope to be used by
// third-party applications.
generateAppPassword: {
    path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/GenerateAppPassword',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest,
    responseType: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse,
    requestSerialize: serialize_cs3_auth_applications_v1beta1_GenerateAppPasswordRequest,
    requestDeserialize: deserialize_cs3_auth_applications_v1beta1_GenerateAppPasswordRequest,
    responseSerialize: serialize_cs3_auth_applications_v1beta1_GenerateAppPasswordResponse,
    responseDeserialize: deserialize_cs3_auth_applications_v1beta1_GenerateAppPasswordResponse,
  },
  // ListAppPasswords lists the application passwords created by a user.
listAppPasswords: {
    path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/ListAppPasswords',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest,
    responseType: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse,
    requestSerialize: serialize_cs3_auth_applications_v1beta1_ListAppPasswordsRequest,
    requestDeserialize: deserialize_cs3_auth_applications_v1beta1_ListAppPasswordsRequest,
    responseSerialize: serialize_cs3_auth_applications_v1beta1_ListAppPasswordsResponse,
    responseDeserialize: deserialize_cs3_auth_applications_v1beta1_ListAppPasswordsResponse,
  },
  // InvalidateAppPassword invalidates a generated password.
invalidateAppPassword: {
    path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/InvalidateAppPassword',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest,
    responseType: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse,
    requestSerialize: serialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordRequest,
    requestDeserialize: deserialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordRequest,
    responseSerialize: serialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordResponse,
    responseDeserialize: deserialize_cs3_auth_applications_v1beta1_InvalidateAppPasswordResponse,
  },
  // GetAppPassword retrieves the password information by the combination of username and password.
getAppPassword: {
    path: '/cs3.auth.applications.v1beta1.ApplicationsAPI/GetAppPassword',
    requestStream: false,
    responseStream: false,
    requestType: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest,
    responseType: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse,
    requestSerialize: serialize_cs3_auth_applications_v1beta1_GetAppPasswordRequest,
    requestDeserialize: deserialize_cs3_auth_applications_v1beta1_GetAppPasswordRequest,
    responseSerialize: serialize_cs3_auth_applications_v1beta1_GetAppPasswordResponse,
    responseDeserialize: deserialize_cs3_auth_applications_v1beta1_GetAppPasswordResponse,
  },
};

exports.ApplicationsAPIClient = grpc.makeGenericClientConstructor(ApplicationsAPIService);
