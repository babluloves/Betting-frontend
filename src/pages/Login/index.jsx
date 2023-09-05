import React, { useState, useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { InputText, FullPageLoader } from "../../component";
import  Trackingimg from "../../assets/TrackingImg.jpg";
import Logo from "../../assets/Logo.jpg";
import "./Login.css";

//Storage Constants
import { refreshTokenKey, accessTokenKey } from "../../constants/storageconstants";
import { setLocalStorage } from "../../utility/storageutility";
//Api Actions
import { generateApiUrl } from "../../api/apihelper";
import { loginUserAct, getLoggedInuserAct } from "../../store/auth/auththunk";
import { setLoginAct } from "../../store/auth/authslice";


const initialValues = {
    email: "",
    password: "",
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required."),
    password: Yup.string().required("Password is required.")
});

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch(),
        { apiCallLoading, loginResp, loggedInUserResp, authErrorResp } = useSelector(({ globalData, auth }) => ({
            apiCallLoading: globalData.apiCallLoading,
            loginResp: auth.loginResp,
            loggedInUserResp: auth.loggedInUserResp,
            authErrorResp: auth.authErrorResp,
        }), shallowEqual);

    const loginRespRef = useRef({
        prevLoginResp: loginResp,
        prevLoggedInUserResp: loggedInUserResp,
        prevAuthErrorResp: authErrorResp,
    });

    useEffect(() => {
        const { prevLoginResp, prevLoggedInUserResp, prevAuthErrorResp } = loginRespRef.current;
        if (loginResp && loginResp !== prevLoginResp) {
            const { access, id, refresh } = loginResp;
            setLocalStorage(accessTokenKey, access);
            setLocalStorage(refreshTokenKey, refresh);
            dispatch(getLoggedInuserAct(generateApiUrl("loggedin_user", { userId: id })));
        } else if (loggedInUserResp && loggedInUserResp !== prevLoggedInUserResp) {
            dispatch(setLoginAct(undefined));
            navigate('/');
        }
        loginRespRef.current.prevLoginResp = loginResp;
        loginRespRef.current.prevLoggedInUserResp = loggedInUserResp;
    }, [loginResp, loggedInUserResp, authErrorResp]);

    const loginForm = useFormik({
        enableReinitialize: false,
        initialValues: initialValues,
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUserAct(generateApiUrl("login"), values));
        },
    });
    return (
        <>
            {apiCallLoading && <FullPageLoader />}
            
    <div className="login-container">
      <div className="left-panel">
        <img
          src={Trackingimg}
          alt="Tracking"
          className="tracking-img"
        />
        <h2 className="tracking-title">Track Your Movements</h2>
        <p className="tracking-description">
          Discover the world of financial markets and make informed decisions.
        </p>
      </div>
      <div className="right-panel">
        <div className="login-form">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
          />
          <h1 className="login-title">Welcome To Betting Website</h1>
          <form>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}