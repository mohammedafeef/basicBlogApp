import React from 'react';
const Blog_home  =()=>{
    return(
        <>
        <div className='container'>
            <div className='row home_row'>
                <div className='col-md-8 col-10 mx-auto'>
                    <div className='caption text-left display-4'>
                        welcome to <br/> <span className='display-1 text-bold text-capitalize'>
                            hackers playground
                        </span>
                    </div>
                    <div className='home_button'>
                    <button type="button" className="btn btn-outline-dark">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right-circle-fill mx-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
                    </svg>
                        get more
                    </button>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Blog_home;