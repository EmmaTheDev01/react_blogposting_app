import React, { useState } from "react";
import './styles.css'

const BlogResult = () => {
    const [blog, setBlog] = useState([]);
  return (
    <div className="read_section">
      <p className="post_content"></p>
    </div>
  );
};

export default BlogResult;
