import { requestUtil } from "../utils";

const getCourseForCompany = (companyId, config = {}) => requestUtil.makeGetRequest(`/api/courses/${companyId}`, config);


export const courseService = {
    getCourseForCompany
}