import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dashboardSummaryResp: undefined,
    dashboardErrorResp: undefined,
}

export const dashboardSlicer = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setDashboardSummaryAct: (state, action) => {
            state.dashboardSummaryResp = action.payload;
        },
        setDashboardErrorAct: (state, action) => {
            state.dashboardErrorResp = action.payload;
        },
    }
})

export default dashboardSlicer.reducer;
export const { setDashboardSummaryAct, setDashboardErrorAct } = dashboardSlicer.actions;