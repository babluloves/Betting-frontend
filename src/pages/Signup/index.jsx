import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { InputText, FullPageLoader, Button } from "../../component";
import Trackingimg from "../../assets/TrackingImg.jpg";
import Logo from "../../assets/Logo.jpg";
import "./Signup.css"; // Import your CSS file for signup form styles

// Storage Constants
import { refreshTokenKey, accessTokenKey } from "../../constants/storageconstants";
import { setLocalStorage } from "../../utility/storageutility";

// API Actions
import { generateApiUrl } from "../../api/apihelper";
import { getLoggedInuserAct } from "../../store/auth/auththunk";
import { setLoginAct } from "../../store/auth/authslice";
import { signupUserAct } from "../../store/Signup/Signupthunk";

const initialValues = {
  name: "",
  email: "",
  password: "",
  re_password: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  email: Yup.string().required("Email is required.").email("Invalid email format."),
  password: Yup.string().required("Password is required."),
  re_password: Yup.string()
    .required("Confirm password is required.")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { apiCallLoading, signupResp, loggedInUserResp, authErrorResp } = useSelector(
    ({ globalData, auth }) => ({
      apiCallLoading: globalData.apiCallLoading,
      signupResp: auth.SignupResp, // Corrected the property name
      loggedInUserResp: auth.SignupUserResp, // Corrected the property name
      authErrorResp: auth.SignupErrorResp, // Corrected the property name
    }),
    shallowEqual
  );

  const signupRespRef = useRef({
    prevSignupResp: signupResp,
    prevLoggedInUserResp: loggedInUserResp,
    prevAuthErrorResp: authErrorResp,
  });

  useEffect(() => {
    const { prevSignupResp, prevLoggedInUserResp, prevAuthErrorResp } = signupRespRef.current;
    if (signupResp && signupResp !== prevSignupResp) {
      const { access, id, refresh } = signupResp;
      setLocalStorage(accessTokenKey, access);
      setLocalStorage(refreshTokenKey, refresh);
      dispatch(getLoggedInuserAct(generateApiUrl("loggedin_user", { userId: id })));
    } else if (loggedInUserResp && loggedInUserResp !== prevLoggedInUserResp) {
      dispatch(setLoginAct(undefined));
      navigate("/");
    }
    signupRespRef.current.prevSignupResp = signupResp;
    signupRespRef.current.prevLoggedInUserResp = loggedInUserResp;
  }, [signupResp, loggedInUserResp, authErrorResp]);

  const signupForm = useFormik({
    enableReinitialize: false,
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values) => {
      dispatch(signupUserAct(generateApiUrl("signup"), values));
    },
  });

  return (
    <>
      {apiCallLoading && <FullPageLoader />}

      <div className="signup-container">
        <div className="left-panel">
          <img src={Trackingimg} alt="Tracking" className="tracking-img" />
          <h2 className="tracking-title">Track Your Movements</h2>
          <p className="tracking-description">
            Discover the world of financial markets and make informed decisions.
          </p>
        </div>
        <div className="right-panel">
          <div className="signup-form">
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className="signup-title">Create an Account</h1>
            <form onSubmit={signupForm.handleSubmit}>
              <div className="form-group">
                <InputText
                  labelName="Name"
                  labelClassName="text-gray-dark fw-bold"
                  containerClassName="mb-3"
                  name="name"
                  value={signupForm.values.name}
                  onBlur={signupForm.handleBlur}
                  onChange={signupForm.handleChange}
                  invalid={signupForm.touched.name && signupForm.errors.name ? true : false}
                  error={signupForm.touched.name && signupForm.errors.name ? signupForm.errors.name : ""}
                />
              </div>
              <div className="form-group">
                <InputText
                  labelName="Email"
                  labelClassName="text-gray-dark fw-bold"
                  containerClassName="mb-3"
                  name="email"
                  value={signupForm.values.email}
                  onBlur={signupForm.handleBlur}
                  onChange={signupForm.handleChange}
                  invalid={signupForm.touched.email && signupForm.errors.email ? true : false}
                  error={signupForm.touched.email && signupForm.errors.email ? signupForm.errors.email : ""}
                />
              </div>
              <div className="form-group">
                <InputText
                  labelName="Password"
                  labelClassName="text-gray-dark fw-bold"
                  containerClassName="mb-3"
                  name="password"
                  type="password"
                  value={signupForm.values.password}
                  onBlur={signupForm.handleBlur}
                  onChange={signupForm.handleChange}
                  invalid={signupForm.touched.password && signupForm.errors.password ? true : false}
                  error={signupForm.touched.password && signupForm.errors.password ? signupForm.errors.password : ""}
                />
              </div>
              <div className="form-group">
                <InputText
                  labelName="Confirm Password"
                  labelClassName="text-gray-dark fw-bold"
                  containerClassName="mb-4"
                  name="re_password"
                  type="password"
                  value={signupForm.values.re_password}
                  onBlur={signupForm.handleBlur}
                  onChange={signupForm.handleChange}
                  invalid={
                    signupForm.touched.re_password && signupForm.errors.re_password
                      ? true
                      : false
                  }
                  error={
                    signupForm.touched.re_password && signupForm.errors.re_password
                      ? signupForm.errors.re_password
                      : ""
                  }
                />
              </div>
              <Button type="submit" className="btn-primary w-100" btnText="Signup" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
