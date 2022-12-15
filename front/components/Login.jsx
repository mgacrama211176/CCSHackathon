function Login() {
  return(
    <div className="osahan-signup">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/"><i className="icofont-rounded-left"></i></a> Sign in to your account
        </h5>
      </div>
      <div className="px-3 pt-3 pb-5">
        <form action="#">
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Email Address</label>
            <input className="form-control" placeholder="Enter your email address"></input>
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Password</label>
            <input className="form-control" placeholder="Enter your password"></input>
          </div>
          <div className="text-right mb-3">
            <a href="/forgotpassword" className="text-muted small">Forgot your password?</a>
          </div>
          <button type="submit" className="btn btn-danger btn-block osahanbus-btn mb-4 rounded-1">SIGN IN</button>
        </form>
        <div className="sign-or d-flex align-items-center justify-content-center mb-4">
          <hr className="mr-4"></hr>
          <p className="text-muted text-center py-2 m-0">OR</p>
          <hr className="ml-4"></hr>
        </div>
        <div className="osahan-signin text-center p-1">
          <p className="m-0">Not a member? <a href="/register" className="text-danger ml-2">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
}

export default Login;