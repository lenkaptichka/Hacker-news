import React from 'react';
import '../styles/SubComment.css';

const SubComment = ( {text} ) => {
	const commentText = text.text;
	
	return(
		<>
			{text.deleted 
			? (<div className="comments__second-items comments__second-items_deleted">*Sorry, this comment has been deleted</div>)
			: (<div className="comments__second-items" dangerouslySetInnerHTML={{__html: commentText}} />)
			}
		</>
	)
}

export default SubComment;