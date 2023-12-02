import React from 'react';

const AllPackages = () => {
    return (
        <>
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-2 text-gray-800">Packages</h1>
                
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">All Packages</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered text-center" id="dataTable" width="100%" cellSpacing={0}>
                                <thead>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Title</th>
                                        <th>Location</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>Title</th>
                                        <th>Location</th>
                                        <th>Duration</th>
                                        <th>Price</th>
                                        <th>Rating</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <tr>
                                        <td>01</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>Thailand</td>
                                        <td>7 Days</td>
                                        <td>$320,800</td>
                                        <td>4.5</td>
                                    </tr>
                                    <tr>
                                        <td>02</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>USA</td>
                                        <td>5 Days</td>
                                        <td>$170,750</td>
                                        <td>4.2</td>
                                    </tr>
                                    <tr>
                                        <td>03</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>Finland</td>
                                        <td>10 Days</td>
                                        <td>$86,000</td>
                                        <td>4.7</td>
                                    </tr>
                                    <tr>
                                        <td>04</td>
                                        <td>Discover amazing places of the world with us</td>
                                        <td>Maldip</td>
                                        <td>21 Days</td>
                                        <td>$433,060</td>
                                        <td>4.3</td>
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

export default AllPackages;