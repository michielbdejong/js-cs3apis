// package: cs3.sharing.ocm.v1beta1
// file: cs3/sharing/ocm/v1beta1/ocm_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_sharing_ocm_v1beta1_ocm_api_pb from '../../../../cs3/sharing/ocm/v1beta1/ocm_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_ocm_v1beta1_resources_pb from '../../../../cs3/sharing/ocm/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

interface IOcmAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createOCMShare: IOcmAPIService_ICreateOCMShare;
  removeOCMShare: IOcmAPIService_IRemoveOCMShare;
  getOCMShare: IOcmAPIService_IGetOCMShare;
  listOCMShares: IOcmAPIService_IListOCMShares;
  updateOCMShare: IOcmAPIService_IUpdateOCMShare;
  listReceivedOCMShares: IOcmAPIService_IListReceivedOCMShares;
  updateReceivedOCMShare: IOcmAPIService_IUpdateReceivedOCMShare;
  getReceivedOCMShare: IOcmAPIService_IGetReceivedOCMShare;
}

interface IOcmAPIService_ICreateOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/CreateOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
}

interface IOcmAPIService_IRemoveOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/RemoveOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
}

interface IOcmAPIService_IGetOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/GetOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
}

interface IOcmAPIService_IListOCMShares extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/ListOCMShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
}

interface IOcmAPIService_IUpdateOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
}

interface IOcmAPIService_IListReceivedOCMShares extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/ListReceivedOCMShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
}

interface IOcmAPIService_IUpdateReceivedOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/UpdateReceivedOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
}

interface IOcmAPIService_IGetReceivedOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse> {
  path: '/cs3.sharing.ocm.v1beta1.OcmAPI/GetReceivedOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
}

export const OcmAPIService: IOcmAPIService;
export interface IOcmAPIServer extends grpc.UntypedServiceImplementation {
  createOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
  removeOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
  getOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
  listOCMShares: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
  updateOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
  listReceivedOCMShares: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
  updateReceivedOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
  getReceivedOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
}

export interface IOcmAPIClient {
  createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
}

export class OcmAPIClient extends grpc.Client implements IOcmAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  public removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  public removeOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse) => void): grpc.ClientUnaryCall;
  public listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public listOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public updateOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse) => void): grpc.ClientUnaryCall;
  public listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public listReceivedOCMShares(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedOCMShare(request: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse) => void): grpc.ClientUnaryCall;
}

