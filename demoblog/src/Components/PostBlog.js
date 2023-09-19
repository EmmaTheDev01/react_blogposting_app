import React, { useState } from 'react'
import Blog from './Blog';

const PostBlog = () => {
    const [text, setText] = useState("");
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(text)
    }
  return (
    <div className='post_section'>
    <h5>Create a post</h5>
    <form className='inputs' onSubmit={handleSubmit}>
        <textarea className='post_text' placeholder='Add a post' name='blog' onChange={ (e) => setText(e.target.value)}></textarea>
        <button className='post_btn'>Post</button>
    </form>
</div>
  )
}

export default PostBlog