import React from "react";

const Post = props => {

    return (
        <div>

            <div className="post-caption">
                {props.post.caption}
            </div>
        </div>
    );
}

export default Post;