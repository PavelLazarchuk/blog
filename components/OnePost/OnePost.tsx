import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Text from '../../shared/Text';
import Title from '../../shared/Title';
import styles from './styles.module.css';
import { getOnePost } from '../../store/post/actions';

export interface OnePostProps {
	id: any;
}

const OnePost: React.FC<OnePostProps> = ({ id }) => {
	const dispatch = useDispatch();
	const post = useSelector(({ post }) => post.post);
	const error = useSelector(({ post }) => post.error);
	const isError = useSelector(({ post }) => post.isError);

	useEffect(() => {
		if (id) dispatch(getOnePost(id));
	}, [getOnePost, id]);

	return (
		<>
			<div className={styles.post}>
				{isError && <div className={styles.error}>{error.massage}</div>}
				{post && (
					<>
						<Title text={post.title} />
						<Text className={styles.text}>{post.body}</Text>
					</>
				)}
				{post && post.comments.length === 0 && <div className={styles.center}>No comments</div>}
				{post && post.comments.length > 0 && (
					<>
						<div className={styles.center}>Comments</div>
						{post.comments.map(elem => {
							return (
								<div key={elem.id} className={styles.comment}>
									{elem.body}
								</div>
							);
						})}
					</>
				)}
			</div>
		</>
	);
};

export default OnePost;
