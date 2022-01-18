import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './models/Post';
import PostInList from './components/PostInList';
import SocialPosts from './components/SocialPosts';
import Modal from 'react-modal';

function App() {
  return (
    <div className="App">
      
     <SocialPosts />
    </div>
  );
}

export default App;
