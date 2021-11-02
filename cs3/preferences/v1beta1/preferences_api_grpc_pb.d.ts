// package: cs3.preferences.v1beta1
// file: cs3/preferences/v1beta1/preferences_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_preferences_v1beta1_preferences_api_pb from '../../../cs3/preferences/v1beta1/preferences_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';

interface IPreferencesAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  setKey: IPreferencesAPIService_ISetKey;
  getKey: IPreferencesAPIService_IGetKey;
}

interface IPreferencesAPIService_ISetKey extends grpc.MethodDefinition<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse> {
  path: '/cs3.preferences.v1beta1.PreferencesAPI/SetKey'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest>;
  requestDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest>;
  responseSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
  responseDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
}

interface IPreferencesAPIService_IGetKey extends grpc.MethodDefinition<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse> {
  path: '/cs3.preferences.v1beta1.PreferencesAPI/GetKey'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest>;
  requestDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest>;
  responseSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
  responseDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
}

export const PreferencesAPIService: IPreferencesAPIService;
export interface IPreferencesAPIServer extends grpc.UntypedServiceImplementation {
  setKey: grpc.handleUnaryCall<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
  getKey: grpc.handleUnaryCall<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
}

export interface IPreferencesAPIClient {
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
}

export class PreferencesAPIClient extends grpc.Client implements IPreferencesAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
}

