## Documentation

You can see below the API reference of this module.

### `log(message, type)`
Displays debug messages by providing the type.

Usage:

```js
BugKiller.log("Some info message");
BugKiller.log(new Error("Interesting error"));
```

The config object can be modified to make this module to act diferently.
Defaults are shown:

```js
BugKiller.config = {
    // The error type
    error: {
        color: [192, 57, 43]
      , text: "error"
      , level: 1
    }
    // The warning type
  , warn: {
        color: [241, 196, 15]
      , text: "warn "
      , level: 2
    }
    // The info type
  , info: {
        color: [52, 152, 219]
      , text: "info "
      , level: 3
    }
    // Display date
  , date: false
    // Log level
  , level: 4
    // Output stream
  , stream: process.stdout
    // The options passed to `util.inspect`
  , inspectOptions: { colors: true }
};
````
#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.
- **String** `type`: The message type (e.g. "error", "info" etc). Default is computed (`"error"` if the message is an `Error`) or `"info"` if the provided
`type` is invalid.

#### Return
- **Object** The `BugKiller` instance.

### `getDate()`
Returns the stringified date. This method can be overrided for a custom date format.

#### Return
- **String** The date in HH:mm.ss - DD.MM.YYYY format.

### `error(message)`
Displays debug messages by providing setting the type to `"error"`.

Usage:

```js
BugKiller.error("Some error message");
```
#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.

### `warn(message)`
Displays debug messages by providing setting the type to `"warn"`.

Usage:

```js
BugKiller.warn("Some warn message");
```
#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.

### `info(message)`
Displays debug messages by providing setting the type to `"info"`.

Usage:

```js
BugKiller.info("Some info message");
```
#### Params
- **Object** `message`: The debug message that should be displayed. If `message` is an object, it will show the inspected object.

#### Return
- **Object** The `BugKiller` instance.

