// package: cs3.identity.group.v1beta1
// file: cs3/identity/group/v1beta1/group_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_identity_group_v1beta1_group_api_pb from '../../../../cs3/identity/group/v1beta1/group_api_pb';
import * as cs3_identity_group_v1beta1_resources_pb from '../../../../cs3/identity/group/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IGroupAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGroup: IGroupAPIService_IGetGroup;
  getGroupByClaim: IGroupAPIService_IGetGroupByClaim;
  getMembers: IGroupAPIService_IGetMembers;
  hasMember: IGroupAPIService_IHasMember;
  findGroups: IGroupAPIService_IFindGroups;
}

interface IGroupAPIService_IGetGroup extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse> {
  path: '/cs3.identity.group.v1beta1.GroupAPI/GetGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
}

interface IGroupAPIService_IGetGroupByClaim extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse> {
  path: '/cs3.identity.group.v1beta1.GroupAPI/GetGroupByClaim'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
}

interface IGroupAPIService_IGetMembers extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse> {
  path: '/cs3.identity.group.v1beta1.GroupAPI/GetMembers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
}

interface IGroupAPIService_IHasMember extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse> {
  path: '/cs3.identity.group.v1beta1.GroupAPI/HasMember'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
}

interface IGroupAPIService_IFindGroups extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse> {
  path: '/cs3.identity.group.v1beta1.GroupAPI/FindGroups'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
}

export const GroupAPIService: IGroupAPIService;
export interface IGroupAPIServer extends grpc.UntypedServiceImplementation {
  getGroup: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
  getGroupByClaim: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
  getMembers: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
  hasMember: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
  findGroups: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
}

export interface IGroupAPIClient {
  getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
  findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
  findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
}

export class GroupAPIClient extends grpc.Client implements IGroupAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  public getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  public getGroup(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse) => void): grpc.ClientUnaryCall;
  public getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  public getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  public getGroupByClaim(request: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse) => void): grpc.ClientUnaryCall;
  public getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  public getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  public getMembers(request: cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse) => void): grpc.ClientUnaryCall;
  public hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  public hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  public hasMember(request: cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse) => void): grpc.ClientUnaryCall;
  public findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
  public findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
  public findGroups(request: cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse) => void): grpc.ClientUnaryCall;
}

