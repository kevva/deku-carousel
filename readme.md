# deku-carousel

> Carousel component for deku


## Install

```
$ npm install deku-carousel
```


## Usage

```js
import Carousel from 'deku-carousel';

const render = () => (
	<Carousel play arrows arrowPrev='Previous' arrowNext='Next'>
		<div><img src='cat.jpg' alt=''/></div>
		<div><img src='unicorn.jpg' alt=''/></div>
	</Carousel>
);

export default {render};
```


## API

### &lt;Carousel/&gt;

#### arrows

Type: `boolean`<br>
Default: `false`

Whether to show navigation controls.

#### arrowNext

Type: `string` `Node`

Element to show for the next control.

#### arrowPrev

Type: `string` `Node`

Element to show for the previous control.

#### class

Type: `string`

Add classnames to the element.

#### duration

Type: `number`<br>
Default: `300`

Set the transition duration in milliseconds.

#### fastThreshold

Type: `number`<br>
Default: `300`

This is the amount of time in milliseconds which determines if a swipe was fast or not.

#### interval

Type: `number`<br>
Default: `5000`

Set the cycle interval.

#### onChange

Type: `Function`

Function to run when the a swipe occurs. Receives the current element and the `index` as arguments.

#### play

Type: `boolean`<br>
Default: `false`

Whether to play through the items automatically.

#### threshold

Type: `number`

Set the swipe threshold.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
