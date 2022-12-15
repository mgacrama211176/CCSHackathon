import NoticeModal from '../components/NoticeModal';
import Footer from '../components/Footer';

function Notification() {
    return(
        <div>
            <div className="osahan-notification padding-bt">
                <div className="osahan-header-nav shadow-sm bg-danger p-3 d-flex align-items-center">
                    <h5 className="font-weight-normal mb-0 text-white">
                        <a className="text-danger mr-3" href="/"><i className="icofont-rounded-left"></i></a>
                        Notifications
                    </h5>
                    <div className="ml-auto d-flex align-items-center">
                        <NoticeModal/>
                    </div>
                </div>
                <div className="osahan-notification">
                    <div className="notification d-flex m-0 bg-white border-bottom p-3">
                        <div className="icon pr-3">
                            <span className="icofont-bell-alt bg-primary text-white mb-0 rounded-pill"></span>
                        </div>
                        <div className="noti-details l-hght-18 pr-0">
                            <p className="mb-1">Notification title</p>
                            <span className="small text-muted">Notification detail</span>
                        </div>
                        <div className="f-10 px-0 text-right">
                            <span>10:14.AM</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Notification;