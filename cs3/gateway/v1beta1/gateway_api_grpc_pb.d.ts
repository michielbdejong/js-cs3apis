// package: cs3.gateway.v1beta1
// file: cs3/gateway/v1beta1/gateway_api.proto

import * as grpc from '@grpc/grpc-js';
import * as cs3_gateway_v1beta1_gateway_api_pb from '../../../cs3/gateway/v1beta1/gateway_api_pb';
import * as cs3_app_provider_v1beta1_provider_api_pb from '../../../cs3/app/provider/v1beta1/provider_api_pb';
import * as cs3_app_registry_v1beta1_registry_api_pb from '../../../cs3/app/registry/v1beta1/registry_api_pb';
import * as cs3_auth_applications_v1beta1_applications_api_pb from '../../../cs3/auth/applications/v1beta1/applications_api_pb';
import * as cs3_auth_registry_v1beta1_registry_api_pb from '../../../cs3/auth/registry/v1beta1/registry_api_pb';
import * as cs3_gateway_v1beta1_resources_pb from '../../../cs3/gateway/v1beta1/resources_pb';
import * as cs3_identity_group_v1beta1_group_api_pb from '../../../cs3/identity/group/v1beta1/group_api_pb';
import * as cs3_identity_user_v1beta1_resources_pb from '../../../cs3/identity/user/v1beta1/resources_pb';
import * as cs3_identity_user_v1beta1_user_api_pb from '../../../cs3/identity/user/v1beta1/user_api_pb';
import * as cs3_ocm_core_v1beta1_ocm_core_api_pb from '../../../cs3/ocm/core/v1beta1/ocm_core_api_pb';
import * as cs3_ocm_invite_v1beta1_invite_api_pb from '../../../cs3/ocm/invite/v1beta1/invite_api_pb';
import * as cs3_ocm_provider_v1beta1_provider_api_pb from '../../../cs3/ocm/provider/v1beta1/provider_api_pb';
import * as cs3_preferences_v1beta1_preferences_api_pb from '../../../cs3/preferences/v1beta1/preferences_api_pb';
import * as cs3_rpc_v1beta1_status_pb from '../../../cs3/rpc/v1beta1/status_pb';
import * as cs3_sharing_collaboration_v1beta1_collaboration_api_pb from '../../../cs3/sharing/collaboration/v1beta1/collaboration_api_pb';
import * as cs3_sharing_link_v1beta1_link_api_pb from '../../../cs3/sharing/link/v1beta1/link_api_pb';
import * as cs3_sharing_ocm_v1beta1_ocm_api_pb from '../../../cs3/sharing/ocm/v1beta1/ocm_api_pb';
import * as cs3_storage_provider_v1beta1_provider_api_pb from '../../../cs3/storage/provider/v1beta1/provider_api_pb';
import * as cs3_storage_provider_v1beta1_resources_pb from '../../../cs3/storage/provider/v1beta1/resources_pb';
import * as cs3_tx_v1beta1_tx_api_pb from '../../../cs3/tx/v1beta1/tx_api_pb';
import * as cs3_types_v1beta1_types_pb from '../../../cs3/types/v1beta1/types_pb';

interface IGatewayAPIService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  authenticate: IGatewayAPIService_IAuthenticate;
  whoAmI: IGatewayAPIService_IWhoAmI;
  generateAppPassword: IGatewayAPIService_IGenerateAppPassword;
  listAppPasswords: IGatewayAPIService_IListAppPasswords;
  invalidateAppPassword: IGatewayAPIService_IInvalidateAppPassword;
  getAppPassword: IGatewayAPIService_IGetAppPassword;
  createContainer: IGatewayAPIService_ICreateContainer;
  delete: IGatewayAPIService_IDelete;
  getPath: IGatewayAPIService_IGetPath;
  getQuota: IGatewayAPIService_IGetQuota;
  initiateFileDownload: IGatewayAPIService_IInitiateFileDownload;
  initiateFileUpload: IGatewayAPIService_IInitiateFileUpload;
  listContainerStream: IGatewayAPIService_IListContainerStream;
  listContainer: IGatewayAPIService_IListContainer;
  listFileVersions: IGatewayAPIService_IListFileVersions;
  listRecycleStream: IGatewayAPIService_IListRecycleStream;
  listRecycle: IGatewayAPIService_IListRecycle;
  move: IGatewayAPIService_IMove;
  purgeRecycle: IGatewayAPIService_IPurgeRecycle;
  restoreFileVersion: IGatewayAPIService_IRestoreFileVersion;
  restoreRecycleItem: IGatewayAPIService_IRestoreRecycleItem;
  stat: IGatewayAPIService_IStat;
  createSymlink: IGatewayAPIService_ICreateSymlink;
  setArbitraryMetadata: IGatewayAPIService_ISetArbitraryMetadata;
  unsetArbitraryMetadata: IGatewayAPIService_IUnsetArbitraryMetadata;
  createHome: IGatewayAPIService_ICreateHome;
  createStorageSpace: IGatewayAPIService_ICreateStorageSpace;
  listStorageSpaces: IGatewayAPIService_IListStorageSpaces;
  updateStorageSpace: IGatewayAPIService_IUpdateStorageSpace;
  deleteStorageSpace: IGatewayAPIService_IDeleteStorageSpace;
  openInApp: IGatewayAPIService_IOpenInApp;
  createShare: IGatewayAPIService_ICreateShare;
  removeShare: IGatewayAPIService_IRemoveShare;
  getShare: IGatewayAPIService_IGetShare;
  listShares: IGatewayAPIService_IListShares;
  updateShare: IGatewayAPIService_IUpdateShare;
  listReceivedShares: IGatewayAPIService_IListReceivedShares;
  updateReceivedShare: IGatewayAPIService_IUpdateReceivedShare;
  getReceivedShare: IGatewayAPIService_IGetReceivedShare;
  setKey: IGatewayAPIService_ISetKey;
  getKey: IGatewayAPIService_IGetKey;
  createPublicShare: IGatewayAPIService_ICreatePublicShare;
  removePublicShare: IGatewayAPIService_IRemovePublicShare;
  getPublicShare: IGatewayAPIService_IGetPublicShare;
  getPublicShareByToken: IGatewayAPIService_IGetPublicShareByToken;
  listPublicShares: IGatewayAPIService_IListPublicShares;
  updatePublicShare: IGatewayAPIService_IUpdatePublicShare;
  createOCMShare: IGatewayAPIService_ICreateOCMShare;
  removeOCMShare: IGatewayAPIService_IRemoveOCMShare;
  getOCMShare: IGatewayAPIService_IGetOCMShare;
  listOCMShares: IGatewayAPIService_IListOCMShares;
  updateOCMShare: IGatewayAPIService_IUpdateOCMShare;
  listReceivedOCMShares: IGatewayAPIService_IListReceivedOCMShares;
  updateReceivedOCMShare: IGatewayAPIService_IUpdateReceivedOCMShare;
  getReceivedOCMShare: IGatewayAPIService_IGetReceivedOCMShare;
  getAppProviders: IGatewayAPIService_IGetAppProviders;
  addAppProvider: IGatewayAPIService_IAddAppProvider;
  listAppProviders: IGatewayAPIService_IListAppProviders;
  listSupportedMimeTypes: IGatewayAPIService_IListSupportedMimeTypes;
  getDefaultAppProviderForMimeType: IGatewayAPIService_IGetDefaultAppProviderForMimeType;
  setDefaultAppProviderForMimeType: IGatewayAPIService_ISetDefaultAppProviderForMimeType;
  getUser: IGatewayAPIService_IGetUser;
  getUserByClaim: IGatewayAPIService_IGetUserByClaim;
  getUserGroups: IGatewayAPIService_IGetUserGroups;
  findUsers: IGatewayAPIService_IFindUsers;
  getGroup: IGatewayAPIService_IGetGroup;
  getGroupByClaim: IGatewayAPIService_IGetGroupByClaim;
  getMembers: IGatewayAPIService_IGetMembers;
  hasMember: IGatewayAPIService_IHasMember;
  findGroups: IGatewayAPIService_IFindGroups;
  listAuthProviders: IGatewayAPIService_IListAuthProviders;
  getHome: IGatewayAPIService_IGetHome;
  generateInviteToken: IGatewayAPIService_IGenerateInviteToken;
  forwardInvite: IGatewayAPIService_IForwardInvite;
  acceptInvite: IGatewayAPIService_IAcceptInvite;
  getAcceptedUser: IGatewayAPIService_IGetAcceptedUser;
  findAcceptedUsers: IGatewayAPIService_IFindAcceptedUsers;
  isProviderAllowed: IGatewayAPIService_IIsProviderAllowed;
  getInfoByDomain: IGatewayAPIService_IGetInfoByDomain;
  listAllProviders: IGatewayAPIService_IListAllProviders;
  createOCMCoreShare: IGatewayAPIService_ICreateOCMCoreShare;
  createTransfer: IGatewayAPIService_ICreateTransfer;
  getTransferStatus: IGatewayAPIService_IGetTransferStatus;
  cancelTransfer: IGatewayAPIService_ICancelTransfer;
}

interface IGatewayAPIService_IAuthenticate extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/Authenticate'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest>;
  responseSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse>;
  responseDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse>;
}

interface IGatewayAPIService_IWhoAmI extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/WhoAmI'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest>;
  responseSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse>;
  responseDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse>;
}

interface IGatewayAPIService_IGenerateAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GenerateAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
}

interface IGatewayAPIService_IListAppPasswords extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListAppPasswords'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
}

interface IGatewayAPIService_IInvalidateAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/InvalidateAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
}

interface IGatewayAPIService_IGetAppPassword extends grpc.MethodDefinition<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetAppPassword'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest>;
  responseSerialize: grpc.serialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
  responseDeserialize: grpc.deserialize<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
}

interface IGatewayAPIService_ICreateContainer extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateContainer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
}

interface IGatewayAPIService_IDelete extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/Delete'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
}

interface IGatewayAPIService_IGetPath extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetPath'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
}

interface IGatewayAPIService_IGetQuota extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetQuota'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
}

interface IGatewayAPIService_IInitiateFileDownload extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileDownload'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest>;
  responseSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse>;
  responseDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse>;
}

interface IGatewayAPIService_IInitiateFileUpload extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/InitiateFileUpload'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest>;
  responseSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse>;
  responseDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse>;
}

interface IGatewayAPIService_IListContainerStream extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListContainerStream'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
}

interface IGatewayAPIService_IListContainer extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListContainer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
}

interface IGatewayAPIService_IListFileVersions extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListFileVersions'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
}

interface IGatewayAPIService_IListRecycleStream extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListRecycleStream'
  requestStream: false
  responseStream: true
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
}

interface IGatewayAPIService_IListRecycle extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListRecycle'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
}

interface IGatewayAPIService_IMove extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/Move'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
}

interface IGatewayAPIService_IPurgeRecycle extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/PurgeRecycle'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
}

interface IGatewayAPIService_IRestoreFileVersion extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/RestoreFileVersion'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
}

interface IGatewayAPIService_IRestoreRecycleItem extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/RestoreRecycleItem'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
}

interface IGatewayAPIService_IStat extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, cs3_storage_provider_v1beta1_provider_api_pb.StatResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/Stat'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
}

interface IGatewayAPIService_ICreateSymlink extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateSymlink'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
}

interface IGatewayAPIService_ISetArbitraryMetadata extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/SetArbitraryMetadata'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
}

interface IGatewayAPIService_IUnsetArbitraryMetadata extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UnsetArbitraryMetadata'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
}

interface IGatewayAPIService_ICreateHome extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateHome'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
}

interface IGatewayAPIService_ICreateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
}

interface IGatewayAPIService_IListStorageSpaces extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListStorageSpaces'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
}

interface IGatewayAPIService_IUpdateStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
}

interface IGatewayAPIService_IDeleteStorageSpace extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/DeleteStorageSpace'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
}

interface IGatewayAPIService_IOpenInApp extends grpc.MethodDefinition<cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/OpenInApp'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest>;
  requestDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest>;
  responseSerialize: grpc.serialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
}

interface IGatewayAPIService_ICreateShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
}

interface IGatewayAPIService_IRemoveShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/RemoveShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
}

interface IGatewayAPIService_IGetShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
}

interface IGatewayAPIService_IListShares extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
}

interface IGatewayAPIService_IUpdateShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
}

interface IGatewayAPIService_IListReceivedShares extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
}

interface IGatewayAPIService_IUpdateReceivedShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
}

interface IGatewayAPIService_IGetReceivedShare extends grpc.MethodDefinition<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
}

interface IGatewayAPIService_ISetKey extends grpc.MethodDefinition<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/SetKey'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest>;
  requestDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest>;
  responseSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
  responseDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
}

interface IGatewayAPIService_IGetKey extends grpc.MethodDefinition<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetKey'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest>;
  requestDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest>;
  responseSerialize: grpc.serialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
  responseDeserialize: grpc.deserialize<cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
}

interface IGatewayAPIService_ICreatePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreatePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
}

interface IGatewayAPIService_IRemovePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/RemovePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
}

interface IGatewayAPIService_IGetPublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
}

interface IGatewayAPIService_IGetPublicShareByToken extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetPublicShareByToken'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
}

interface IGatewayAPIService_IListPublicShares extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListPublicShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
}

interface IGatewayAPIService_IUpdatePublicShare extends grpc.MethodDefinition<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdatePublicShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
}

interface IGatewayAPIService_ICreateOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
}

interface IGatewayAPIService_IRemoveOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/RemoveOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
}

interface IGatewayAPIService_IGetOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
}

interface IGatewayAPIService_IListOCMShares extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListOCMShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
}

interface IGatewayAPIService_IUpdateOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
}

interface IGatewayAPIService_IListReceivedOCMShares extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListReceivedOCMShares'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
}

interface IGatewayAPIService_IUpdateReceivedOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/UpdateReceivedOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
}

interface IGatewayAPIService_IGetReceivedOCMShare extends grpc.MethodDefinition<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetReceivedOCMShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest>;
  responseSerialize: grpc.serialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
}

interface IGatewayAPIService_IGetAppProviders extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetAppProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
}

interface IGatewayAPIService_IAddAppProvider extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/AddAppProvider'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
}

interface IGatewayAPIService_IListAppProviders extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListAppProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
}

interface IGatewayAPIService_IListSupportedMimeTypes extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListSupportedMimeTypes'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
}

interface IGatewayAPIService_IGetDefaultAppProviderForMimeType extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetDefaultAppProviderForMimeType'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
}

interface IGatewayAPIService_ISetDefaultAppProviderForMimeType extends grpc.MethodDefinition<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/SetDefaultAppProviderForMimeType'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest>;
  requestDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest>;
  responseSerialize: grpc.serialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
  responseDeserialize: grpc.deserialize<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
}

interface IGatewayAPIService_IGetUser extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
}

interface IGatewayAPIService_IGetUserByClaim extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetUserByClaim'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
}

interface IGatewayAPIService_IGetUserGroups extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetUserGroups'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
}

interface IGatewayAPIService_IFindUsers extends grpc.MethodDefinition<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/FindUsers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest>;
  responseSerialize: grpc.serialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
}

interface IGatewayAPIService_IGetGroup extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetGroup'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
}

interface IGatewayAPIService_IGetGroupByClaim extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetGroupByClaim'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
}

interface IGatewayAPIService_IGetMembers extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetMembers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
}

interface IGatewayAPIService_IHasMember extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/HasMember'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
}

interface IGatewayAPIService_IFindGroups extends grpc.MethodDefinition<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/FindGroups'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest>;
  requestDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest>;
  responseSerialize: grpc.serialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
  responseDeserialize: grpc.deserialize<cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
}

interface IGatewayAPIService_IListAuthProviders extends grpc.MethodDefinition<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListAuthProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse>;
}

interface IGatewayAPIService_IGetHome extends grpc.MethodDefinition<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetHome'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest>;
  requestDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest>;
  responseSerialize: grpc.serialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
  responseDeserialize: grpc.deserialize<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
}

interface IGatewayAPIService_IGenerateInviteToken extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GenerateInviteToken'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
}

interface IGatewayAPIService_IForwardInvite extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ForwardInvite'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
}

interface IGatewayAPIService_IAcceptInvite extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/AcceptInvite'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
}

interface IGatewayAPIService_IGetAcceptedUser extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetAcceptedUser'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
}

interface IGatewayAPIService_IFindAcceptedUsers extends grpc.MethodDefinition<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/FindAcceptedUsers'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
}

interface IGatewayAPIService_IIsProviderAllowed extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/IsProviderAllowed'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
}

interface IGatewayAPIService_IGetInfoByDomain extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetInfoByDomain'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
}

interface IGatewayAPIService_IListAllProviders extends grpc.MethodDefinition<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/ListAllProviders'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
}

interface IGatewayAPIService_ICreateOCMCoreShare extends grpc.MethodDefinition<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateOCMCoreShare'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest>;
  requestDeserialize: grpc.deserialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest>;
  responseSerialize: grpc.serialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
  responseDeserialize: grpc.deserialize<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
}

interface IGatewayAPIService_ICreateTransfer extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CreateTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse>;
}

interface IGatewayAPIService_IGetTransferStatus extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/GetTransferStatus'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
}

interface IGatewayAPIService_ICancelTransfer extends grpc.MethodDefinition<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse> {
  path: '/cs3.gateway.v1beta1.GatewayAPI/CancelTransfer'
  requestStream: false
  responseStream: false
  requestSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest>;
  requestDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest>;
  responseSerialize: grpc.serialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
  responseDeserialize: grpc.deserialize<cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
}

export const GatewayAPIService: IGatewayAPIService;
export interface IGatewayAPIServer extends grpc.UntypedServiceImplementation {
  authenticate: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse>;
  whoAmI: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse>;
  generateAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse>;
  listAppPasswords: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse>;
  invalidateAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse>;
  getAppPassword: grpc.handleUnaryCall<cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse>;
  createContainer: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse>;
  delete: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse>;
  getPath: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse>;
  getQuota: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse>;
  initiateFileDownload: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse>;
  initiateFileUpload: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse>;
  listContainerStream: grpc.handleServerStreamingCall<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainer: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse>;
  listFileVersions: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse>;
  listRecycleStream: grpc.handleServerStreamingCall<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycle: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse>;
  move: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse>;
  purgeRecycle: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse>;
  restoreFileVersion: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse>;
  restoreRecycleItem: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse>;
  stat: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, cs3_storage_provider_v1beta1_provider_api_pb.StatResponse>;
  createSymlink: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse>;
  setArbitraryMetadata: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse>;
  unsetArbitraryMetadata: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse>;
  createHome: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse>;
  createStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.CreateStorageSpaceResponse>;
  listStorageSpaces: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesRequest, cs3_storage_provider_v1beta1_provider_api_pb.ListStorageSpacesResponse>;
  updateStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.UpdateStorageSpaceResponse>;
  deleteStorageSpace: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceRequest, cs3_storage_provider_v1beta1_provider_api_pb.DeleteStorageSpaceResponse>;
  openInApp: grpc.handleUnaryCall<cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse>;
  createShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.CreateShareResponse>;
  removeShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.RemoveShareResponse>;
  getShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetShareResponse>;
  listShares: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListSharesResponse>;
  updateShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateShareResponse>;
  listReceivedShares: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.ListReceivedSharesResponse>;
  updateReceivedShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.UpdateReceivedShareResponse>;
  getReceivedShare: grpc.handleUnaryCall<cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareRequest, cs3_sharing_collaboration_v1beta1_collaboration_api_pb.GetReceivedShareResponse>;
  setKey: grpc.handleUnaryCall<cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse>;
  getKey: grpc.handleUnaryCall<cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse>;
  createPublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.CreatePublicShareResponse>;
  removePublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.RemovePublicShareResponse>;
  getPublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareResponse>;
  getPublicShareByToken: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenRequest, cs3_sharing_link_v1beta1_link_api_pb.GetPublicShareByTokenResponse>;
  listPublicShares: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesRequest, cs3_sharing_link_v1beta1_link_api_pb.ListPublicSharesResponse>;
  updatePublicShare: grpc.handleUnaryCall<cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareRequest, cs3_sharing_link_v1beta1_link_api_pb.UpdatePublicShareResponse>;
  createOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.CreateOCMShareResponse>;
  removeOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.RemoveOCMShareResponse>;
  getOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetOCMShareResponse>;
  listOCMShares: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListOCMSharesResponse>;
  updateOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateOCMShareResponse>;
  listReceivedOCMShares: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.ListReceivedOCMSharesResponse>;
  updateReceivedOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.UpdateReceivedOCMShareResponse>;
  getReceivedOCMShare: grpc.handleUnaryCall<cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareRequest, cs3_sharing_ocm_v1beta1_ocm_api_pb.GetReceivedOCMShareResponse>;
  getAppProviders: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse>;
  addAppProvider: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse>;
  listAppProviders: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse>;
  listSupportedMimeTypes: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse>;
  getDefaultAppProviderForMimeType: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse>;
  setDefaultAppProviderForMimeType: grpc.handleUnaryCall<cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse>;
  getUser: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserResponse>;
  getUserByClaim: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserByClaimResponse>;
  getUserGroups: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsRequest, cs3_identity_user_v1beta1_user_api_pb.GetUserGroupsResponse>;
  findUsers: grpc.handleUnaryCall<cs3_identity_user_v1beta1_user_api_pb.FindUsersRequest, cs3_identity_user_v1beta1_user_api_pb.FindUsersResponse>;
  getGroup: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetGroupRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupResponse>;
  getGroupByClaim: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimRequest, cs3_identity_group_v1beta1_group_api_pb.GetGroupByClaimResponse>;
  getMembers: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.GetMembersRequest, cs3_identity_group_v1beta1_group_api_pb.GetMembersResponse>;
  hasMember: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.HasMemberRequest, cs3_identity_group_v1beta1_group_api_pb.HasMemberResponse>;
  findGroups: grpc.handleUnaryCall<cs3_identity_group_v1beta1_group_api_pb.FindGroupsRequest, cs3_identity_group_v1beta1_group_api_pb.FindGroupsResponse>;
  listAuthProviders: grpc.handleUnaryCall<cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse>;
  getHome: grpc.handleUnaryCall<cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse>;
  generateInviteToken: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GenerateInviteTokenResponse>;
  forwardInvite: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.ForwardInviteResponse>;
  acceptInvite: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteRequest, cs3_ocm_invite_v1beta1_invite_api_pb.AcceptInviteResponse>;
  getAcceptedUser: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserRequest, cs3_ocm_invite_v1beta1_invite_api_pb.GetAcceptedUserResponse>;
  findAcceptedUsers: grpc.handleUnaryCall<cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersRequest, cs3_ocm_invite_v1beta1_invite_api_pb.FindAcceptedUsersResponse>;
  isProviderAllowed: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse>;
  getInfoByDomain: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse>;
  listAllProviders: grpc.handleUnaryCall<cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse>;
  createOCMCoreShare: grpc.handleUnaryCall<cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse>;
  createTransfer: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse>;
  getTransferStatus: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse>;
  cancelTransfer: grpc.handleUnaryCall<cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse>;
}

export interface IGatewayAPIClient {
  authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  listRecycleStream(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycleStream(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
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
  openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
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
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
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
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
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
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
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
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
}

export class GatewayAPIClient extends grpc.Client implements IGatewayAPIClient {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
  public authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  public authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  public authenticate(request: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.AuthenticateResponse) => void): grpc.ClientUnaryCall;
  public whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  public whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  public whoAmI(request: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.WhoAmIResponse) => void): grpc.ClientUnaryCall;
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public generateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GenerateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public listAppPasswords(request: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.ListAppPasswordsResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public invalidateAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.InvalidateAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public getAppPassword(request: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_auth_applications_v1beta1_applications_api_pb.GetAppPasswordResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public createContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateContainerResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public delete(request: cs3_storage_provider_v1beta1_provider_api_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getPath(request: cs3_storage_provider_v1beta1_provider_api_pb.GetPathRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetPathResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public getQuota(request: cs3_gateway_v1beta1_gateway_api_pb.GetQuotaRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetQuotaResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileDownload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileDownloadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public initiateFileUpload(request: cs3_storage_provider_v1beta1_provider_api_pb.InitiateFileUploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.InitiateFileUploadResponse) => void): grpc.ClientUnaryCall;
  public listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  public listContainerStream(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListContainerStreamResponse>;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listContainer(request: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListContainerResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listFileVersions(request: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListFileVersionsResponse) => void): grpc.ClientUnaryCall;
  public listRecycleStream(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  public listRecycleStream(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleStreamRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleStreamResponse>;
  public listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public listRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.ListRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.ListRecycleResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public move(request: cs3_storage_provider_v1beta1_provider_api_pb.MoveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.MoveResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public purgeRecycle(request: cs3_gateway_v1beta1_gateway_api_pb.PurgeRecycleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.PurgeRecycleResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreFileVersion(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreFileVersionResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public restoreRecycleItem(request: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.RestoreRecycleItemResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public stat(request: cs3_storage_provider_v1beta1_provider_api_pb.StatRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.StatResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public createSymlink(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateSymlinkResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public setArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.SetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public unsetArbitraryMetadata(request: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.UnsetArbitraryMetadataResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
  public createHome(request: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.CreateHomeResponse) => void): grpc.ClientUnaryCall;
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
  public openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  public openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
  public openInApp(request: cs3_gateway_v1beta1_gateway_api_pb.OpenInAppRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_provider_v1beta1_provider_api_pb.OpenInAppResponse) => void): grpc.ClientUnaryCall;
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
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public setKey(request: cs3_preferences_v1beta1_preferences_api_pb.SetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.SetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
  public getKey(request: cs3_preferences_v1beta1_preferences_api_pb.GetKeyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_preferences_v1beta1_preferences_api_pb.GetKeyResponse) => void): grpc.ClientUnaryCall;
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
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public getAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public addAppProvider(request: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.AddAppProviderResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAppProviders(request: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListAppProvidersResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public listSupportedMimeTypes(request: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.ListSupportedMimeTypesResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public getDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.GetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
  public setDefaultAppProviderForMimeType(request: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_app_registry_v1beta1_registry_api_pb.SetDefaultAppProviderForMimeTypeResponse) => void): grpc.ClientUnaryCall;
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
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAuthProviders(request: cs3_auth_registry_v1beta1_registry_api_pb.ListAuthProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_gateway_v1beta1_gateway_api_pb.ListAuthProvidersResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
  public getHome(request: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_storage_provider_v1beta1_provider_api_pb.GetHomeResponse) => void): grpc.ClientUnaryCall;
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
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public isProviderAllowed(request: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.IsProviderAllowedResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public getInfoByDomain(request: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.GetInfoByDomainResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  public listAllProviders(request: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_provider_v1beta1_provider_api_pb.ListAllProvidersResponse) => void): grpc.ClientUnaryCall;
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  public createOCMCoreShare(request: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_ocm_core_v1beta1_ocm_core_api_pb.CreateOCMCoreShareResponse) => void): grpc.ClientUnaryCall;
  public createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  public createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  public createTransfer(request: cs3_tx_v1beta1_tx_api_pb.CreateTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CreateTransferResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public getTransferStatus(request: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.GetTransferStatusResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
  public cancelTransfer(request: cs3_tx_v1beta1_tx_api_pb.CancelTransferRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: cs3_tx_v1beta1_tx_api_pb.CancelTransferResponse) => void): grpc.ClientUnaryCall;
}

