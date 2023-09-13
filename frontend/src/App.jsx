import React from 'react';
import './App.scss';

import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';

// import TopicListItem from 'components/TopicListItem';
// import PhotoListItem from './components/PhotoListItem';


// Note: Rendering a single component to build components in isolation
const App = () => {
  // const photos = new Array(1).fill({
  //   id: "1",
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //   },
  //   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  //   username: "Joe Example",
  //   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  // });
  // { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) }
  

  return (
    <div className="App">
        {/* {photos.map((photo) => (
      <PhotoListItem key={photo.id} props={photo}/>
      ))} */}

      <TopNavigationBar />
      {/* <TopicList /> */}
      {/* <TopicListItem /> */}
      <PhotoList />
      
          
    </div>
  );
};

export default App;
