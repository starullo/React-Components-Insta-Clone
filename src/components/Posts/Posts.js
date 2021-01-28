import React, {useState, useEffect} from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;

  return (
    <div className='posts-container-wrapper'>
      {props.searched ? posts.filter(p=>{
        let comments = p.comments.map(obj=>{
        return obj.text.split(' ').filter(x=>x).join(' ')
        }).join(' ').split(' ')
        console.log(comments, props.searchedWord)
        return comments.includes(props.searchedWord)
      }).map(p=>{
        console.log(p)
        return (
          <Post post={p} likePost={likePost}/>
        )
      }) : posts.map(p=><Post post={p} likePost={likePost}/>)}
      {/* Map through the posts array returning a Post component at each iteration */}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
