import React from "react";

const PostItem = (props) => {
    
    return (
        <div className='post'>
            <div className='post-content'>
                <strong>{props.forProps.id}. {props.forProps.title}</strong>
                <div>{props.forProps.body}</div>
            </div>
            <div className='post-btns'>
                <button>Удалить</button>
            </div>
        </div>
    )
}

export default PostItem;