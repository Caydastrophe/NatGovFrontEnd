import React from "react";
import Post from "../post/Post";

const Feed = props => {
    
    return (
        <div>
            <ul className="feed">
                {props.post.map((post) => {
                    return(
                        <li className="post" key={post.id}>
                            <Post post={post} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Feed;