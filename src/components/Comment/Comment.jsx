import React from 'react';

const Comment = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div style={{border:'1px, solid, gray', padding:'20px'}}>
            <h3>Name: {name}</h3>
            <p><b>Email: </b>{email}</p>
            <p>comment: {body}</p>
        </div>
    );
};

export default Comment;