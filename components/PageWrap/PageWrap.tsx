import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
		margin: 0;
		font-family: Arial, Helvetica, sans-serif;
  }
`;

export const PageWraper = styled.div`
	background-color: #424242;
	min-height: 100vh;
`;

export interface PageWrapProps {
	children: React.ReactNode;
}

const PageWrap: React.FC<PageWrapProps> = ({ children }) => {
	return (
		<>
			<GlobalStyle></GlobalStyle>
			<PageWraper>{children}</PageWraper>
		</>
	);
};

export default PageWrap;
