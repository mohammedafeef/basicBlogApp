import React, { useState } from 'react';
import uuid from 'react-uuid';
import firebase from "firebase";
import db from '../../firebase';
const Blog_create  =(props)=>{
    const days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentdate= new Date()
    
    // console.log(`${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()} ${days[currentdate.getDay()]}`,days[currentdate.getDay()])
    const [newBlog,setnewBlog]=useState({
        title:'',
        summry:'',
        timestamps:firebase.firestore.FieldValue.serverTimestamp(),
        date:`${currentdate.getDate()}-${currentdate.getMonth()+1}-${currentdate.getFullYear()} ${days[currentdate.getDate()]}`,
});
    const makechange=(e)=>{
        let { name , value }=e.target;
        setnewBlog((pre)=>{
            return{
                ...pre,
                [name]:value
            };
        })
    }

    const finalsubmition=(e)=>{
        e.preventDefault()
        // props.formsubmition(newBlog);
        db.collection('blogs').add(newBlog);
    }
    return(
        <>
            <div className='container'>
                <div className='row home_row'>
                    <div className='col-10 mx-auto'>
                    <div className='heading_section mb-3'>
                        <span className='display-4 text-center text-capitalize'>
                            create blog
                        </span>
                        <hr className='w-25 text-center'/>
                    </div>
                    <form onSubmit={finalsubmition}>
                    <div className='form_create'>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Blog title</label>
                            <input type="text" 
                            className="form-control" 
                            id="exampleFormControlInput1" 
                            placeholder="enter the title" 
                            onChange={makechange} 
                            name='title'
                            value={newBlog.title}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" 
                            id="exampleFormControlTextarea1" 
                            rows="3" 
                            onChange={makechange} 
                            name='summry'
                            value={newBlog.summry}
                            />
                        </div>
                        <button type="submit" className="btn btn-outline-dark" >
                        Submit
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-earmark-plus-fill link_icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM8.5 7a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V11a.5.5 0 0 0 1 0V9.5H10a.5.5 0 0 0 0-1H8.5V7z"/>
                        </svg>
                        </button>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog_create;