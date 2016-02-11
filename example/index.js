/** @jsx element */
import {element, createApp} from 'deku';
import {createStore} from 'redux';
import Carousel from '../';

const reducer = (state, action) => {
	switch (action.type) {
		case 'SHOW':
			return Object.assign({}, state, {active: action.active});
		default:
			return state;
	}
};

const store = createStore(reducer, {active: 0});
const render = createApp(document.body, store.dispatch);

const app = () => {
	return (
		<Carousel arrows arrowPrev='&#60;' arrowNext='&#62;' indicator='o' play>
			<div>Hello!</div>
			<div>Hello again!</div>
		</Carousel>
	);
};

const init = () => render(app(), store.getState());

store.subscribe(init);
init();
