// package: cs3.identity.user.v1beta1
// file: cs3/identity/user/v1beta1/user_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_identity_user_v1beta1_user_api_pb from '../../../../cs3/identity/user/v1beta1/user_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IUserAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUser: IUserAPIService_IGetUser;
  getUserByClaim: IUserAPIService_IGetUserByClaim;
  getUserGroups: IUserAPIService_IGetUserGroups;
  findUsers: IUserAPIService_IFindUsers;
}

interface IUserAPIService_IGetUser extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserResponse> {
  path: '/cs3.identity.user.v1beta1.UserAPI/GetUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
}

interface IUserAPIService_IGetUserByClaim extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse> {
  path: '/cs3.identity.user.v1beta1.UserAPI/GetUserByClaim'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
}

interface IUserAPIService_IGetUserGroups extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse> {
  path: '/cs3.identity.user.v1beta1.UserAPI/GetUserGroups'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
}

interface IUserAPIService_IFindUsers extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse> {
  path: '/cs3.identity.user.v1beta1.UserAPI/FindUsers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
}

export const UserAPIService: IUserAPIService;
export interface IUserAPIServer extends grpc.UntypedServiceImplementation {
  getUser: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
  getUserByClaim: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
  getUserGroups: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
  findUsers: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
}

export interface IUserAPIClient {
  getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
  findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
  findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
}

export class UserAPIClient extends grpc.Client implements IUserAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  public getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  public getUser(request: cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserResponse) => void): grpc.ClientUnaryCall;
  public getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  public getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  public getUserByClaim(request: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse) => void): grpc.ClientUnaryCall;
  public getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  public getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  public getUserGroups(request: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse) => void): grpc.ClientUnaryCall;
  public findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
  public findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
  public findUsers(request: cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse) => void): grpc.ClientUnaryCall;
}

