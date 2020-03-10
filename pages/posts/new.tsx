import React from 'react';

import Title from '../../shared/Title';
import Form from '../../components/Form';
import Header from '../../components/Header';
import withRedux from '../../utils/withRedux';
import Content from '../../components/Content';
import PageWrap from '../../components/PageWrap';

const AddPost: React.FC = () => {
	return (
		<PageWrap>
			<Header />
			<Title text="New posts" />
			<Content>
				<Form />
			</Content>
		</PageWrap>
	);
};

export default withRedux(AddPost);
