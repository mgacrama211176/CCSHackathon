import Footer from '../components/Footer';

function Home() {
    return(
        <div>
            <div className="seat-select padding-bt">
                <div className="p-3 shadow bg-danger danger-nav osahan-home-header">
                    <div className="font-weight-normal mb-0 d-flex align-items-center">
                        <img src="/img/logo.png" className="img-fluid osahan-nav-logo"></img>
                        <div className="ml-auto d-flex align-items-center">
                            <a href="/profile" className="mr-3">
                                <img src="/img/user1.jpg" className="img-fluid rounded-circle"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="bg-danger px-3 pb-3">
                    <div className="bg-white rounded-1 p-3">
                        <form action="#">
                            <div className="form-group border-bottom pb-2">
                                <label className="mb-2"><span className="icofont-ui-calendar text-danger"></span> Date</label><br></br>
                                <input className="form-control border-0 p-0" type="date"></input>
                            </div>
                            <button type="submit" className="btn btn-danger btn-block osahanbus-btn rounded-1">Search</button>
                        </form>
                    </div>
                </div>
                <div className="ticket p-3" style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="select-seat row bg-white mx-0 px-3 pt-3 pb-1 mb-3 rounded-1 shadow-sm">
                        <div className="col-8 pl-0">
                            <div className="d-flex">
                                <div className="sold text-center">
                                    <img src="/img/sold-seat.png" className="img-fluid mb-1"></img>
                                    <p className="small f-10">Unavailable</p>
                                </div>
                                <div className="sold text-center mx-3">
                                    <img src="/img/selected-seat.png" className="img-fluid mb-1"></img>
                                    <p className="small f-10">Available</p>
                                </div>
                            </div>
                            <div className="select-seat">
                                <div className="checkboxes-seat mt-4">
                                    <button type="button" className="btn check-seat btn-success small btn-sm rounded mr-2 mb-2" data-toggle="modal" data-target="#confirmModal">
                                        P1
                                    </button>
                                    <div className="modal fade" id="confirmModal" tabIndex="-1" role="dialog" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Confirm Parking</h5>
                                                    <button type="button" className="close" data-dismiss="modal">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <form action="#">
                                                    <div className="modal-body">
                                                        <div className="form-group">
                                                            <label className="text-muted f-10 mb-1">Driver Name</label>
                                                            <input className="form-control" placeholder="Enter the driver's name"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="text-muted f-10 mb-1">Car Model</label>
                                                            <input className="form-control" placeholder="Enter the card model"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="text-muted f-10 mb-1">Car Type</label>
                                                            <input className="form-control" placeholder="Enter the car type"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="text-muted f-10 mb-1">Car License</label>
                                                            <input className="form-control" placeholder="Enter the car license"></input>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="text-muted f-10 mb-1">Plate Number</label>
                                                            <input className="form-control" placeholder="Enter the plate number"></input>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="submit" className="btn btn-success">Yes</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;