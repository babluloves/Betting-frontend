import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth/authslice";
import globalData from "./globaldata/globalslicer";
import dashboard from "./dashboard/dashboardslice";

const rootReducer = combineReducers({
    auth,
    globalData,
    dashboard,
});

export default rootReducer;