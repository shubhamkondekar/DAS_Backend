import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/";
// export const BASE_URL_IMAGE = "http://192.168.29.124:4001/";

const constructApiRequest = (path, method, body) => ({
  url: path,
  method: method,
  data: body,
});

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 2000000,
});

const requests = {
  get: (path) => Axios(constructApiRequest(path, "get")),
  post: (path, params) => Axios(constructApiRequest(path, "post", params)),
  put: (path, params) => Axios(constructApiRequest(path, "put", params)),
  delete: (path) => Axios(constructApiRequest(path, "delete")),
};

// add request path here
const requestPath = {
  signin: "user/register",
  login: "user/login",
};

const ApiManager = {
  //   getProductlisting: () => {
  //     return requests.get(`${requestPath.getProductlisting}`);
  //   },

  // Sign in
  signin: (params) => {
    return requests.post(`${requestPath.signin}`, params);
  },
  login: (params) => {
    return requests.post(`${requestPath.login}`, params);
  },

  // Forget Password
  //   forgotPassword:(params) => {
  //     return requests.post(`${requestPath.forgotPassword}`, params)
  //   },

  // Reset Password
  //   resetPassword:(params) => {
  //     return requests.post(`${requestPath.resetPassword}`, params)
  //   },

  //   sendinvite: (params) => {
  //     return requests.post(`${requestPath.sendinvite}`, params);
  //   },

  //   upload3Dproductimage: (params) => {
  //     return requests.post(`${requestPath.upload3Dproductimage}`, params);
  //   },

  //   // Admin

  //   addNewClient: (params) => {
  //     return requests.post(`${requestPath.addNewClient}`, params);
  //   },

  //   addKeys: (params) => {
  //     return requests.post(`${requestPath.addKeys}`, params);
  //   },

  //   addNewAsset: (params) => {
  //     return requests.post(`${requestPath.addNewAsset}`, params);
  //   },

  //   addNewSubasset: (params) => {
  //     return requests.post(`${requestPath.addNewSubasset}`, params);
  //   },
  //   addNewArea: (params) => {
  //     return requests.post(`${requestPath.addNewArea}`, params);
  //   },
  //   add3DContent: (params) => {
  //     return requests.post(`${requestPath.add3DContent}`, params);
  //   },

  //   addlocation : (params) => {
  //     return requests.post(`${requestPath.addlocation}`, params);
  //   },

  //   // Admin Dashboard

  // //   addClientInDashboard: (params) => {
  // //     return requests.get(`${requestPath.addClientInDashboard}`, params)
  // //   },

  // //   getClientLocations: (params) => {
  // //     return requests.get(`${requestPath.getClientLocations}/${params.id}`);
  // //   },

  // //   getClientAsset: (params) => {
  // //     return requests.post(`${requestPath.getClientAsset}`, params)
  // //   },

  // //   getClientSubasset: (params) => {
  // //     return requests.post(`${requestPath.getClientSubasset}`, params)
  // //   },

  // //   getClientArea: (params) => {
  // //     return requests.post(`${requestPath.getClientArea}`, params)
  // //   },

  // //   getClientProduct: (params) => {
  // //     return requests.post(`${requestPath.getClientProduct}`, params)
  // //   },

  //   getAllClientlisting: () => {
  //     return requests.get(`${requestPath.getAllClientlisting}`)
  //   },

  //   deletelocation: (params) => {
  //     return requests.delete(`${requestPath.deletelocation}/${params.id}`)
  //   },

  //   deleteAsset: (params) => {
  //     return requests.delete(`${requestPath.deleteAsset}/${params.id}`)
  //   },

  //   deletSubAsset: (params) => {
  //     return requests.delete(`${requestPath.deletSubAsset}/${params.id}`)
  //   },

  //   getallAsset: (params) => {
  //     return requests.get(`${requestPath.getallAsset}/${params.id}`)
  //   },

  //   getallSubasset: (params) => {
  //     return requests.get(`${requestPath.getallSubasset}/${params.id}`)
  //   },

  //   getallarea: (params) => {
  //     return requests.get(`${requestPath.getallarea}/${params.id}`)
  //   },

  //   deleteArea: (params) => {
  //     return requests.delete(`${requestPath.deletearea}/${params.id}`)
  //   },

  //   getallProduct: (params) => {
  //     return requests.get(`${requestPath.getallProduct}/${params.id}`)
  //   },

  //   deleteproduct: (params) => {
  //     return requests.delete(`${requestPath.deleteproduct}/${params.id}`)
  //   },

  //   addUser: (params) => {
  //     return requests.post(`${requestPath.addUser}`, params)
  //   },

  //   updateUserPermission: (params) => {
  //     return requests.post(`${requestPath.updateUserPermission}`, params)
  //   },

  //   configureEmail: (params) => {
  //     return requests.post(`${requestPath.configureEmail}`, params)
  //   },

  //   updateLocation: (params) => {
  //     return requests.post(`${requestPath.updatelLocation}`, params)
  //   },
  //   updateAsset: (params) => {
  //     return requests.post(`${requestPath.updateAsset}`, params)
  //   },
  //   updateSubasset: (params) => {
  //     return requests.post(`${requestPath.updateSubasset}`, params)
  //   },
  //   updateArea: (params) => {
  //     return requests.post(`${requestPath.updateArea}`, params)
  //   },
  //   setLabels: (params) => {
  //     return requests.post(`${requestPath.setLabels}`, params)
  //   },
  //   getLabels: (params) => {
  //     return requests.get(`${requestPath.getlabels}/${params.id}`)
  //   },
};

export default ApiManager;
