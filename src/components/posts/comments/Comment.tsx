import React from "react";

export interface CommentI {
	id: number,
	email: string,
	body: string,
}

const Comment: React.FC<CommentI> = ({
	email,
	body,
}: CommentI) => {

    return (
        <div className="mb-4 border rounded-2 p-3">
        	<div className="fs-4 mb-1" style={{overflowWrap: 'break-word'}}>{email}</div>
        	<div>
				<div className="">Комментарий:</div>
				<div className="fs-5">{body}</div>
			</div>
        </div>
    );
};

export default Comment;
