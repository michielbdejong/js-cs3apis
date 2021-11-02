import { Metadata, credentials, ServiceError } from '@grpc/grpc-js';
import { GatewayAPIClient } from '../cs3/gateway/v1beta1/gateway_api_grpc_pb';
import {
  AuthenticateRequest,
  AuthenticateResponse,
  WhoAmIRequest,
  WhoAmIResponse
} from '../cs3/gateway/v1beta1/gateway_api_pb';
import { ListReceivedOCMSharesRequest, ListReceivedOCMSharesResponse } from '../cs3/sharing/ocm/v1beta1/ocm_api_pb';

// Specifies the name of the Reva access token used during requests.
// Align this string with the server expects, in the case of revad see:
// https://github.com/cs3org/reva/blob/v1.11.0/pkg/token/token.go#L30
const TOKEN_HEADER = 'x-access-token';

const TARGET = process.env.TARGET || 'localhost:19000';


const client = new GatewayAPIClient(
  TARGET,
  credentials.createInsecure()
);

async function authenticate() {
  const req = new AuthenticateRequest();
  req.setType('basic');
  req.setClientId('einstein');
  req.setClientSecret('relativity');
  const res: AuthenticateResponse = await new Promise((resolve, reject) => {
    client.authenticate(req, (err: ServiceError | null, res: AuthenticateResponse) => {
      if (err) {
        reject(err);
      }
      resolve(res)
    })
  });

  // See AuthenticateResponse https://github.com/cs3org/cs3apis/blob/a86e5cb6ac360/cs3/gateway/v1beta1/gateway_api.proto#L415
  // * User https://github.com/cs3org/cs3apis/blob/a86e5cb6ac360/cs3/identity/user/v1beta1/resources.proto#L53
  const user = res.getUser();
  console.log('DisplayName from AuthenticateResponse:', user ? user.getDisplayName() : '?');

  // add the token to the metadata for subsequent client calls
  const token = res.getToken();
  // one exception is the 'WhoAmI' method, which takes the token as a request parameter
  return token;
}

async function whoAmI(token: string) {
  const req = new WhoAmIRequest();
  req.setToken(token);
  const res: WhoAmIResponse = await new Promise((resolve, reject) => {
    client.whoAmI(req, (err: ServiceError | null, res: WhoAmIResponse) => {
      if (err) {
        reject(err);
      }
      resolve(res)
    })
  });
  const user = res.getUser();
  console.log('DisplayName from WhoAmIResponse:', user? user.getDisplayName() : '?');
}

async function listReceivedOCMShares(metadata: Metadata) {
  const req = new ListReceivedOCMSharesRequest();
  // req.setToken(token);
  const shares: ListReceivedOCMSharesResponse = await new Promise((resolve, reject) => {
    client.listReceivedOCMShares(req, metadata, (err: ServiceError | null, res: ListReceivedOCMSharesResponse) => {
      if (err) {
        reject(err);
      }
      resolve(res)
    })
  });
  console.log('SharesList from ListReceivedOCMSharesResponse:', shares.getSharesList());
}

async function example() {
  const token = await authenticate();
  await whoAmI(token);

  const metadata = new Metadata();
  metadata.add(TOKEN_HEADER, token);

  await listReceivedOCMShares(metadata);
}

// ...
example();