import React,{useState} from 'react'
import './styles.css'
import BlogResult from './BlogResult';
import PostBlog from './PostBlog';
const Blog = () => {
    
  return (
    <div className='container'>
        <PostBlog/>
        <BlogResult/>
    </div>
  )
}

export default Blog