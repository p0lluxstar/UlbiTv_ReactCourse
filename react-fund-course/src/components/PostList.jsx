import React from "react";
import PostItem from "./PostItem";

const PostList = ({list, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {list.map((nameFunction, index) =>
            <PostItem number={index + 1} forProps={nameFunction} key={nameFunction.id}/>
        )}
        </div>
    )
}

export default PostList;