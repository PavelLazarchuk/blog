import React from 'react';

import Title from '../shared/Title';
import Header from '../components/Header';
import withRedux from '../utils/withRedux';
import AllPost from '../components/AllPost';
import Content from '../components/Content';
import PageWrap from '../components/PageWrap';

const HomePage: React.FC = () => {
	return (
		<PageWrap>
			<Header />
			<Title text="Our posts" />
			<Content>
				<AllPost />
			</Content>
		</PageWrap>
	);
};

export default withRedux(HomePage);
