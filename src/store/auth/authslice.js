import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loginResp: undefined,
    loggedInUserResp: undefined,
    authErrorResp: undefined,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoginAct: (state, action) => {
            state.loginResp = action.payload;
        },
        setLoggedInUserAct: (state, action) => {
            state.loggedInUserResp = action.payload;
        },
        setAuthErrorAct: (state, action) => {
            state.authErrorResp = action.payload;
        },
    }
})

export default authSlice.reducer;
export const { setLoginAct, setLoggedInUserAct, setAuthErrorAct } = authSlice.actions;