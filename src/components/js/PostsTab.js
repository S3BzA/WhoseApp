import React from 'react';
import '../css/PostsTab.css';

const PostsTab = () => {
  return (
    <div className="postsContainer">
            <div className="heading">
                <span>Who to folllow</span>
            </div>
            <div className="accountToFollow">
                <div className="accountInfoDiv">
                    <div className="profileImg">
                        <img src="https://picsum.photos/200/200" alt="" />
                    </div>
                    <div>
                        <div className="accountInfo">
                            <div>
                                <h3>Marriot International</h3>
                                <p className="userHandle">@MarriottIntl</p>
                            </div>
                            <button>Follow</button>
                        </div>
                        <p className="bio">Welcome to Marriott International's newsroom on Twitter. Tweeting all things travel and hospitality from Marriott International headquarters.</p>
                    </div>
                </div>
            </div>
            <div className="accountToFollow">
                <div className="accountInfoDiv">
                    <div className="profileImg">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRKwg6ieNP05xjTSD4ppEBsUe6NnrMSNteA&usqp=CAU" alt="" />
                    </div>
                    <div className="account">
                        <div className="accountInfo">
                            <div>
                                <h3>NOEL DEYZEL</h3>
                                <p className="userHandle">@urdadnoel</p>
                            </div>
                            <button>Follow</button>
                        </div>
                        <p className="bio">Fitness & Mental Health IFBB Heavywieght Bodybuilder</p>
                    </div>
                </div>
            </div>
            <p className="seeMoreLink">See more</p>
        </div>
  )
}

export default PostsTab;