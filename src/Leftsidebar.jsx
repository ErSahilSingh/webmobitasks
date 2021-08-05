import React from 'react';
import Navbar from './Navbar';
import Rightsidebar from './Rightsidebar';
import Main from './Main';


function Leftsidebar() {
    return (
        <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-white sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-white align-items-center sticky-top">
                <a href="/" className="d-block p-1 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <img className="img__2" />
                </a>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    
                    <li>
                        <a href="#" className="nav-link py-3 px-2 " title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i class="far fa-chart-bar btn btn-outline purple fs-2"></i>
                        <p className="purple">Event</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <i class="fas fa-users fs-2 btn btn-outline-light purple"></i>
                        <p className="purple">Teams</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                        <i class="fas fa-chart-line fs-2"></i>
                        <p>Analytics</p>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                        <i class="fas fa-envelope-open-text fs-2"></i>
                        <p>Results</p>
                        </a>
                    </li>
                </ul>
                
            </div>
        </div>
        <div className="col-sm min-vh-100">
            < Navbar />
            <Main />

            
        </div>
        <Rightsidebar />
    </div>
</div>
            
</>
    )
}

export default Leftsidebar;
