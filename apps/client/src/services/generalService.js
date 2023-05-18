import { requestUtil } from "../utils"

const setUser = (data, config = {}) => requestUtil.makePostRequest('/api/auth/login', data, config);


export const generalService = {
    setUser
}