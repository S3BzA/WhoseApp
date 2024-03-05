import React from 'react';
import '../css/Profile.css';
import Sidebar from '../../components/js/Sidebar';
import ProfileHeader from '../../components/js/ProfileHeader';

function Profile() {
  return (
    <div className='container'>
      <Sidebar />
      <ProfileHeader />
    </div>
  )
}

export default Profile;