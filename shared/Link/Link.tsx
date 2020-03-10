import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

export interface StyledLinkProps {
	href: string;
	children: React.ReactNode;
}

const ColorLink = styled.a`
	color: #c9ced9;
	padding: 5px 20px;
	margin: 0 10px;
	border: 1px solid #c9ced9;
	border-radius: 20px;
	font-size: 24px;
	cursor: pointer;
	&:hover {
		border: 1px solid #26a69a;
		color: #26a69a;
	}
`;

const StyledLink: React.FC<StyledLinkProps> = ({ href, children }) => {
	return (
		<Link href={href}>
			<ColorLink>{children}</ColorLink>
		</Link>
	);
};

export default StyledLink;
