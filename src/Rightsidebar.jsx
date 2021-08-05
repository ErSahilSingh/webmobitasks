import React from 'react';


function Rightsidebar() {
    return (
        <>
        <div className="col-sm-auto bg-white sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-white align-items-center sticky-top">
                <a href="/" className="d-block p-2 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <img className="img__1"/>
                </a>
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 px-3 align-items-center">
                    <li className="nav-item">
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <i class="fas fa-bell text-secondary"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i class="fas fa-comments text-secondary"></i>
                        
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link py-1 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <i class="fas fa-cog text-secondary"></i>
                        
                        </a>
                    </li>
                   
                    
                </ul>
                
            </div>
        </div>
        
        </>
    )
}

export default Rightsidebar;
