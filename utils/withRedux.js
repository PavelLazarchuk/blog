import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

const withRedux = PageComponent => {
	return ({ ...props }) => {
		return (
			<Provider store={store}>
				<PageComponent {...props} />
			</Provider>
		);
	};
};

export default withRedux;
