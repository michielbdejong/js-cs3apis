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
var cs3_app_provider_v1beta1_provider_api_pb = require('../../../../cs3/app/provider/v1beta1/provider_api_pb.js');
var cs3_app_provider_v1beta1_resources_pb = require('../../../../cs3/app/provider/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_app_provider_v1beta1_OpenInAppRequest(arg) {
  if (!(arg instanceof cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest)) {
    throw new Error('Expected argument of type cs3.app.provider.v1beta1.OpenInAppRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_provider_v1beta1_OpenInAppRequest(buffer_arg) {
  return cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_provider_v1beta1_OpenInAppResponse(arg) {
  if (!(arg instanceof cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse)) {
    throw new Error('Expected argument of type cs3.app.provider.v1beta1.OpenInAppResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_provider_v1beta1_OpenInAppResponse(buffer_arg) {
  return cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "cs3/appprovider/v1beta1/resources.proto";
//
// App Provider API
//
// The App Provider API is responsible for creating URLs that
// will render a viewer or editor for the given resource, typically via WOPI protocol.
// For example, a Collabora or HackMD editor.
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
var ProviderAPIService = exports.ProviderAPIService = {
  // Returns the App URL and all necessary info to open a resource in an online editor.
// MUST return CODE_NOT_FOUND if the resource does not exist.
openInApp: {
    path: '/cs3.app.provider.v1beta1.ProviderAPI/OpenInApp',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppRequest,
    responseType: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse,
    requestSerialize: serialize_cs3_app_provider_v1beta1_OpenInAppRequest,
    requestDeserialize: deserialize_cs3_app_provider_v1beta1_OpenInAppRequest,
    responseSerialize: serialize_cs3_app_provider_v1beta1_OpenInAppResponse,
    responseDeserialize: deserialize_cs3_app_provider_v1beta1_OpenInAppResponse,
  },
};

exports.ProviderAPIClient = grpc.makeGenericClientConstructor(ProviderAPIService);
