import React, { useState } from "react";
import "./styles.css";
const Blog = () => {
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    React.createElement("div", { className: "read_section" }, text);
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
            <button type="submit" className="post_btn" onClick={handleSubmit}>
              Post
            </button>
          </form>
        </div>
      </div>
      <div className="read_section">
        <p className="post_content">{text}</p>
      </div>
    </div>
  );
};

export default Blog;
