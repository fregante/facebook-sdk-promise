# facebook-sdk-promise

> Load Facebook's SDK and return a Promise. If it's already loading it won't try to load it again.

## Install 
```sh
npm i --save facebook-sdk-promise
```

## Usage

```js
import loadFBSDK from 'facebook-sdk-promise';
loadFBSDK().then(FB => {
    console.log('Facebook SDK has loaded!', FB);
})
```

### Enable or disable the internal logging

```js
import loadFBSDK from 'facebook-sdk-promise';
// it starts "off"
loadFBSDK.logging.on();
// [FB API] Facebook SDK script not found, loading now. Add this in the document to have the API available sooner: <script src="//connect.facebook.net/en_US/sdk.js" async></script>
// [FB API] Waiting to be ready
// [FB API] Ready
```

## Build

The project is in ES6 but transformed into ES5 with [rollup-babel-lib-bundler](https://github.com/frostney/rollup-babel-lib-bundler). To do that, run:

```sh
npm run build
```
