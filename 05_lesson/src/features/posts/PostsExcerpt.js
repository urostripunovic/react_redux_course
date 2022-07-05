import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({ postId }) => { //
    const post = useSelector(state => selectPostById(state, postId))

    return (
        <article>
            <h2>{post.title}</h2>
            <p className="excerpt">{post.body.length < 75 ? post.body : post.body.substring(0, 75)+'...'}</p>
            <p className="postCredit">
                <Link to={`post/${post.id}`}>View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
// PostsExcerpt = React.memo(PostsExcerpt); // let på rad 7 istället för const

export default PostsExcerpt

/**
 * Man kan lösa det snabbt genom att göra om det till en let och sen använda React.memo komponenten kommer inte att rendera på nytt såvida prop inte skickar inte något 
 * nytt värde. Inte någon rekomenderad lösning, normalisering är rekommenderad. 
 */