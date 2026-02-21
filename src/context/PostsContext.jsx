import React, { createContext, useState } from 'react'
import { secretsData } from '../data/secretsData'

export const PostsContext = createContext()

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState(secretsData)

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  )
}
