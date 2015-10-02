/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Carousel from '../';

const app = tree(
	<Carousel arrows arrowPrev='Prev' arrowNext='Next' play>
		<div>hej</div>
		<div>hej2</div>
	</Carousel>
);

render(app, document.body);
