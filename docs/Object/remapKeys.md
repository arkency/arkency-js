# remapKeys

*Type*: Function
*Returns*: Object
*Arguments:* `object` (Object), `mapping` (Object)
*Throws:* Yes (`Error` with message starting with `remapKeys:`), in case of ambigous mapping.
*Polyfills:* `Object.keys`

`remapKeys` takes an input `object` and the `mapping` object and returns the object derivated from input `object`, but with only a subset of keys remapped from the input object.

`remapKeys` throws if you happen to provide a `mapping` which maps two keys to the same value. *This is quite restrictive and we are thinking about loosening this constraint, or moving it to be checked on the next step.*

## Examples:

### Key subset with remap:

Having an `object`:

```javascript
{ a: 1, b: 2 }
```

And the `mapping`:

```javascript
{ a: "first" }
```

The result of calling:

```
remapKeys({ a: 1, b: 2 }, { a: "first" });
```

Is:

```
{ first: 1 }
```

### Full remap:

`object`: `{ a: 1, b: 2 }`
`mapping`: `{ a: "first", b: "second" }`
`remapKeys(object, mapping)`: `{ first: 1, second: 2 }`

### Remap with missing key in `object`

`object`: `{ a: 1, b: 2 }`
`mapping`: `{ a: "first", b: "second", c: "third" }`
`remapKeys(object, mapping)`: `{ first: 1, second: 2 }`

### Error since mapping is ambigous:

`object`: `{ a: 1, b: 2 }`
`mapping`: `{ a: "first", b: "first" }`
`remapKeys(object, mapping)`: Throws `Error("remapKeys: mapping is ambigous")`

See tests for more examples.

