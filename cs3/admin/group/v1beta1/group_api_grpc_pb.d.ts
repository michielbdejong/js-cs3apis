// package: cs3.admin.group.v1beta1
// file: cs3/admin/group/v1beta1/group_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_admin_group_v1beta1_group_api_pb from '../../../../cs3/admin/group/v1beta1/group_api_pb';
import * as cs3_identity_group_v1beta1_resources_pb from '../../../../cs3/identity/group/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IGroupAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createGroup: IGroupAPIService_ICreateGroup;
  deleteGroup: IGroupAPIService_IDeleteGroup;
  addUserToGroup: IGroupAPIService_IAddUserToGroup;
  removeUserFromGroup: IGroupAPIService_IRemoveUserFromGroup;
}

interface IGroupAPIService_ICreateGroup extends grpc.MethodDefinition<cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse> {
  path: '/cs3.admin.group.v1beta1.GroupAPI/CreateGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest>;
  responseSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse>;
}

interface IGroupAPIService_IDeleteGroup extends grpc.MethodDefinition<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse> {
  path: '/cs3.admin.group.v1beta1.GroupAPI/DeleteGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest>;
  responseSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse>;
}

interface IGroupAPIService_IAddUserToGroup extends grpc.MethodDefinition<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse> {
  path: '/cs3.admin.group.v1beta1.GroupAPI/AddUserToGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest>;
  responseSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse>;
}

interface IGroupAPIService_IRemoveUserFromGroup extends grpc.MethodDefinition<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse> {
  path: '/cs3.admin.group.v1beta1.GroupAPI/RemoveUserFromGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest>;
  responseSerialize: grpc.serialize<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse>;
}

export const GroupAPIService: IGroupAPIService;
export interface IGroupAPIServer extends grpc.UntypedServiceImplementation {
  createGroup: grpc.handleUnaryCall<cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse>;
  deleteGroup: grpc.handleUnaryCall<cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse>;
  addUserToGroup: grpc.handleUnaryCall<cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse>;
  removeUserFromGroup: grpc.handleUnaryCall<cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse>;
}

export interface IGroupAPIClient {
  createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
  removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
  removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
}

export class GroupAPIClient extends grpc.Client implements IGroupAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  public createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  public createGroup(request: cs3_admin_group_v1beta1_group_api_pb.CreateGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.CreateGroupResponse) => void): grpc.ClientUnaryCall;
  public deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  public deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  public deleteGroup(request: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.DeleteGroupResponse) => void): grpc.ClientUnaryCall;
  public addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  public addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  public addUserToGroup(request: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.AddUserToGroupResponse) => void): grpc.ClientUnaryCall;
  public removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
  public removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
  public removeUserFromGroup(request: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_admin_group_v1beta1_group_api_pb.RemoveUserFromGroupResponse) => void): grpc.ClientUnaryCall;
}

