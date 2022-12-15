import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const onChangeHandle = (e) => {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    console.log(newUser);
    setUser(newUser);
  };

  const onClickAddSubmit = async (e) => {
    e.preventDefault();
    const NewUser = await axios.post(`http://localhost:4000/api/auth/signup`, {
      email: user.email,
      password: user.password,
    });
    nav("/login");

    setUser({
      email: "",
      password: "",
      validpass: "",
    });
  };
  return (
    <div className="osahan-signup">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/">
            <i className="icofont-rounded-left"></i>
          </a>{" "}
          Create an account
        </h5>
      </div>
      <div className="p-3">
        <form action="#">
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Email Address</label>
            <input
              id="email"
              type="email"
              onChange={(e) => {
                onChangeHandle(e);
              }}
              className="form-control"
              placeholder="Enter your email address"
            ></input>
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => {
                onChangeHandle(e);
              }}
              className="form-control"
              placeholder="Enter your password"
            ></input>
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Re-type Password</label>
            <input
              id="cpassword"
              type="password"
              onChange={(e) => {
                onChangeHandle(e);
              }}
              className="form-control"
              placeholder="Re-type your password"
            ></input>
          </div>
          <button
            onClick={onClickAddSubmit}
            type="submit"
            className="btn btn-danger btn-block osahanbus-btn mb-3 rounded-1 mt-4"
          >
            CREATE AN ACCOUNT
          </button>
          <p className="text-muted text-center small">
            By signing up, you agree to our terms and privacy policy.
          </p>
        </form>
        <div className="sign-or d-flex align-items-center justify-content-center mb-4">
          <hr className="mr-4"></hr>
          <p className="text-muted text-center py-2 m-0">OR</p>
          <hr className="ml-4"></hr>
        </div>
        <div className="osahan-signin text-center p-1">
          <p className="m-0">
            Already a member?{" "}
            <a href="/login" className="text-danger ml-2">
              Sign In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
