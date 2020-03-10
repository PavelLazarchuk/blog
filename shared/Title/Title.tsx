import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	font-size: 24px;
	mapgin: 10px 0;
	text-align: center;
	color: #c9ced9;
`;

export interface StyledTitleProps {
	text: string;
}

const StyledTitle: React.FC<StyledTitleProps> = ({ text }) => {
	return <Title>{text}</Title>;
};

export default StyledTitle;
