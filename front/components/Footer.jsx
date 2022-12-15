function Footer() {
    return(
        <div className="fixed-bottom p-3">
            <div className="footer-menu row m-0 bg-danger shadow rounded-2">
                <div className="col-3 p-0 text-center">
                    <a href="/" className="home text-white">
                        <span className="icofont-ui-home h5"></span>
                        <p className="mb-0 small">Home</p>
                    </a>
                </div>
                <div className="col-3 p-0 text-center">
                    <a href="/reports" className="home text-white">
                        <span className="icofont-data h5"></span>
                        <p className="mb-0 small">Reports</p>
                    </a>
                </div>
                <div className="col-3 p-0 text-center">
                    <a href="/notice" className="home text-white">
                        <span className="icofont-notification h5"></span>
                        <small className="osahan-n">0</small>
                        <p className="mb-0 small">Notice</p>
                    </a>
                </div>
                <div className="col-3 p-0 text-center">
                    <a href="/profile" className="home text-white">
                        <span className="icofont-user h5"></span>
                        <p className="mb-0 small">Profile</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;