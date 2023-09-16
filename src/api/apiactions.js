import axios, { Axios, AxiosError, AxiosResponse } from "axios"
import { requestInterceptor, responseInterceptorSuccess, responseInterceptor } from "./interceptor";
import { sanitizeQueryParams } from "../utility/commonutility";
axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
    requestInterceptor
)

axios.interceptors.response.use(responseInterceptorSuccess, responseInterceptor);

const checkErrorResponse = (error, optionalConfig) => {
    if (error.response && error.response.data) {
        return { error: error.response.data };
    } else {
        return { error: { errorMessages: `Error with satus code:${error?.response?.status}` } };
    }
}

export async function getData(apiUrl, params = {}, optionalConfig = {}) {
    try {
        const sanitizedParams = sanitizeQueryParams(params);
        return await axios.get(apiUrl, { params: sanitizedParams, ...optionalConfig })
    }
    catch (error) {
        return checkErrorResponse(error, optionalConfig);
    }
}

export async function postData(apiUrl, payload = {}, optionalConfig = {}) {
    try {
        return await axios.post(apiUrl, payload, optionalConfig);
    }
    catch (error) {
        return checkErrorResponse(error, optionalConfig);
    }
}

export async function putData(apiUrl, payload = {}, optionalConfig = {}) {
    try {
        return await axios.put(apiUrl, payload, optionalConfig);
    }
    catch (error) {
        return checkErrorResponse(error, optionalConfig);
    }
}

export async function deleteData(apiUrl, payload = {}, optionalConfig = {}) {
    try {
        return await axios.delete(apiUrl, { data: payload });
    }
    catch (error) {
        return checkErrorResponse(error, optionalConfig);
    }
}