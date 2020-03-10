import React from 'react';
import Link from 'next/link';

import Text from '../../../shared/Text';
import styles from '../styles.module.css';
import { Response } from '../../../store/post/actionNames';

export interface PostItemProps {
	element: Response;
}

const PostItem: React.FC<PostItemProps> = ({ element }) => {
	return (
		<div className={styles.post}>
			<div className={styles.postTitle}>{element.title}</div>
			<Text size={18} className={styles.postText}>
				{element.body}
			</Text>
			<Link href={`/posts/${element.id}`}>
				<a className={styles.postLink}>See more...</a>
			</Link>
		</div>
	);
};

export default PostItem;
