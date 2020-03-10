import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import Input from '../../shared/Input';
import styles from './styles.module.css';
import Button from '../../shared/Button';
import { addPost } from '../../store/post/actions';
import { NewPostTypes } from '../../store/post/actionNames';

const Form: React.FC = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		title: '',
		body: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	const post = () => {
		const body: NewPostTypes = {
			title: values.title,
			body: values.body,
		};
		dispatch(addPost(body));
	};

	return (
		<>
			<div className={styles.center}>
				<div>
					<div className={styles.label}>Title</div>
					<Input
						type="text"
						name="title"
						value={values.title}
						onChange={handleChange}
						className={styles.inputTitle}
					/>
				</div>
				<div>
					<div className={styles.label}>Content</div>
					<Input
						type="text"
						name="body"
						value={values.body}
						onChange={handleChange}
						className={styles.inputBody}
					/>
				</div>
			</div>
			<div className={styles.center}>
				<Button onClick={post}>Add post</Button>
			</div>
		</>
	);
};

export default Form;
