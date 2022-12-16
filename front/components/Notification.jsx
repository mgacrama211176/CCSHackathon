import { useState, useEffect } from "react";
import NoticeModal from "./NoticeModal";
import Footer from "../components/Footer";
import NotifCard from "./NotifCard";
import axios from "axios";

function Notification() {
  const [notifContainer, setNotifContainer] = useState([]);

  const notification = async () => {
    const fetchData = await axios.get(
      `http://localhost:4000/api/notification/getAll`
    );
    setNotifContainer(fetchData.data);
  };

  useEffect(() => {
    notification();
  }, []);

  return (
    <div>
      <div className="osahan-notification padding-bt">
        <div className="osahan-header-nav shadow-sm bg-danger p-3 d-flex align-items-center">
          <h5 className="font-weight-normal mb-0 text-white">
            <a className="text-danger mr-3" href="/">
              <i className="icofont-rounded-left"></i>
            </a>
            Notifications
          </h5>
        </div>
        {notifContainer.map((notif) => (
          <NotifCard notif={notif} key={notif._id} />
        ))}
      </div>
      <Footer counter={notifContainer.length} />
    </div>
  );
}

export default Notification;
