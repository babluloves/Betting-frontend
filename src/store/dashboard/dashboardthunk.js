import { getData, postData } from "../../api/apiactions";

import {
    setDashboardSummaryAct, setDashboardErrorAct
} from "./dashboardslice";

export function getDashboardSummaryAct(apiUrl) {
    return async (dispatch) => {
        const response = await getData(apiUrl);
        if (response.status === 200) {
            dispatch(setDashboardSummaryAct(response.data));
        } else {
            dispatch(setDashboardErrorAct(response));
        }
    }
}