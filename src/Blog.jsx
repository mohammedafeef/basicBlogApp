
import React,{ useState,useEffect } from 'react';
import { Route , Switch , Redirect } from 'react-router-dom';
import Blog_home from './components/Blog_home';
import Blog_contact from './components/Blog_contact';
import Blog_create from './components/Blog_create';
import Blog_nav from './components/Blog_nav';
import Blogs from './components/Blogs'
import Blog_indi from './components/Blog_indi';
import uuid from 'react-uuid';
import db from "../firebase";
const Blog = () =>{
    const [blogs,setblog]=useState([''])
        // {
        //     title:"craking",
        //     summry:"craking something that can be done by people who know much about computers and programming",
        //     date:"24-3-2020 thursday",
        //     id:uuid()

        // },
        // {
        //     title:"scripting",
        //     summry:"scripting something that can be done by people who know much about computers and programming",
        //     date:"25-4-2020 thursday",
        //     id:uuid()
        // },
        // {
        //     title:"pentesting",
        //     summry:"pentesting something that can be done by people who know much about computers and programming",
        //     date:"3-5-2020 thursday",
        //     id:uuid()
        // },
        // {
        //     title:"bypassing",
        //     summry:"bypassing something that can be done by people who know much about computers and programming",
        //     date:"24-20-2020 thursday",
        //     id:uuid()
        // }
    useEffect(()=>{
        // console.log(db.collection('blogs').onSnapshot())
        db.collection('blogs').onSnapshot((snapshot)=>{
            console.log(snapshot.docs.map((doc)=>doc.data()))
          setblog(snapshot.docs.map((doc)=>({id:doc.id,title:doc.data().title,summry:doc.data().summry,date:doc.data().date})   ))
        })
      },[])
    const submitform = (data) =>{
        // console.log(data)
        // console.log('submit called')
        // setblog((pre)=>{
        //     return(
        //         [
        //         ...pre,data
        //     ]
        //     )
        // })
        // console.log(blogs)
        db.collection('blogs').add(data);
    }
    const deleteItem =(id)=>{
        // console.log('deletecalled')
        // setblog((pre_value)=>{
        //     return(
        //         pre_value.filter((blog)=>{
        //             console.log(id!=blog.id)
        //             return id!==blog.id;
        //         })
        //     )

        // })
        // console.log('blog afterdeletion',blogs)
        db.collection('blogs').doc(id).delete()
    }
    return(
    <>
        <Blog_nav/>
        <Switch>
            <Route exact path='/' component={()=><Blog_home key={uuid()}/>}/>
            <Route path='/Blog_contact' component={()=><Blog_contact key={uuid()}/>}/>
            <Route path='/Blog_create' component={()=><Blog_create formsubmition={submitform} key={uuid()}/> }/>
            <Route path='/Blogs' component={()=><Blogs blog={blogs} key={uuid()}/>}/>
            <Route path='/Blog/:id' component={()=><Blog_indi blog={blogs} remItem={deleteItem} key={uuid()}/>}/>
            <Redirect to='/'/>
        </Switch>
    </>
    )
}
export default Blog;