import { getData, postData } from "../../api/apiactions";
import { setSignupAct,setSignupUserAct, setSignupErrorAct } from "./Signupslice";

export function signupUserAct(apiUrl, payload) {
    return async (dispatch) => {
        const response = await postData(apiUrl, payload);
        if (response.status === 200) {
            dispatch(setSignupAct(response.data));
        } else {
            dispatch(setSignupErrorAct(response));
        }
    }
}