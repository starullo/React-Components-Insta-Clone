import React from 'react';
import Comment from './Comment';
import './Comments.css';
import styled from 'styled-components';

const Bordered = styled.div`
box-sizing: border-box;
border: solid 3px purple;
background-color: #FFF0F5;
`

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;

  return (
    <Bordered >
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment=>{
        return  <Comment comment={comment} />
      })}
    </Bordered >
  );
};

export default Comments;
