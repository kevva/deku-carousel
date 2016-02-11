/** @jsx element */
import classnames from 'classnames';
import {element} from 'deku';
import Swipe from 'swipe';

const getArrows = ({props}) => {
	const {arrowNext, arrowPrev} = props;

	return (
		<div class='Carousel-controls'>
			<button class='Carousel-control Carousel-control--prev'>
				{arrowPrev || null}
			</button>
			<button class='Carousel-control Carousel-control--next'>
				{arrowNext || null}
			</button>
		</div>
	);
};

const getIndicators = ({children, context, props}) => {
	const {indicator} = props;
	const {active} = context;
	const items = children.map((el, i) => {
		const classes = classnames(['Carousel-indicator', {'is-active': active === i}]);

		return (
			<div class={classes}>
				{typeof indicator === 'boolean' ? null : indicator}
			</div>
		);
	});

	return (
		<div class='Carousel-indicators'>
			{items}
		</div>
	);
};

const create = ({dispatch, path, props}) => {
	const {arrows, duration, fastThreshold, indicator, interval, play, threshold} = props;
	const el = document.querySelector(`.id-${path}`);
	const swipe = new Swipe(el);

	window.addEventListener('resize', () => swipe.refresh());

	swipe.on('show', (i, el) => {
		dispatch({
			type: 'SHOW',
			active: i,
			element: el
		});
	});

	if (typeof duration === 'number') {
		swipe.duration(duration);
	}

	if (typeof fastThreshold === 'number') {
		swipe.fastThreshold(fastThreshold);
	}

	if (typeof interval === 'number') {
		swipe.interval(interval);
	}

	if (typeof threshold === 'number') {
		swipe.threshold(threshold);
	}

	if (arrows) {
		const prev = el.querySelector('.Carousel-control--prev');
		const next = el.querySelector('.Carousel-control--next');

		prev.addEventListener('click', e => {
			e.preventDefault();
			swipe.prev();
		});

		next.addEventListener('click', e => {
			e.preventDefault();
			swipe.next();
		});
	}

	if (indicator) {
		const selector = el.querySelectorAll('.Carousel-indicator');

		Array.from(selector).forEach((el, i) => {
			el.addEventListener('click', e => {
				e.preventDefault();
				swipe.show(i);
			});
		});
	}

	if (play) {
		swipe.play();
	}
};

const onCreate = ({dispatch, path, props}) => {
	requestAnimationFrame(() => create({dispatch, path, props}));
};

const render = ({children, context, path, props}) => {
	const {arrows, indicator} = props;
	const classes = classnames(['Carousel', props.class, `id-${path}`]);

	return (
		<div class={classes}>
			<div class='Carousel-body'>{children}</div>
			{Boolean(arrows) && getArrows({props})}
			{Boolean(indicator) && getIndicators({children, context, props})}
		</div>
	);
};

export default {onCreate, render};
