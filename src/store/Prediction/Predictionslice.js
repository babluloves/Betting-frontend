import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    PredictionListResp: undefined,
    PredictionErrorResp: undefined,
}

export const PredectionSlice = createSlice({
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

export default PredectionSlice.reducer;
export const { setPredictionListAct, setPredictionErrorAct } = PredectionSlice.actions;