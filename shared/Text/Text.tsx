import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	font-size: ${props => (props.size ? props.size : 16)}px;
	mapgin: 10px 0;
	color: #c9ced9;
`;

export interface StyledTextProps {
	size?: number;
	children: React.ReactNode;
	className?: string;
}

const StyledText: React.FC<StyledTextProps> = ({ children, size, className }) => {
	return (
		<Text size={size} className={className}>
			{children}
		</Text>
	);
};

export default StyledText;
