import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';

import withRedux from '../utils/withRedux';

const HomePage = () => {
	// const aaa = useSelector(state => state.post.user);
	return <div>Welcome to Next.js!</div>;
};

export default withRedux(HomePage);
