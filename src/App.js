/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, {useState} from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
// Import the dummyData
import './App.css';
import LikeSection from './components/Posts/LikeSection';
import Post from './components/Posts/Post';
import PostHeader from './components/Posts/PostHeader';
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';
import data from './dummy-data';

const App = () => {
  const [posts, setPosts] = useState(data);
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  /* stretch (to make it so you can only like a post one time) */
  const newLikes = data.map(obj=>{
    return {id: obj.id, likes: obj.likes + 1}
  });

  
  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    setPosts(posts.map(post=>{
      if (post.id === postId) {
        const obj = newLikes.filter(obj=>{
          return obj.id === postId
        });
        return {...post, likes: obj[0].likes}
      } return post;
    }))
  };

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <SearchBar posts={posts} />
      <Posts likePost={likePost} posts={posts} />
      {/* Check the implementation of each component, to see what props they require, if any! */}

    </div>
  );
};

export default App;
