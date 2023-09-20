import React, { useState } from "react";
import "./styles.css";
const Blog = () => {
  const [Post, setPost] = useState(["Title: ", " Post:"]);
  const [author, setAuthor] = useState([" Author:"]);
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!Post) {
      alert("The Post form must be filled");
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: [Post, author],
    };
    setItems((oldList) => [...oldList, item]);
    setPost("");
    console.log(Post);
    console.log(items);
  };

  const deleteItem = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  };
  return (
    <div className="container">
      <textarea
        className="post"
        placeholder="Enter Post name"
        value={Post}
        onChange={(e) => setPost(e.target.value)}
      >
        {" "}
      </textarea>
      <input
        className="author"
        placeholder="Enter Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="add_btn" onClick={() => addItem()}>
        Add Post
      </button>

      <div className="display_post">
        {items.map((item) => {
          return (
            <p  data-text="author" className="post_text" key={item.id}>
              {item.value}
              <button
                className="delete_btn"
                onClick={() => deleteItem(item.id)}
              >
                Undo
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
