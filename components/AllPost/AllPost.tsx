import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostItem from './PostItem';
import styles from './styles.module.css';
import { getAllPost } from '../../store/post/actions';

const AllPost: React.FC = () => {
	const dispatch = useDispatch();
	const list = useSelector(({ post }) => post.postList);
	const error = useSelector(({ post }) => post.error);
	const isError = useSelector(({ post }) => post.isError);

	useEffect(() => {
		dispatch(getAllPost());
	}, [getAllPost]);

	return (
		<div>
			{isError && <div className={styles.error}>{error}</div>}
			{list && list.length === 0 && <div>No posts</div>}
			{list &&
				list.map(elem => {
					return <PostItem key={elem.id} element={elem} />;
				})}
		</div>
	);
};

export default AllPost;
