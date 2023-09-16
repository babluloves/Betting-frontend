import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PredictionListResp: undefined,
    PredictionErrorResp: undefined,
}

export const predectionSlice = createSlice({
    name: "prediction",
    initialState,
    reducers: {
        setPredictionListAct: (state, action) => {
            state.PredictionListResp = action.payload;
        },
        setPredictionErrorAct: (state, action) => {
            state.PredictionErrorResp = action.payload;
        },
    }
})

export default predectionSlice.reducer;
export const { setPredictionListAct, setPredictionErrorAct } = predectionSlice.actions;