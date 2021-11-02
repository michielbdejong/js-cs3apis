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
var cs3_app_registry_v1beta1_registry_api_pb = require('../../../../cs3/app/registry/v1beta1/registry_api_pb.js');
var cs3_app_registry_v1beta1_resources_pb = require('../../../../cs3/app/registry/v1beta1/resources_pb.js');
var cs3_rpc_v1beta1_status_pb = require('../../../../cs3/rpc/v1beta1/status_pb.js');
var cs3_storage_provider_v1beta1_resources_pb = require('../../../../cs3/storage/provider/v1beta1/resources_pb.js');
var cs3_types_v1beta1_types_pb = require('../../../../cs3/types/v1beta1/types_pb.js');

function serialize_cs3_app_registry_v1beta1_AddAppProviderRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.AddAppProviderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_AddAppProviderRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_AddAppProviderResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.AddAppProviderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_AddAppProviderResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_GetAppProvidersRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetAppProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetAppProvidersRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_GetAppProvidersResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetAppProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetAppProvidersResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetDefaultAppProviderForMimeTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.GetDefaultAppProviderForMimeTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListAppProvidersRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListAppProvidersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListAppProvidersRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListAppProvidersResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListAppProvidersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListAppProvidersResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListSupportedMimeTypesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.ListSupportedMimeTypesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeRequest(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.SetDefaultAppProviderForMimeTypeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeRequest(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeResponse(arg) {
  if (!(arg instanceof cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse)) {
    throw new Error('Expected argument of type cs3.app.registry.v1beta1.SetDefaultAppProviderForMimeTypeResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeResponse(buffer_arg) {
  return cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// App Registry API
//
// The App Registry API is meant to as registry that
// contains mappings between mime types and app providers.
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
var RegistryAPIService = exports.RegistryAPIService = {
  // Returns the app providers that are capable of handling this resource info.
// MUST return CODE_NOT_FOUND if no providers are available.
getAppProviders: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/GetAppProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_GetAppProvidersRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_GetAppProvidersRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_GetAppProvidersResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_GetAppProvidersResponse,
  },
  // Registers a new app provider to the registry.
addAppProvider: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/AddAppProvider',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_AddAppProviderRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_AddAppProviderRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_AddAppProviderResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_AddAppProviderResponse,
  },
  // Returns a list of the available app providers known by this registry.
listAppProviders: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/ListAppProviders',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_ListAppProvidersResponse,
  },
  // Returns a list of the supported mime types along with the apps which they can be opened with.
listSupportedMimeTypes: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/ListSupportedMimeTypes',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_ListSupportedMimeTypesResponse,
  },
  // Returns the default app provider which serves a specified mime type.
getDefaultAppProviderForMimeType: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/GetDefaultAppProviderForMimeType',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_GetDefaultAppProviderForMimeTypeResponse,
  },
  // Sets the default app provider for a specified mime type.
setDefaultAppProviderForMimeType: {
    path: '/cs3.app.registry.v1beta1.RegistryAPI/SetDefaultAppProviderForMimeType',
    requestStream: false,
    responseStream: false,
    requestType: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest,
    responseType: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse,
    requestSerialize: serialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeRequest,
    requestDeserialize: deserialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeRequest,
    responseSerialize: serialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeResponse,
    responseDeserialize: deserialize_cs3_app_registry_v1beta1_SetDefaultAppProviderForMimeTypeResponse,
  },
};

exports.RegistryAPIClient = grpc.makeGenericClientConstructor(RegistryAPIService);
