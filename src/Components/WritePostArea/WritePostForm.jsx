import React, { useState, useContext } from 'react'
import { PostsContext } from '../../context/PostsContext'

export default function WritePostForm() {
    const [content, setContent] = useState("")
    const { posts, setPosts } = useContext(PostsContext)

    function addPost(content) {
        const nextId = posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1
        const newPost = {
        id: nextId,
        content,
        date: new Date().toLocaleDateString(),
        }
        setPosts(prev => [...prev, newPost])
    }


    function sumbitForm(event) {
        event.preventDefault()
        addPost(content)
        setContent("")
    };

    return (
        <form onSubmit={sumbitForm}>
            <textarea
                id="content"
                value={content}
                name="content"
                onChange={(event) => setContent(event.target.value)}
                placeholder="Escribe tu secreto..."
                rows="4"
                cols="40"
            />

            <div>
                <button type="submit">¡Publicar!</button>
            </div>
        </form>
    )
}
