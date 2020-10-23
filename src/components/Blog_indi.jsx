import React,{useState} from 'react';
import { Redirect, useHistory, useParams } from 'react-router-dom';
const Blog_indi  =(props)=>{
    const {id} =useParams();
    const history=useHistory();
    const [selected_blog]=useState(
        props.blog.find((value)=>{
            console.log(id===value.id ,typeof id ,typeof value)
            return id===value.id;
        })
    )
    
    return(
        selected_blog?(
    <>
            <div className='container-fluid bg-light p-3'>
                <div className='row' >
                <div className='col-md-10 col-11 mx-auto d-flex justify-content-between'>
                    <div className='back_icon' >
                    <button type='button' className='btn btn-outline-dark border-0' onClick={()=>{history.goBack()}}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left-circle link_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
                    </svg>
                    </button>
                    </div>
                    <div className='delete_icon' onClick={()=>{
                        props.remItem(selected_blog.id);
                        }}>
                    <button type='button' className='btn btn-outline-dark border-0'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-x-fill link_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.854 7.146a.5.5 0 1 0-.708.708L7.293 9l-1.147 1.146a.5.5 0 0 0 .708.708L8 9.707l1.146 1.147a.5.5 0 0 0 .708-.708L8.707 9l1.147-1.146a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146z"/>
                        </svg>
                    </button>
                    </div>
                </div>
                <div className='col-md-10 col-11 mx-auto'>
                    <div className='blog_date text-muted mx-2'>
                        {selected_blog.date}
                    </div>
                    <div className='blog_heading display-4'>
                        <div className='blog_title'>
                            {selected_blog.title}
                        </div>

                    </div>
                    <div className='blog_summry h2'>
                        {selected_blog.summry}
                    </div>
                </div>
                </div>
            </div>
    </>
        ):(
        <Redirect to='/Blogs'/>
        )
    );

};
export default Blog_indi;