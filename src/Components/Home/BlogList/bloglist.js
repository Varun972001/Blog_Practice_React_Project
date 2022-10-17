import BlogItem from "./BlogItem/blogItem"
import './bloglist'

function BlogList(props)
{
    return(<>
    <h1>Hy</h1>
    {/* {props.blog.map(blog=>{
        <BlogItem blogitem={blog} />
    })} */}
    <BlogItem />
    </>)
}

export default BlogList;