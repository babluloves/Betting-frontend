import { getData, postData } from "../../api/apiactions";
import {
    setPredictionListAct, setPredictionErrorAct 
} from "./predictslice"


export function getpredictionpage(apiUrl, params) {
    return async (dispatch) => {
        const response = await getData(apiUrl, params);
        if (response.status === 200) {
            dispatch(setPredictionListAct(response.data));
            console.log(response);
        } else {
            dispatch(setPredictionErrorAct(response));
        }
    }
}