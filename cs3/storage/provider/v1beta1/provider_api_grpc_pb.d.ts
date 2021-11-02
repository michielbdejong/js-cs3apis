// package: cs3.storage.provider.v1beta1
// file: cs3/storage/provider/v1beta1/provider_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_storage_provider_v1beta1_provider_api_pb from '../../../../cs3/storage/provider/v1beta1/provider_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_types_v1beta1_types_pb from '../../../../cs3/types/v1beta1/types_pb';

interface IProviderAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  addGrant: IProviderAPIService_IAddGrant;
  createContainer: IProviderAPIService_ICreateContainer;
  delete: IProviderAPIService_IDelete;
  denyGrant: IProviderAPIService_IDenyGrant;
  getPath: IProviderAPIService_IGetPath;
  getQuota: IProviderAPIService_IGetQuota;
  initiateFileDownload: IProviderAPIService_IInitiateFileDownload;
  initiateFileUpload: IProviderAPIService_IInitiateFileUpload;
  listGrants: IProviderAPIService_IListGrants;
  listContainerStream: IProviderAPIService_IListContainerStream;
  listContainer: IProviderAPIService_IListContainer;
  listFileVersions: IProviderAPIService_IListFileVersions;
  listRecycleStream: IProviderAPIService_IListRecycleStream;
  listRecycle: IProviderAPIService_IListRecycle;
  move: IProviderAPIService_IMove;
  removeGrant: IProviderAPIService_IRemoveGrant;
  purgeRecycle: IProviderAPIService_IPurgeRecycle;
  restoreFileVersion: IProviderAPIService_IRestoreFileVersion;
  restoreRecycleItem: IProviderAPIService_IRestoreRecycleItem;
  stat: IProviderAPIService_IStat;
  updateGrant: IProviderAPIService_IUpdateGrant;
  createSymlink: IProviderAPIService_ICreateSymlink;
  createReference: IProviderAPIService_ICreateReference;
  setArbitraryMetadata: IProviderAPIService_ISetArbitraryMetadata;
  unsetArbitraryMetadata: IProviderAPIService_IUnsetArbitraryMetadata;
  createHome: IProviderAPIService_ICreateHome;
  getHome: IProviderAPIService_IGetHome;
  createStorageSpace: IProviderAPIService_ICreateStorageSpace;
  listStorageSpaces: IProviderAPIService_IListStorageSpaces;
  updateStorageSpace: IProviderAPIService_IUpdateStorageSpace;
  deleteStorageSpace: IProviderAPIService_IDeleteStorageSpace;
}

interface IProviderAPIService_IAddGrant extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/AddGrant'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse>;
}

interface IProviderAPIService_ICreateContainer extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateContainer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
}

interface IProviderAPIService_IDelete extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/Delete'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
}

interface IProviderAPIService_IDenyGrant extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/DenyGrant'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse>;
}

interface IProviderAPIService_IGetPath extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetPath'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
}

interface IProviderAPIService_IGetQuota extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetQuota'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
}

interface IProviderAPIService_IInitiateFileDownload extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileDownload'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse>;
}

interface IProviderAPIService_IInitiateFileUpload extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/InitiateFileUpload'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse>;
}

interface IProviderAPIService_IListGrants extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListGrants'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse>;
}

interface IProviderAPIService_IListContainerStream extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainerStream'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
}

interface IProviderAPIService_IListContainer extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListContainer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
}

interface IProviderAPIService_IListFileVersions extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListFileVersions'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
}

interface IProviderAPIService_IListRecycleStream extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycleStream'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
}

interface IProviderAPIService_IListRecycle extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListRecycle'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
}

interface IProviderAPIService_IMove extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/Move'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
}

interface IProviderAPIService_IRemoveGrant extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/RemoveGrant'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse>;
}

interface IProviderAPIService_IPurgeRecycle extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/PurgeRecycle'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
}

interface IProviderAPIService_IRestoreFileVersion extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreFileVersion'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
}

interface IProviderAPIService_IRestoreRecycleItem extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/RestoreRecycleItem'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
}

interface IProviderAPIService_IStat extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, cs3_storage_provider_v1beta1_provider_api_pb.StatResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/Stat'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
}

interface IProviderAPIService_IUpdateGrant extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateGrant'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse>;
}

interface IProviderAPIService_ICreateSymlink extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateSymlink'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
}

interface IProviderAPIService_ICreateReference extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateReference'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse>;
}

interface IProviderAPIService_ISetArbitraryMetadata extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/SetArbitraryMetadata'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
}

interface IProviderAPIService_IUnsetArbitraryMetadata extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/UnsetArbitraryMetadata'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
}

interface IProviderAPIService_ICreateHome extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateHome'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
}

interface IProviderAPIService_IGetHome extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/GetHome'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
}

interface IProviderAPIService_ICreateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/CreateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
}

interface IProviderAPIService_IListStorageSpaces extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/ListStorageSpaces'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
}

interface IProviderAPIService_IUpdateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/UpdateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
}

interface IProviderAPIService_IDeleteStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse> {
  path: '/cs3.storage.provider.v1beta1.ProviderAPI/DeleteStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
}

export const ProviderAPIService: IProviderAPIService;
export interface IProviderAPIServer extends grpc.UntypedServiceImplementation {
  addGrant: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse>;
  createContainer: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
  delete: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
  denyGrant: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse>;
  getPath: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
  getQuota: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
  initiateFileDownload: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse>;
  initiateFileUpload: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse>;
  listGrants: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse>;
  listContainerStream: grpc.handleServerStreamingCall<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainer: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
  listFileVersions: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
  listRecycleStream: grpc.handleServerStreamingCall<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycle: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
  move: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
  removeGrant: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse>;
  purgeRecycle: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
  restoreFileVersion: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
  restoreRecycleItem: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
  stat: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
  updateGrant: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse>;
  createSymlink: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
  createReference: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse>;
  setArbitraryMetadata: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
  unsetArbitraryMetadata: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
  createHome: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
  getHome: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
  createStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
  listStorageSpaces: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
  updateStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
  deleteStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
}

export interface IProviderAPIClient {
  addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listRecycleStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycleStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
}

export class ProviderAPIClient extends grpc.Client implements IProviderAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  public addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  public addGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.AddGrantResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  public denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  public denyGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DenyGrantResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  public listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  public listGrants(request: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListGrantsResponse) => void): grpc.ClientUnaryCall;
  public listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  public listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listRecycleStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  public listRecycleStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  public listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public listRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  public removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  public removeGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RemoveGrantResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  public updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  public updateGrant(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateGrantResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  public createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  public createReference(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateReferenceResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public createStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public listStorageSpaces(request: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public updateStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
  public deleteStorageSpace(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse) => void): grpc.ClientUnaryCall;
}

