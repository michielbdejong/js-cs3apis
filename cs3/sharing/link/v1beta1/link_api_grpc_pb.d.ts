// package: cs3.sharing.link.v1beta1
// file: cs3/sharing/link/v1beta1/link_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_sharing_link_v1beta1_link_api_pb from '../../../../cs3/sharing/link/v1beta1/link_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_link_v1beta1_resources_pb from '../../../../cs3/sharing/link/v1beta1/resources_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface ILinkAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createPublicShare: ILinkAPIService_ICreatePublicShare;
  removePublicShare: ILinkAPIService_IRemovePublicShare;
  getPublicShare: ILinkAPIService_IGetPublicShare;
  getPublicShareByToken: ILinkAPIService_IGetPublicShareByToken;
  listPublicShares: ILinkAPIService_IListPublicShares;
  updatePublicShare: ILinkAPIService_IUpdatePublicShare;
}

interface ILinkAPIService_ICreatePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/CreatePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
}

interface ILinkAPIService_IRemovePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/RemovePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
}

interface ILinkAPIService_IGetPublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
}

interface ILinkAPIService_IGetPublicShareByToken extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/GetPublicShareByToken'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
}

interface ILinkAPIService_IListPublicShares extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/ListPublicShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
}

interface ILinkAPIService_IUpdatePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse> {
  path: '/cs3.sharing.link.v1beta1.LinkAPI/UpdatePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
}

export const LinkAPIService: ILinkAPIService;
export interface ILinkAPIServer extends grpc.UntypedServiceImplementation {
  createPublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
  removePublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
  getPublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
  getPublicShareByToken: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
  listPublicShares: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
  updatePublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
}

export interface ILinkAPIClient {
  createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
  updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
  updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
}

export class LinkAPIClient extends grpc.Client implements ILinkAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  public createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  public createPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse) => void): grpc.ClientUnaryCall;
  public removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  public removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  public removePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse) => void): grpc.ClientUnaryCall;
  public getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  public getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  public getPublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse) => void): grpc.ClientUnaryCall;
  public getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  public getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  public getPublicShareByToken(request: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse) => void): grpc.ClientUnaryCall;
  public listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  public listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  public listPublicShares(request: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse) => void): grpc.ClientUnaryCall;
  public updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
  public updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
  public updatePublicShare(request: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse) => void): grpc.ClientUnaryCall;
}

