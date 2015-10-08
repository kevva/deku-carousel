/** @jsx dom */
import dom from 'magic-virtual-element';
import Swipe from 'swipe';

const propTypes = {
	arrows: {
		type: 'boolean'
	},
	arrowNext: {
		type: 'string'
	},
	arrowPrev: {
		type: 'string'
	},
	class: {
		type: 'string'
	},
	duration: {
		type: 'number'
	},
	fastThreshold: {
		type: 'number'
	},
	interval: {
		type: 'number'
	},
	onChange: {
		type: 'function'
	},
	play: {
		type: 'boolean'
	},
	threshold: {
		type: 'number'
	}
};

function afterMount({props}, el) {
	const {arrows, duration, fastThreshold, interval, onChange, play, threshold} = props;
	const swipe = new Swipe(el);

	window.addEventListener('resize', () => swipe.refresh());

	swipe.on('show', (i, el) => {
		if (onChange) {
			onChange(el, i);
		}
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

	if (play) {
		swipe.play();
	}
}

function render({props}) {
	const {arrows, arrowNext, arrowPrev, children} = props;

	function getArrows() {
		if (!arrows) {
			return null;
		}

		return (
			<div>
				<button class='Carousel-control Carousel-control--prev'>
					{arrowPrev || null}
				</button>
				<button class='Carousel-control Carousel-control--next'>
					{arrowNext || null}
				</button>
			</div>
		);
	}

	return (
		<div class={['Carousel', props.class]}>
			<div>{children}</div>
			{getArrows()}
		</div>
	);
}

export default {afterMount, propTypes, render};
