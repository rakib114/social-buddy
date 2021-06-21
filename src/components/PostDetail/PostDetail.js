import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comment from "../Comment/Comment";
const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  //   console.log(post);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);
  return (
    <div>
      <p>
        <b>User Posted: </b>
        {post.id}
      </p>
      <h3> Title: {post.title}</h3>
      <p>{post.body}</p>
      <p>
        <strong>Number Of Comments: </strong>
        {comments.length}
      </p>
      <h3>Comment About This Post</h3>
      {comments.map((comment) => (
        <Comment id={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default PostDetail;
