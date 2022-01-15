import { useState } from "react";
import Post from "../models/Post";
import "./PostInList.css"

interface postProp {
    post: Post;
    onDelete: () => void;
}

function PostInList({post, onDelete}: postProp) {
    const posts = {title: post.title, thought:post.thought}
   
    return(
        <div className="PostInList" onClick={onDelete}>

            <p>{post.title}</p>
            <p>{post.thought}</p>

        </div>
    )
}

export default PostInList

