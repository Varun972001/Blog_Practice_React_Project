import React from 'react';
import BlogList from '../Components/Home/BlogList/bloglist';
import Header from '../Components/Home/Header/Header';
import Search from '../Components/Home/Searchbar/search';

class Home extends React.Component
{
    render()
    {
        return(<>
        <Header />
        <Search />
        <BlogList />
        </>)
    }
}

export default Home;