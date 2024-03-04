import React from 'react';
import '../css/Home.css';
import Sidebar from '../../components/js/Sidebar';
import Feed from '../../components/js/Feed';

function Home() {
	return (
		<div className='container'>
			<Sidebar />
			
			<Feed />

			{/* Trends */}

			{/* WhoToFollow */}
		</div>
	)
}

export default Home;