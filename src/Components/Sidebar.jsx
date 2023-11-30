import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" />
                    </div>
                    <div className="sidebar-brand-text mx-3">TRAVELER</div>
                </Link>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />

                {/* Dashboard */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                
                <hr className="sidebar-divider" />
                
                {/* Admin */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog" />
                        <span>Admin</span>
                    </Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="buttons.html">All Admins</Link>
                            <Link className="collapse-item" to="cards.html">Add Admin</Link>
                        </div>
                    </div>
                </li>
                
                {/* Packages */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <i className="fas fa-fw fa-cog" />
                        <span>Packages</span>
                    </Link>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_packages">All Packages</Link>
                            <Link className="collapse-item" to="/add_package">Add Package</Link>
                        </div>
                    </div>
                </li>

                {/* Booking */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                        <i className="fas fa-fw fa-cog" />
                        <span>Booking</span>
                    </Link>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_bookings">All Booking</Link>
                            <Link className="collapse-item" to="/pending_bookings">Pending Booking</Link>
                            <Link className="collapse-item" to="/confirm_bookings">Confirmed Booking</Link>
                        </div>
                    </div>
                </li>

                {/* Services */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        <i className="fas fa-fw fa-cog" />
                        <span>Services</span>
                    </Link>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_services">All Services</Link>
                            <Link className="collapse-item" to="/add_services">Add Service</Link>
                        </div>
                    </div>
                </li>

                {/* Blog */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        <i className="fas fa-fw fa-cog" />
                        <span>Blog</span>
                    </Link>
                    <div id="collapseSeven" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_blogs">All Blog</Link>
                            <Link className="collapse-item" to="/add_blog">Add Blog</Link>
                        </div>
                    </div>
                </li>
                
                {/* Testimonial */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseEight" aria-expanded="true" aria-controls="collapseEight">
                        <i className="fas fa-fw fa-cog" />
                        <span>Testimonial</span>
                    </Link>
                    <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="all_testimonial">All Testimonial</Link>
                            <Link className="collapse-item" to="add_testimonial">Add Testimonial</Link>
                        </div>
                    </div>
                </li>
                
                {/* Guide */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseNine" aria-expanded="true" aria-controls="collapseNine">
                        <i className="fas fa-fw fa-cog" />
                        <span>Guide</span>
                    </Link>
                    <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_guides">All Guides</Link>
                            <Link className="collapse-item" to="/add_guide">Add Guide</Link>
                        </div>
                    </div>
                </li>

                {/* Messages */}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTen" aria-expanded="true" aria-controls="collapseTen">
                        <i className="fas fa-fw fa-cog" />
                        <span>Messages</span>
                    </Link>
                    <div id="collapseTen" className="collapse" aria-labelledby="headingNine" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <Link className="collapse-item" to="/all_messages">All Messages</Link>
                            <Link className="collapse-item" to="/unread_messages">Unread Messages</Link>
                        </div>
                    </div>
                </li>
                
                
                {/* Divider */}
                {/* <hr className="sidebar-divider" /> */}
                {/* Heading */}
                {/* <div className="sidebar-heading">
                    Addons
                </div> */}
                {/* Nav Item - Pages Collapse Menu */}
                {/* <li className="nav-item">
                    <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder" />
                        <span>Pages</span>
                    </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link className="collapse-item" to="login.html">Login</Link>
                            <Link className="collapse-item" to="register.html">Register</Link>
                            <Link className="collapse-item" to="forgot-password.html">Forgot Password</Link>
                            <div className="collapse-divider" />
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link className="collapse-item" to="404.html">404 Page</Link>
                            <Link className="collapse-item" to="blank.html">Blank Page</Link>
                        </div>
                    </div>
                </li> */}
                {/* Nav Item - Charts */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="charts.html">
                        <i className="fas fa-fw fa-chart-area" />
                        <span>Charts</span></Link>
                </li> */}
                {/* Nav Item - Tables */}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="tables.html">
                        <i className="fas fa-fw fa-table" />
                        <span>Tables</span></Link>
                </li> */}
                {/* Divider */}
                {/* <hr className="sidebar-divider d-none d-md-block" /> */}
                {/* Sidebar Toggler (Sidebar) */}
                
            </ul>

        </div>
    );
};

export default Sidebar;