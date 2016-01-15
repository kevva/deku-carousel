# deku-carousel

> Carousel component for deku


## Install

```
$ npm install --save deku-carousel
```


## Usage

```js
import Carousel from 'deku-carousel';

const render = () => {
	return (
		<Carousel play arrows arrowPrev='Previous' arrowNext='Next'>
			<div><img src='cat.jpg' alt=''/></div>
			<div><img src='unicorn.jpg' alt=''/></div>
		</Carousel>
	);
};

export default {render};
```


## License

MIT © [Kevin Mårtensson](http://github.com/kevva)
