import { generalService } from "../../services"
import { actionUtil } from "../../utils";
import { generalActionTypes } from "../action-types";

const setUser = (data, config = {}) => (dispatch) => {
    return generalService.setUser(data, config)
        .then(res => {
            dispatch(actionUtil.createAction(generalActionTypes.SET_USER, res));
        })
        .catch(err => {
            dispatch(actionUtil.createAction(generalActionTypes.SET_USER_FAILURE, err));
        })
}

export const generalActions = {
    setUser,
}