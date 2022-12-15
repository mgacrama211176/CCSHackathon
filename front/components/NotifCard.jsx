import React from "react";
import { format } from "timeago.js";

const NotifCard = ({ notif }) => {
  return (
    <div className="osahan-notification">
      <div className="notification d-flex m-0 bg-white border-bottom p-3">
        <div className="icon pr-3">
          <span className="icofont-bell-alt bg-primary text-white mb-0 rounded-pill"></span>
        </div>
        <div className="noti-details l-hght-18 pr-0">
          {notif.status === "entry" ? (
            <>
              <p className="mb-1">New Car Parked</p>
            </>
          ) : (
            <>
              <p className="mb-1">Car Exited</p>
            </>
          )}

          <div className="d-flex flex-column ">
            <span className="small text-muted">Notification details:</span>
            <span className="small text-muted">
              Plate Number: {notif.parkerPlateNumber}
            </span>
            <span className="small text-muted">Message: {notif.message}</span>
            <span className="small text-muted">
              Car Park Number: {notif.parkingNumber}
            </span>
          </div>
        </div>
        <div className="f-10 px-0 text-right">
          <span>{format(notif.createdAt)}</span>
        </div>
      </div>
    </div>
  );
};

export default NotifCard;
