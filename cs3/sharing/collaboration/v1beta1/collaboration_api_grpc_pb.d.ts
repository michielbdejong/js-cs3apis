// package: cs3.sharing.collaboration.v1beta1
// file: cs3/sharing/collaboration/v1beta1/collaboration_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_sharing_collaboration_v1beta1_collaboration_api_pb from '../../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_collaboration_v1beta1_resources_pb from '../../../../cs3/sharing/collaboration/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';

interface ICollaborationAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createShare: ICollaborationAPIService_ICreateShare;
  removeShare: ICollaborationAPIService_IRemoveShare;
  getShare: ICollaborationAPIService_IGetShare;
  listShares: ICollaborationAPIService_IListShares;
  updateShare: ICollaborationAPIService_IUpdateShare;
  listReceivedShares: ICollaborationAPIService_IListReceivedShares;
  updateReceivedShare: ICollaborationAPIService_IUpdateReceivedShare;
  getReceivedShare: ICollaborationAPIService_IGetReceivedShare;
}

interface ICollaborationAPIService_ICreateShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/CreateShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
}

interface ICollaborationAPIService_IRemoveShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/RemoveShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
}

interface ICollaborationAPIService_IGetShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
}

interface ICollaborationAPIService_IListShares extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
}

interface ICollaborationAPIService_IUpdateShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
}

interface ICollaborationAPIService_IListReceivedShares extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/ListReceivedShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
}

interface ICollaborationAPIService_IUpdateReceivedShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/UpdateReceivedShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
}

interface ICollaborationAPIService_IGetReceivedShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse> {
  path: '/cs3.sharing.collaboration.v1beta1.CollaborationAPI/GetReceivedShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
}

export const CollaborationAPIService: ICollaborationAPIService;
export interface ICollaborationAPIServer extends grpc.UntypedServiceImplementation {
  createShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
  removeShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
  getShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
  listShares: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
  updateShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
  listReceivedShares: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
  updateReceivedShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
  getReceivedShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
}

export interface ICollaborationAPIClient {
  createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
  getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
}

export class CollaborationAPIClient extends grpc.Client implements ICollaborationAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  public createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  public createShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse) => void): grpc.ClientUnaryCall;
  public removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  public removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  public removeShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse) => void): grpc.ClientUnaryCall;
  public getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  public getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  public getShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse) => void): grpc.ClientUnaryCall;
  public listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  public listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  public listShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse) => void): grpc.ClientUnaryCall;
  public updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  public updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  public updateShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse) => void): grpc.ClientUnaryCall;
  public listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  public listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  public listReceivedShares(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  public updateReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
  public getReceivedShare(request: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse) => void): grpc.ClientUnaryCall;
}

