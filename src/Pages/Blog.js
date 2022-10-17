import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Empty from '../Components/Common/EmptyList/empty';
import Label from '../Components/Common/Label/Labe';
import { blogList } from '../config/data';
import './Blog.css'

let Blog=()=>
{
    const {id}=useParams();
    const [blog,setblog]=useState(null);
    useEffect(()=>
    {
        let blog=blogList.find((blog)=>{
            if(blog.id===parseInt(id))
                return blog
        });
        if(blog)
            setblog(blog);
    },[]);
   return(
    <div>
        <Link className="blog-back" to="/"><span>&#8592;</span> Go Back</Link>
        {
            blog?
            <div className="blog-wrap">
                <header>
                    <p className='blog-date'> Published {blog.createdAt}</p>
                    <h1>{blog.title}</h1>
                </header>
                <img className="blog-img" src={blog.cover} alt="Cover Image"></img>
                <p className='blog-desc'>{blog.description}</p>
            </div>:<Empty />
        }
    </div>
   )   
}

export default Blog;