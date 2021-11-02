// package: cs3.ocm.invite.v1beta1
// file: cs3/ocm/invite/v1beta1/invite_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_ocm_invite_v1beta1_invite_api_pb from '../../../../cs3/ocm/invite/v1beta1/invite_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_ocm_invite_v1beta1_resources_pb from '../../../../cs3/ocm/invite/v1beta1/resources_pb';
import * as cs3_ocm_provider_v1beta1_resources_pb from '../../../../cs3/ocm/provider/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IInviteAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateInviteToken: IInviteAPIService_IGenerateInviteToken;
  forwardInvite: IInviteAPIService_IForwardInvite;
  acceptInvite: IInviteAPIService_IAcceptInvite;
  getAcceptedUser: IInviteAPIService_IGetAcceptedUser;
  findAcceptedUsers: IInviteAPIService_IFindAcceptedUsers;
}

interface IInviteAPIService_IGenerateInviteToken extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse> {
  path: '/cs3.ocm.invite.v1beta1.InviteAPI/GenerateInviteToken'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
}

interface IInviteAPIService_IForwardInvite extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse> {
  path: '/cs3.ocm.invite.v1beta1.InviteAPI/ForwardInvite'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
}

interface IInviteAPIService_IAcceptInvite extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse> {
  path: '/cs3.ocm.invite.v1beta1.InviteAPI/AcceptInvite'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
}

interface IInviteAPIService_IGetAcceptedUser extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse> {
  path: '/cs3.ocm.invite.v1beta1.InviteAPI/GetAcceptedUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
}

interface IInviteAPIService_IFindAcceptedUsers extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse> {
  path: '/cs3.ocm.invite.v1beta1.InviteAPI/FindAcceptedUsers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
}

export const InviteAPIService: IInviteAPIService;
export interface IInviteAPIServer extends grpc.UntypedServiceImplementation {
  generateInviteToken: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
  forwardInvite: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
  acceptInvite: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
  getAcceptedUser: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
  findAcceptedUsers: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
}

export interface IInviteAPIClient {
  generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
  findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
  findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
}

export class InviteAPIClient extends grpc.Client implements IInviteAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  public generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  public generateInviteToken(request: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse) => void): grpc.ClientUnaryCall;
  public forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  public forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  public forwardInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse) => void): grpc.ClientUnaryCall;
  public acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  public acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  public acceptInvite(request: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse) => void): grpc.ClientUnaryCall;
  public getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  public getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  public getAcceptedUser(request: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse) => void): grpc.ClientUnaryCall;
  public findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
  public findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
  public findAcceptedUsers(request: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse) => void): grpc.ClientUnaryCall;
}

