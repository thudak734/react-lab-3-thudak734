import React, { useState, useEffect } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css"
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function SocialPosts() {

    useEffect(() => {
        Modal.setAppElement("#formContainer")
    })

    const [posts, setPost] = useState<Post[]>([
        { title: "went to class", thought: "learned something" },
        { title: "skipped class", thought: "learned nothing" },
        { title: "fell asleep in class", thought: "dreamed i learned something" }
    ]);

    const [formOpen, setFormOpen] = useState<boolean>(false);

    function handlePostFormSubmit(post: Post) {
        setPost((prev) => [...posts, post]);
        setFormOpen(false);
    }

    function handleDeletePost(index: number) {
        setPost(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }

    return (
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button className="newThought" onClick={() => setFormOpen(true)}>
                New Thought
            </button>
            <div className="Post-Container">
                {posts.map((post, i) => (
                    <PostInList key={i} post={post} onDelete={() => handleDeletePost(i)} />
                ))}
                <div id="formContainer">
                    <Modal isOpen={formOpen} style={customStyles}>
                        <PostForm onSubmit={handlePostFormSubmit} onClose={() => setFormOpen(false)} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default SocialPosts