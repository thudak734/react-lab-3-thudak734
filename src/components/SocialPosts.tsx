import React, { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css"

function SocialPosts() {

const [posts, setPost] = useState<Post[]>([
    {title:"went to class", thought:"learned something"},
    {title:"skipped class", thought:"learned nothing"},
    {title:"fell asleep in class", thought:"dreamed i learned something"}
]);

const [hidden, setHidden] = useState<boolean>(false);

function handlePostFormSubmit(post: Post) {
    setPost((prev) => [...posts,post]);
}
function handleDeletePost(index:number) {
    setPost(prev => [...prev.slice(0, index), ...prev.slice(index+1)]);
}

    return(
        <div className="SocialPosts">
        <h1>My Thoughts</h1>
        <button className="newThought" onClick={() => setHidden(true)}>
            New Thought
        </button>
        <div className="Post-Container">
           {posts.map((post, i)=> (
               <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)}/>
           ))}
           {hidden ? <PostForm onSubmit={handlePostFormSubmit} onClose= {()=>setHidden(false)}/> : null}
        </div>
        {/* <button className="newThought">Post My Thoughts</button> */}
        </div>
    )
}

export default SocialPosts