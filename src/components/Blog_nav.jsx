import React from 'react';
import { NavLink } from 'react-router-dom';

const Blog_nav=()=>{
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand " to="#">Mrunknown</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <NavLink className="nav-link h5 mx-1 " activeClassName="active" to="/">Home</NavLink>
                    <NavLink className="nav-link h5 mx-1" activeClassName="active" to="/Blogs">Blogs</NavLink>
                    <NavLink className="nav-link h5 mx-1" activeClassName="active" to="/Blog_create">create</NavLink>
                    <NavLink className="nav-link h5 mx-1 " activeClassName="active" to="/Blog_contact">contact us</NavLink>
                </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Blog_nav;