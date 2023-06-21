import React, {useState} from 'react';
import { CommentI } from './comment/Comment';
import Comment from "./comment/Comment";
import axios from "axios";

interface CommentsI {
	postId: number,
}

export const loadComments = async (postId: number) => {
	try {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
		const response = await axios.get(url);
		return response.data;
	}
	catch (error) {
		return null;
	}
}

const Comments: React.FC<CommentsI> = ({postId}: CommentsI) => {
	const [comments, setComments] = useState<CommentI[]>();
	const [isDataLoading, setIsDataLoading] = useState(false);

	const toLoad = async () => {
		if (!isDataLoading) {
			setIsDataLoading(true);

			loadComments(postId)
				.then(data => {
					console.log(data)
					setComments(data);
				})
				.finally(() => {
					setIsDataLoading(false);
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
							onClick={toLoad}
							data-testid="btn"
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
								comments && comments.map(comment => {
									const {id, email, body} = comment;
									return (
										<div data-testid="comment" key={id}>
											<Comment
												id={id}
												email={email}
												body={body}
												key={id}
											/>
										</div>
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
