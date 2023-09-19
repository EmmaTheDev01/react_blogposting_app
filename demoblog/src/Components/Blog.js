import React from 'react'
import './styles.css'
const Blog = () => {
  return (
    <div className='container'>
        <div className='post_section'>
            <h5>Create a post</h5>
            <div className='inputs'>
                <textarea className='post_text' placeholder='Add a post'></textarea>
                <button className='post_btn'>Post</button>
            </div>
            <div className='read_section'>
                <p className='post_content'>
                    Hello World!
                </p>
            </div>
        </div>
    </div>
  )
}

export default Blog