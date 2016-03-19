# facebook-api-promise

> Load Facebook's API and return a Promise. If it's already loading it won't try to load it again.

## Install 
```sh
npm i --save facebook-api-promise
```

## Usage

```js
import loadFacebookAPI from 'facebook-api-promise';
loadFacebookAPI().then(FB => {
    console.log('Facebook API has loaded!', FB);
})
```

### Enable or disable the internal logging

```js
import loadFacebookAPI from 'facebook-api-promise';
// it starts "off"
loadFacebookAPI.logging.on();
// [FB API] Facebook SDK script not found, loading now. Add this in the document to have the API available sooner: <script src="//connect.facebook.net/en_US/sdk.js" async></script>
// [FB API] Waiting to be ready
// [FB API] Ready
```

## Build

The project is in ES6 but transformed into ES5 with [rollup-babel-lib-bundler](https://github.com/frostney/rollup-babel-lib-bundler). To do that, run:

```sh
npm run build
```
