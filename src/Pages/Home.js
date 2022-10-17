import React, { useState } from 'react';
import BlogList from '../Components/Home/BlogList/bloglist';
import Header from '../Components/Home/Header/Header';
import Search from '../Components/Home/Searchbar/search';
import { blogList } from '../config/data';
import Empty from '../Components/Common/EmptyList/empty';

function Home()
{

    const [blogs,setblogs]=useState(blogList);
    const [searchkey,setsearchkey]=useState('');
        
    const handleSearch=(event)=>{
        event.preventDefault();
        handleSubmit();
    }

    const handleSubmit=()=>{
        var filtered=[],result;
        const allblogs=blogList;
        allblogs.filter((blog)=>{
            result=blog.category.includes(searchkey);
            if(result)
                filtered.push(blog);
        })
        setblogs(filtered);
    }

    const handleclear=()=>{
        setblogs(blogList);
        setsearchkey('');
    }

    return(<>
    <Header />
    <Search value={searchkey} handlesearch={(event)=>{setsearchkey(event.target.value)}} clearsearch={handleclear} formsubmit={handleSearch}/>
    {blogs.length?<BlogList blog={blogs}/>:<Empty/>}
    </>)

}

export default Home;