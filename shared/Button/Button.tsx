import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	color: #c9ced9;
	border: 0;
	cursor: pointer;
	padding: 10px 20px;
	border-radius: 20px;
	background: #26a69a;
	&:hover {
		box-shadow: 0px 4px 10px rgba(0, 242, 201, 0.5);
	}
`;

export interface StyledButtonProps {
	children: React.ReactNode;
	onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
	return (
		<Button type="button" onClick={onClick}>
			{children}
		</Button>
	);
};

export default StyledButton;
