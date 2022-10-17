import { Link } from 'react-router-dom';
import Label from '../../../Common/Label/Labe';
import './blogItem.css'

function BlogItem(props)
{
    return(
    <div className='blog-item'>
        <img src={props.blogitem.cover} alt="Cover Image" className='blog-item-cover'></img>
        <Label head={props.blogitem.category}/>
        <h3>{props.blogitem.title}</h3>
        <p className='blog-item-desc'>{props.blogitem.description}</p>
        <footer>
            <div className='blog-item-author'>
                <img src={props.blogitem.authorAvatar} alt="Author Picture"></img>
                <div>
                    <h6>{props.blogitem.authorName}</h6>
                    <p>{props.blogitem.createdAt}</p>
                </div>
            </div>
            <Link className="blog-item-link" to={`/blog/${props.blogitem.id}`}>-></Link>
        </footer>
    </div>
    )
}

export default BlogItem;