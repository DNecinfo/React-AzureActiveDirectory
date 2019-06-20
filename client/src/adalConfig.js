import { AuthenticationContext, adalFetch, withAdalLogin } from "react-adal";

export const adalConfig = {
  tenant: "0b860171-b0f1-45fe-a224-d66f23c2d639",
  clientId: "72ed5f17-7eaa-4e8a-bfbe-49b67071e900",
  endpoints: {
    api: "1744a733-db16-4fc1-8255-d5b886c0c7f4"
    //api: "https://login.microsoftonline.com/0b860171-b0f1-45fe-a224-d66f23c2d639/oauth2/v2.0/authorize"
  }
  //cacheLocation: "localStorage"
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);
