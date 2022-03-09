# Remote Control Client Web

## Installation

Download the [`dist/remote-control-client.umd.js`](dist/remote-control-client.umd.js) script and include it in your webpage.

```html
<script src="remote-control-client.umd.js"></script>
```

## Usage

### Setup client

Connect to the remote server by specifying the hostname and project channel key.
Note: by default, the client connects over SSL, but if you are connecting to a local server,
you may need to pass the `secure: false` option to connect without SSL.

```js
const rcClient = new RCClient({
  hostname: 'control.example.com',
  channelKey: 'abcdefghij_0123456789',
});

// const rcClient = new RCClient({
//   hostname: 'localhost:3000',
//   channelKey: 'abcdefghij_0123456789',
//   secure: false // usually local servers do not use SSL
// });
```

### Read values from remote server

Asynchonously read values from remote server and return them via a callback.

```js
rcClient.read((err, initialData) => {
  if (err) return console.error(err);
  for (let [key, value] in Object.entries(initialData)) {
    console.log(`${key}: ${value}`);
  }
});
// my_number: 7
// my_color: { r: 0, g: 0, b: 0 }
```

### Update value on remote server

Asynchonously update value(s) on the remote server and return a callback when successful.

```js
rcClient.update(
  {
    my_string: 'foo',
  },
  (err, data) => {
    if (err) return console.error(err);
    console.log('Update successful');
  }
);
// Update succesful
```

### Subscribe to changes in values from remote server

Subscribe to changes on the remote server via a callback that is called whenever any value changes.
The callback returns the value(s) which were changed. The initial call to the `subscribe` method
returns an unsubscribe function that can be called at any time to stop listening for changes.

```js
rcClient.subscribe((err, data) => {
  if (err) return console.error(err);
  console.log(`Subscription updated`);
  for (let [key, value] in Object.entries(data)) {
    console.log(key, value);
  }
});
```

```js
let i = 0;
const unsubscribe = rcClient.subscribe((err, data) => {
  if (err) return console.error(err);
  i++;
  console.log(`Subscription updated ${i}...`);
  for (let [key, value] in Object.entries(data)) {
    console.log(key, value);
  }
});

rcClient.update(
  {
    my_string: 'bar',
  },
  (err, data) => {
    if (err) return console.error(err);
    console.log('Update successful');
  }
);
// Update succesful
// Subscription updated 1...
// my_string: 'bar'

rcClient.update(
  {
    my_string: 'baz',
  },
  (err, data) => {
    if (err) return console.error(err);
    console.log('Update successful');
  }
);
// Update succesful
// Subscription updated 2...
// my_string: 'baz'

unsubscribe();

rcClient.update(
  {
    my_string: 'qux',
  },
  (err, data) => {
    if (err) return console.error(err);
    console.log('Update successful');
  }
);
// Update succesful
```

## Using Async/Await

All methods can return promises instead of callbacks, for usage with `async`/`await`.

```js
const data = await rcClient.read();

await rcClient.update({
  my_string: 'foo',
});
```

## API

### Class: RCClient

#### Table of contents

##### Constructors

- [constructor](README.md#constructor)

##### Methods

- [read](README.md#read)
- [update](README.md#update)
- [subscribe](README.md#subscribe)

#### Constructors

##### constructor

• **new RCClient**(`options: { hostname: string; channelKey: string; secure?: boolean; }`)

###### Parameters

| Name                 | Type      | Description                                                  |
| :------------------- | :-------- | :----------------------------------------------------------- |
| `options`            | `Object`  | The options passed to the class.                             |
| `options.hostname`   | `string`  | The hostname of remote server, e.g. `control.example.com`    |
| `options.channelKey` | `string`  | The key for the remote channel, e.g. `abcdefghij_0123456789` |
| `options.secure?`    | `boolean` | Whether or not to connect over SSL. Default: `true`          |

#### Methods

##### read

▸ **read**(`callback`)

###### Parameters

| Name       | Type                                                                          |
| :--------- | :---------------------------------------------------------------------------- |
| `callback` | (`err`: `unknown` \| `null`, `data?`: { `[name: string]`: `any`; }) => `void` |

---

##### update

▸ **update**(`data`: { `[name: string]`: `any`; }, `callback`)

###### Parameters

| Name       | Type                                   |
| :--------- | :------------------------------------- |
| `data`     | { `[name: string]`: `any`; }           |
| `callback` | (`err`: `unknown` \| `null`) => `void` |

---

##### subscribe

▸ **subscribe**(`callback`): `() => void`

###### Parameters

| Name       | Type                                                                          |
| :--------- | :---------------------------------------------------------------------------- |
| `callback` | (`err`: `unknown` \| `null`, `data?`: { `[name: string]`: `any`; }) => `void` |

###### Returns

`() => void`: Unsubscribe function
