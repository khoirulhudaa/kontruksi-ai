import api from "./Axios";

const API = {
    // Account user
    checkAccount: (body: any) => {
        return api.post("/account/signin/user", body);
    },
    createAccount: (body: any) => {
        return api.post("/account/signup/user", body);
    },
    updateProfile: (body: any) => {
        return api.post("/account/user", body);
    },
};

export default API;
