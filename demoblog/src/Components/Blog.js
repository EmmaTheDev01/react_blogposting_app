import React, { useState } from "react";
import "./styles.css";
import PostBlog from "./PostBlog";
const Blog = () => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
  };
  return (
    <div>
      <div className="container">
        <div className="post_section">
          <h5>Create a post</h5>
          <form className="inputs" onSubmit={handleSubmit}>
            <textarea
              className="post_text"
              placeholder="Add a post"
              name="blog"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button className="post_btn">Post</button>
          </form>
        </div>
      </div>
      <div className="read_section">
        <p className="post_content" onChange={(e) => setText(text)}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Blog;
