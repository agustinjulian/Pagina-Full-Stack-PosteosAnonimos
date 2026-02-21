import Post from '../Post/Post'
import './ListOfPosts.css'

export default function ListOfPosts({ posts = [] }) {
    return (
        <div className="listOfPosts">
            {posts.map((post) => (
                <Post key={post.id} content={post.content} date={post.date} />
            ))}
        </div>
    )
}
