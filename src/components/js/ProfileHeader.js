import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/ProfileHeader.css";
import PostsTab from './PostsTab';
import LikesTab from "./LikesTab";
import RepliesTab from "./RepliesTab";
import MediaTab from "./MediaTab";
import HighlightsTab from "./HighlightsTab";
import ArticlesTab from "./ArticlesTab";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';

export default function ProfileHeader() {
    const [following, setFollowing] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [posts, setPosts] = useState(0);
    const [activeTab, setActiveTab] = useState('posts');
    const [profilePicture, setProfilePicture] = useState(null);
    const [headerImage, setHeaderImage] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    // to navigate to prev page
    const navigate = useNavigate();

    const handleProfilePictureImage = (event) => { setProfilePicture(event.target.files[0]); };

    const handleHeaderImage = (event) => { setHeaderImage(event.target.files[0]); };

    const handleEditClick = () => { setIsEditing(!isEditing); };

    const handleSaveClick = () => {
        // send data to backend
        setIsEditing(false);
    };

    // receive updated followers and following from backend and use to set state of each
    // useEffect(() => {
    //     setFollowing(following);
    //     setFollowers(followers);
    // }, [following, followers]);

    return (
        <div className="header">
            <div className="backNav">
                <div className="arrowIconDiv">
                    <ArrowBackIcon className="arrowIcon" onClick={()=> {navigate(-1)}} />
                </div>
                <div className="profileInfo">
                    <span className="username">Asa Siphuma</span>
                    <span className="numPosts">{ posts } posts</span>
                </div>
            </div>
            <div className="headerImg"></div>
            <div className="border">
                <div className="profileImg-profileBtn">
                    <div className="profileImgDiv">
                        <div className="image"></div>
                    </div>
                    <div className="editProfileBtnDiv">
                        <button className="editProfileBtn" onClick={handleEditClick}>Edit profile</button>
                        {isEditing && (<EditProfile />)}	
                    </div>
                </div>
                <div className="userInfo">
                    <h1 className="username">Asa Siphuma</h1>
                    <p className="userHandle">@Supaweird0</p>
                    <p className="dateJoined">
                        <svg viewBox="0 0 24 24" aria-hidden="true" class="calendarSvg"><g class="calendarIcon"><path class="calendarIcon" d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path></g></svg>
                        <span>Joined December 2022</span>
                    </p>
                    <div className="stats">
                        <a href="#s" className="following"><span className="numFollowing">{following}</span> Following</a>
                        <a href="#s" className="followers"><span className="numFollowers">{followers}</span> Followers</a>
                    </div>
                </div>
            </div>
            <div className="navLinks">
                <div className="link">
                    <a href="#s" className={ activeTab === 'posts' ? 'active' : '' } onClick={() => setActiveTab('posts')}>
                        <div className="linkTextDiv">
                            <span>Posts</span>
                        </div>
                    </a>
                </div>
                <div className="link">
                    <a href="#s" className={ activeTab === 'replies' ? 'active' : '' } onClick={() => setActiveTab('replies')}>
                        <div className="linkTextDiv">
                            <span>Replies</span>
                        </div>
                    </a>
                </div>
                <div className="link">
                    <a href="#s" className={ activeTab === 'highlights' ? 'active' : '' } onClick={() => setActiveTab('highlights')}>
                        <div className="linkTextDiv">
                            <span>Highlights</span>
                        </div>
                    </a>
                </div>
                <div className="link">
                    <a href="#s" className={ activeTab === 'articles' ? 'active' : '' } onClick={() => setActiveTab('articles')}>
                        <div className="linkTextDiv">
                            <span>Articles</span>
                        </div>
                    </a>
                </div>
                <div className="link">
                    <a href="#s" className={ activeTab === 'media' ? 'active' : '' } onClick={() => setActiveTab('media')}>
                        <div className="linkTextDiv">
                            <span>Media</span>
                        </div>
                    </a>
                </div>
                <div className="link">
                    <a href="#s" className={ activeTab === 'likes' ? 'active' : '' } onClick={() => setActiveTab('likes')} >
                        <div className="linkTextDiv">
                            <span>Likes</span>
                        </div>
                    </a>
                </div>
            </div>
            <div className="tab-content">
                {activeTab === 'posts' && <PostsTab />}
                {activeTab === 'likes' && <LikesTab />}
                {activeTab === 'replies' && <RepliesTab />}
                {activeTab === 'media' && <MediaTab />}
                {activeTab === 'highlights' && <HighlightsTab />}
                {activeTab === 'articles' && <ArticlesTab />}
            </div>
        </div>
    );
}


function EditProfile() {
    return (
        
        <div className="overlay">
            <div className="editProfileContainer">
                <CloseIcon/>
                <h1>Edit Profile</h1>
                <div>
                    <p>Edit profile</p>

                </div>
            </div>
        </div>
    );
}