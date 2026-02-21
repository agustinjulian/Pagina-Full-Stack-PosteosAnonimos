import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import ListOfPosts from '../Components/ListOfPosts/ListOfPosts'
import WritePostForm from '../Components/WritePostArea/WritePostForm'
import { PostsContext } from '../context/PostsContext'

export default function HomeScreen() {
    const { posts } = useContext(PostsContext)

    return (
        <>
            <h1>Tu secreto 🤫</h1>
            <Link to="/about">¿Qué es esto?</Link>
            <p>¿Tenés un secreto que querés compartir? ¡Este es el lugar indicado!</p>
            <WritePostForm />
            <ListOfPosts posts={posts} />
        </>
    )
}
