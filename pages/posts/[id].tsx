import React from 'react';
import { useRouter } from 'next/router';

import Header from '../../components/Header';
import withRedux from '../../utils/withRedux';
import OnePost from '../../components/OnePost';
import Content from '../../components/Content';
import PageWrap from '../../components/PageWrap';

const PostById: React.FC = () => {
	const {
		query: { id },
	} = useRouter();
	return (
		<PageWrap>
			<Header />
			<Content>
				<OnePost id={id} />
			</Content>
		</PageWrap>
	);
};

export default withRedux(PostById);
