import BlogItem from "./BlogItem/blogItem"
import './bloglist.css'

function BlogList(props)
{
    console.log(props);
    return(
    <div className="blog-list">
        {props.blog.map((blog_det)=>{
            return <BlogItem blogitem={blog_det} key={blog_det.id}/>
        })}
    </div>
    )
}

export default BlogList;