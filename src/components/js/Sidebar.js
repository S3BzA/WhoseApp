import React, { useEffect, useState } from 'react';
import '../css/Sidebar.css';
import { Button } from "@mui/material";
import { Link, useLocation } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MailIcon from '@mui/icons-material/Mail';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PeopleIcon from '@mui/icons-material/People';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Sidebar() {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  return (
    <div className='sidebar'>
      <div className="sidebar--options">
        {/* "Premium" and "More" aint really pages, should just do a pop up */}
        <Button component={Link} to='/home' variant='text' className='sidebar--button'><XIcon /></Button>
        <Button component={Link} to='/home' variant='text' className={'sidebar--button' + (url === '/home' ? '-active' : '')}>{(url === '/home' ? <HomeIcon /> : <HomeOutlinedIcon />)}Home</Button>
        <Button component={Link} to='/explore' variant='text' className={'sidebar--button' + (url === '/explore' ? '-active' : '')}><SearchIcon />Explore</Button>
        <Button component={Link} to='/notifications' variant='text' className={'sidebar--button' + (url === '/notifications' ? '-active' : '')}>{(url === '/notifications' ? <NotificationsIcon /> : <NotificationsNoneIcon />)}Notifications</Button>
        <Button component={Link} to='/messages' variant='text' className={'sidebar--button' + (url === '/messages' ? '-active' : '')}>{(url === '/messages' ? <MailIcon /> : <MailOutlineIcon />)}Messages</Button>
        <Button component={Link} to='/lists' variant='text' className={'sidebar--button' + (url === '/lists' ? '-active' : '')}>{(url === '/lists' ? <FeaturedPlayListIcon /> : <FeaturedPlayListOutlinedIcon/>)}Lists</Button>
        <Button component={Link} to='/bookmarks' variant='text' className={'sidebar--button' + (url === '/bookmarks' ? '-active' : '')}>{(url === '/bookmarks' ? <BookmarkIcon /> : <BookmarkBorderIcon/>)}Bookmarks</Button>
        <Button component={Link} to='/communities' variant='text' className={'sidebar--button' + (url === '/communities' ? '-active' : '')}>{(url === '/communities' ? <PeopleIcon/> : <PeopleOutlineIcon />)}Communities</Button>
        <Button component={Link} to='/premium' variant='text' className='sidebar--button'><XIcon />Premium</Button>
        <Button component={Link} to='/profile' variant='text' className={'sidebar--button' + (url === '/profile' ? '-active' : '')}>{(url === '/profile' ? <PersonIcon /> : <PermIdentityIcon />)}Profile</Button>
        <Button component={Link} to='/more' variant='text' className='sidebar--button'><MoreHorizIcon />More</Button>

        <Button variant='text' className='sidebar--button-post'>Post</Button>
      </div>
    </div>
  )
}

export default Sidebar