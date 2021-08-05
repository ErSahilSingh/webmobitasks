import React from 'react';


function Navbar() {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                        <a className="navbar-brand" href="#"><i className="fas fa-signal "> Admin Dashboard</i></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"    aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <form className="d-flex ms-auto">
                            <button className="btn btn-outline-secondary" type="submit">Preview on: <i class="far fa-stop-circle"></i> <i class="far fa-arrow-alt-circle-down"></i></button>
                        </form>
                </div>
             </div>
            </nav>
        
    )
}

export default Navbar;
