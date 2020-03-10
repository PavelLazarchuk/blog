import React from 'react';
import styled from 'styled-components';

import Link from '../../shared/Link';
import Container from '../Container';

export const Header = styled.div`
	padding: 30px 0;
	border-bottom: 1px solid #c9ced9;
`;

export const Nav = styled.nav`
	display: flex;
	justify-content: center;
`;

const StyledHeader: React.FC = () => {
	return (
		<Header>
			<Container>
				<Nav>
					<Link href="/">Blog</Link>
					<Link href="/posts/new">New post</Link>
				</Nav>
			</Container>
		</Header>
	);
};

export default StyledHeader;
