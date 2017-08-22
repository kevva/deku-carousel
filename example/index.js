/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Carousel from '../';

const app = tree(
	<Carousel arrows play arrowPrev='Prev' arrowNext='Next' indicator='o'>
		<div>Foo</div>
		<div>Bar</div>
	</Carousel>
);

render(app, document.body);
