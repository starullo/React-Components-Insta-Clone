// You do not need to change any code in this file
import React from 'react';
import styled from 'styled-components'


const PostHeader = props => {
  // 🔥 Make sure the parent of PostHeader is passing the right props!
  const { thumbnailUrl, username } = props;

  const PinkishBackG = styled.div`
  background-color: #FFF0F5;
  `
  return (
    <PinkishBackG className='post-header'>
      <div className='post-thumb-wrapper'>
        <img
          alt='post header'
          className='post-thumb'
          src={thumbnailUrl}
        />
      </div>
      <h2>{username}</h2>
    </PinkishBackG>
  );
};

export default PostHeader;
