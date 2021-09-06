import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookDetails from '../BookDetails/BookDetails';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../redux/reducers/index';

afterEach(cleanup);

const renderWithRedux = (
	component,
	{ initialState, store = createStore(reducers, compose(applyMiddleware(thunk))) } = {}
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
	};
};

it('renders with redux', () => {
	const { getByTestId, queryByTestId } = renderWithRedux(<BookDetails />);
});

