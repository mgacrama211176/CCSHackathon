import Footer from "../components/Footer";
import { useSelector } from "react-redux";

function ProfilePage() {
  const { currentUser } = useSelector((state) => state.username);

  console.log(currentUser);
  return (
    <div>
      <div className="osahan-profile">
        <div className="osahan-header-nav shadow-sm bg-danger p-3 d-flex align-items-center">
          <h5 className="font-weight-normal mb-0 text-white">
            <a className="text-danger mr-3" href="/dashboard">
              <i className="icofont-rounded-left"></i>
            </a>
            My Profile
          </h5>
        </div>
        <div className="px-3 pt-3 pb-5">
          <form action="#">
            <div className="d-flex justify-content-center rounded-2 mb-4">
              <div className="form-profile w-100">
                <div className="text-center mb-3 position-relative  d-flex flex-column justify-content-center align-items-center">
                  <div className="position-absolute edit-bt">
                    <label className="mb-0">
                      <span className="icofont-pencil-alt-5 text-white"></span>
                    </label>
                    <input type="file" id="upload-photo"></input>
                  </div>
                  <img src="/img/user-icon.png" style={{ width: "70px", height: "70px" }} className="rounded-pill"></img>
                  <label className="text-muted f-10 mb-1">ADMIN</label>
                </div>

                <div className="form-group">
                  <label className="text-muted f-10 mb-1">Email Address</label>
                  <input
                    className="form-control"
                    placeholder={currentUser.email}
                    value={currentUser.email}
                    readOnly
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-muted f-10 mb-1">Current Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter your current password"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-muted f-10 mb-1">New Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter your new password"
                  ></input>
                </div>
                <div className="form-group">
                  <label className="text-muted f-10 mb-1">
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    placeholder="Confirm your new password"
                  ></input>
                </div>
                <div className="mb-5">
                  <button
                    type="submit"
                    className="btn btn-danger btn-block osahanbus-btn-rounded-1"
                  >
                    UPDATE PROFILE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
