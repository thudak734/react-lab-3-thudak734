import { FormEvent, useState } from "react";
import Post from "../models/Post";
import SocialPosts from "./SocialPosts"
import "./PostForm.css"
import Modal from 'react-modal';

interface Props {
    onSubmit: (post:Post)=>void;
    onClose: ()=> void;
}

function PostForm({ onSubmit, onClose }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [thought, setThought] = useState("");
    function handlePostFormSubmit(e:FormEvent) {
        e.preventDefault();

        const newPost: Post ={
            title: title,
            thought: thought
        };

        onSubmit(newPost);
        setTitle("");
        setThought("");

    }
    

    return(
        <div className="PostForm" onSubmit={handlePostFormSubmit}>
           
             <h2>Enter Some Thoughts..</h2>
      <form>
      
        <p>
          <label htmlFor="title-form">Title:</label><br/>
          <input id="title-form" type="text"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </p>
        <p>
          <label htmlFor="thought-form">Thoughts:</label><br/>
          <input id="thought-form" type="text"
            value={thought}
            onChange={e => setThought(e.target.value)} />
        </p>
        
        <p>
          <button type="submit">Submit</button>
        </p>
        <svg 
       
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      fill="currentColor" 
      className="bi bi-trash-fill" 
      viewBox="0 0 16 16"
      onClick={onClose}
      >
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
      </form>
      
        </div>
    );

}
export default PostForm