function Register() {
  return(
    <div className="osahan-signup">
      <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
        <h5 className="font-weight-normal mb-0 text-white">
          <a className="text-danger mr-3" href="/"><i className="icofont-rounded-left"></i></a> Sign in to your account
        </h5>
      </div>
      <div className="p-3">
        <form action="#">
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Email Address</label>
            <input className="form-control" placeholder="Enter your email address"></input>
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Password</label>
            <input className="form-control" placeholder="Enter your password"></input>
          </div>
          <div className="form-group">
            <label className="text-muted f-10 mb-1">Re-type Password</label>
            <input className="form-control" placeholder="Re-type your password"></input>
          </div>
          <button type="submit" className="btn btn-danger btn-block osahanbus-btn mb-3 rounded-1 mt-4">CREATE AN ACCOUNT</button>
          <p className="text-muted text-center small">By signing up, you agree to our terms and privacy policy.</p>
        </form>
      </div>
    </div>
  );
}

export default Register;