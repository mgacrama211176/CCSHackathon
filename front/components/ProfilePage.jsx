import Footer from '../components/Footer';

function ProfilePage() {
    return(
        <div>
            <div className="osahan-profile">
                <div className="osahan-header-nav shadow-sm bg-danger p-3 d-flex align-items-center">
                    <h5 className="font-weight-normal mb-0 text-white">
                        <a className="text-danger mr-3" href="/"><i className="icofont-rounded-left"></i></a>
                        My Profile
                    </h5>
                </div>
                <div className="px-3 pt-3 pb-5">
                    <form action="#">
                        <div className="d-flex justify-content-center rounded-2 mb-4">
                            <div className="form-profile w-100">
                                <div className="text-center mb-3 position-relative">
                                    <div className="position-absolute edit-bt">
                                        <label className="mb-0"><span className="icofont-pencil-alt-5 text-white"></span></label>
                                        <input type="file" id="upload-photo"></input>
                                    </div>
                                    <img src="/img/profile.jpg" className="rounded-pill"></img>
                                </div>
                                <div className="form-group">
                                    <label className="text-muted f-10 mb-1">Email Address</label>
                                    <input className="form-control" placeholder="Enter your email address" value="email@domain.com"></input>
                                </div>
                                <div className="form-group">
                                    <label className="text-muted f-10 mb-1">Password</label>
                                    <input className="form-control" placeholder="Enter your password"></input>
                                </div>
                                <div className="form-group">
                                    <label className="text-muted f-10 mb-1">New Password</label>
                                    <input className="form-control" placeholder="Enter your new password"></input>
                                </div>
                                <div className="form-group">
                                    <label className="text-muted f-10 mb-1">Confirm Password</label>
                                    <input className="form-control" placeholder="Confirm your new password"></input>
                                </div>
                                <div className="mb-5">
                                    <button type="submit" className="btn btn-danger btn-block osahanbus-btn-rounded-1">UPDATE PROFILE</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ProfilePage;