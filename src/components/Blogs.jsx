import React from 'react';
import Blog_item from './Blog_item';
const Blogs  =(props)=>{
    return(
        <>
        <div className='container'>
            <div className='row g-5 my-4'>
            {
                props.blog.map((blog)=>{
                    return(
                        <div className='col-md-5 col-11 mx-auto'>
                        <Blog_item blog={blog} key={blog.id}/>
                        </div>
                        )
                })
            }

            </div>
            
        </div>
        </>
    )
}
export default Blogs;