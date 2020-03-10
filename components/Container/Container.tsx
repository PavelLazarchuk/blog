import React from 'react';
import styled from 'styled-components';

export interface ContainerProps {
	children: React.ReactNode;
}

export const StyledContainer = styled.div`
	margin: 0 auto;
	width: 1000px;
`;

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
