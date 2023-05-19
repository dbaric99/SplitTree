import { courseService } from "../../services";
import { actionUtil } from "../../utils";
import { courseActionTypes } from "../action-types";

const getCoursesForCompany = (companyId, config = {}) => (dispatch) => {
    return courseService.getCourseForCompany(companyId, config)
    .then(res => {
        dispatch(actionUtil.createAction(courseActionTypes.GET_COURSES_FOR_COMPANY, res));
    })
    .catch(err => {
        dispatch(actionUtil.createAction(courseActionTypes.GET_COURSES_FOR_COMPANY_FAILURE, err));
    })
}

export const courseActions = {
    getCoursesForCompany
}