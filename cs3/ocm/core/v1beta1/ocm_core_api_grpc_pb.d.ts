// package: cs3.ocm.core.v1beta1
// file: cs3/ocm/core/v1beta1/ocm_core_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_ocm_core_v1beta1_ocm_core_api_pb from '../../../../cs3/ocm/core/v1beta1/ocm_core_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_core_v1beta1_resources_pb from '../../../../cs3/ocm/core/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IOcmCoreAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOCMCoreShare: IOcmCoreAPIService_ICreateOCMCoreShare;
}

interface IOcmCoreAPIService_ICreateOCMCoreShare extends grpc.MethodDefinition<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse> {
  path: '/cs3.ocm.core.v1beta1.OcmCoreAPI/CreateOCMCoreShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
}

export const OcmCoreAPIService: IOcmCoreAPIService;
export interface IOcmCoreAPIServer extends grpc.UntypedServiceImplementation {
  createOCMCoreShare: grpc.handleUnaryCall<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
}

export interface IOcmCoreAPIClient {
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
}

export class OcmCoreAPIClient extends grpc.Client implements IOcmCoreAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
}

