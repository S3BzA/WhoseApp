import React from 'react';
import '../css/Feed.css';
import { Avatar, Button } from '@mui/material';

function Feed() {
  return (
    <div className='container--feed'>
      <div className="container--feed-header">
         <div className="container--feed-header-top">
            <Button className='container--feed-header-top-button' variant='text'>For you</Button>
            <Button className='container--feed-header-top-button' variant='text'>Following</Button>
         </div>
         <div className="container--feed-header-tweetBox">
            <div className='tweet-input'>
               <Avatar></Avatar>
               <input type='text' placeholder="What is happening!?"></input>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Feed