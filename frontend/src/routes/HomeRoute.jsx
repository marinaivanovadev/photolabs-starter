import React from 'react';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import '../styles/HomeRoute.scss';


const HomeRoute = ({ topics, isFavPhotoExist, photos, favorites, updateFavorites, openModal, fetchPhotosByTopic }) => {
    // Function to handle topic clicks
    const handleItemClick = (topicId) => {
        // fetchPhotosByTopic function when a topic is clicked
        fetchPhotosByTopic(topicId);
    };

    return (
        <div className="home-route">
             {/* Include the Top Navigation Bar */}
            
            <TopNavigationBar 
            topics={topics}
            isFavPhotoExist={isFavPhotoExist}
            onTopicClick={handleItemClick}
            />

             {/* Include the Photos Section */}
            <PhotoList 
            photos={photos}
            favorites={favorites}
            updateFavorites={updateFavorites}
            openModal={openModal}
            />

        </div>
    );
};

export default HomeRoute;