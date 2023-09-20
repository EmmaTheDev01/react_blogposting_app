import React, { useState } from "react";
import './styles.css'

const BlogResult = ({ addToBlog }) => {
    const [blog, setBlog] = useState("");
  return (
    <div className="read_section">
      <p className="post_content">
        {blog}
      </p>
    
    </div>
  );
};

export default BlogResult;
