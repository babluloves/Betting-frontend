import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PredictionListResp: undefined,
    PredictionErrorResp: undefined,
}

export const predictslice = createSlice({
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

export default predictslice.reducer;
export const { setPredictionListAct, setPredictionErrorAct } = predictslice.actions;