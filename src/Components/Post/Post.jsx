import './Post.css'

export default function Post({ content, date }) {

    return (
        <div className='post'>
            <p className='date'>{date}</p>
            <p>{content}</p>
            <span>-Anónimo</span>
        </div>
    )
}
