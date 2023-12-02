import React from 'react';

const ConfirmBooking = () => {
    return (
        <>
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Booking</h1>
                
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">All Booking</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Customer Name </th>
                                        <th>Booking Name</th>
                                        <th>Packages Name</th>
                                        <th>Booking Date</th>
                                        <th>Start date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Customer Name </th>
                                        <th>Packages Name</th>
                                        <th>Booking Date</th>
                                        <th>Start date</th>
                                        <th>Total Cost</th>
                                        <th>Status</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>2011/04/25</td>
                                        <td>2011/04/29</td>
                                        <td>$320,800</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Ashton Cox</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>2011/04/24</td>
                                        <td>2011/04/26</td>
                                        <td>$740,800</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Airi Satou</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>2011/04/25</td>
                                        <td>2011/04/27</td>
                                        <td>$320,800</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    <tr>
                                        <td>Brielle Williamson</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>2011/04/25</td>
                                        <td>2011/04/29</td>
                                        <td>$320,800</td>
                                        <td>Confirmed</td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfirmBooking;