import React from 'react';
import styled from 'styled-components';

import Container from '../Container';

export const Content = styled.div`
	padding: 20px 10px;
	min-height: 65vh;
	background-color: #192c55;
`;

export interface StyledContentProps {
	children: React.ReactNode;
}

const StyledContent: React.FC<StyledContentProps> = ({ children }) => {
	return (
		<Container>
			<Content>{children}</Content>
		</Container>
	);
};

export default StyledContent;
