import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	border: 1px solid #c9ced9;
	color: #c9ced9;
	border-radius: 15px;
	margin-bottom: 20px;
	color: black;
	outlined: 0;
`;

export interface StyledInputProps {
	name: string;
	type?: string;
	value: string;
	className?: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>, child: React.ReactNode) => void;
}

const StyledInput: React.FC<StyledInputProps> = ({ onChange, type, name, value, className }) => {
	return <Input type={type} name={name} onChange={onChange} value={value} className={className} />;
};

export default StyledInput;
