import React from 'react';
import { useRouter } from 'next/router';

const PostById = () => {
	const router = useRouter();
	const { id } = router.query;
	return <div>PostById! {id}</div>;
};

export default PostById;
