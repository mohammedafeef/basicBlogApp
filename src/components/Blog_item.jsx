import React from 'react';
import {Link} from 'react-router-dom';
const Blog_item  =(props)=>{
    return(
    <>
            <Link to={`/Blog/${props.blog.id}`}  className='text-decoration-none text-dark'>
            <div className='container-fluid bg-light blog_section p-3'>
                <div className='blog_date text-muted mx-2'>
                    {props.blog.date}
                </div>
                <div className='blog_heading display-4'>
                    {props.blog.title}
                </div>
                <div className='blog_summry h2'>
                    {props.blog.summry}
                </div>
            </div>
            </Link>
    </>
    )
}
export default Blog_item;