import React from "react";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const { id, title, body } = props.post;
  let history = useHistory();
  const showDetails = (id) => {
    const url = `post/${id}`;
    history.push(url);
  };
  return (
    <div>
      <h2>
        {" "}
        <strong>id:{id}</strong> {title}{" "}
      </h2>
      <p>{body}</p>
      <button onClick={() => showDetails(id)}>Show Details</button>
    </div>
  );
};

export default Post;
