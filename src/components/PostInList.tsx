import { useState } from "react";
import Post from "../models/Post";
import "./PostInList.css"

interface postProp {
    post: Post;
    onDelete: () => void;
}

function PostInList({ post, onDelete }: postProp) {
    const posts = { title: post.title, thought: post.thought }

    return (
        <div className="PostInList">
            <p className="post-title">{post.title}
            </p>
            <p className="post-body">{post.thought}</p>
            <div className="garbage"><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
                onClick={onDelete}
            >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
            </svg>
            </div>
        </div>
    )
}

export default PostInList

