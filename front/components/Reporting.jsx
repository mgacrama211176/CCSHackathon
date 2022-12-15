import Footer from '../components/Footer';

function Reporting() {
    return(
        <div>
            <div className="my-ticket padding-bt" style={{ backgroundColor: '#f8f9fa'}}>
                <div className="osahan-header-nav shadow-sm p-3 d-flex align-items-center bg-danger">
                    <h5 className="font-weight-normal mb-0 text-white">
                        <a className="text-danger mr-3" href="/"><i className="icofont-rounded-left"></i></a>
                        Parking reports and statistics
                    </h5>
                </div>
                <div className="your-ticket border-top row m-0 p-3">
                    <div className="bg-white rounded-1 shadow-sm p-3 mb-3 w-100">
                        <h6 className="mb-3 l-hght-18 font-weight-bold text-dark">Weekly Report</h6>
                        <div className="row mx-0 mb-3">
                            <div className="col-6 p-0">
                                <small className="text-muted mb-1 f-10 pr-1">TOTAL CARS PARKED</small>
                                <p className="small mb-0 l-hght-14">0 CARS WERE PARKED</p>
                            </div>
                            <div className="col-6 p-0">
                                <small className="text-muted mb-1 f-10 pr-1">RECORDED FROM</small>
                                <p className="small mb-0 l-hght-14">7 DAYS AGO</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-1 shadow-sm p-3 mb-3 w-100">
                        <h6 className="mb-3 l-hght-18 font-weight-bold text-dark">Monthly Report</h6>
                        <div className="row mx-0 mb-3">
                            <div className="col-6 p-0">
                                <small className="text-muted mb-1 f-10 pr-1">TOTAL CARS PARKED</small>
                                <p className="small mb-0 l-hght-14">0 CARS WERE PARKED</p>
                            </div>
                            <div className="col-6 p-0">
                                <small className="text-muted mb-1 f-10 pr-1">RECORDED FROM</small>
                                <p className="small mb-0 l-hght-14">A MONTH AGO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Reporting;