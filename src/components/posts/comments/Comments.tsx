import React, { useState } from 'react';
import axios from 'axios';
import Comment, { CommentI } from './Comment';
import useDelay from '../../../hooks/useDelay';
import Spinner from '../../../ui/Spinner';

interface CommentsI {
	postId: number,
}

const Comments: React.FC<CommentsI> = ({postId}: CommentsI) => {
	const [comments, setComments] = useState<CommentI[]>();

	const loadComments = async () => {
		if (!comments) {
			await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
				.then((response) => {
					setComments(response.data);
				})
				.catch((error) => {
					throw Error(error);
				})
		}
	}

    return (
		<div>
			<div className="accordion mb-4" id={`accordionExample${postId}`}>
				<div className="accordion-item">
					<h2 className="accordion-header" id={`headingTwo${postId}`}>
						<button
							className="accordion-button collapsed"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target={`#collapseTwo${postId}`}
							aria-expanded="false"
							aria-controls={`collapseTwo${postId}`}
							onClick={loadComments}
						>
							Посмотреть комментарии
						</button>
					</h2>
					<div id={`collapseTwo${postId}`}
						 className="accordion-collapse collapse"
						 aria-labelledby={`headingTwo${postId}`}
						 data-bs-parent={`#accordionExample${postId}`}
					>
						<div className="accordion-body">
							{
								comments?.map(comment => {
									const {id, email, body} = comment;
									return (
										<Comment
											id={id}
											email={email}
											body={body}
											key={id}
										/>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Comments;
