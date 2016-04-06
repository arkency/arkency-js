# updateEntityIn

*Type:* Function
*Returns:* Array
*Arguments:* `id` (Object|Number|Function), `delta` (Object), `collection` (Array)
*Throws:* Yes (Error beginning with `updateEntityIn:`), when there is no entity matching `id`.
*Polyfills:* `Array.findIndex`, `Object.assign`

`updateEntityIn` is a function for updating entities collection in an immutable way. Having a `collection` of entities, and `id` which can be a value (then the `entity.id === id` check will be performed) or function (then this function will be used to find the entity - you'll have an access to current entity, index and the whole collection in this lambda), the matching entity is found and updated with `delta` change, returning a new entity object. The new collection with updated entity is returned then.

If there is no entity matching given `id`, `updateEntityIn` throws an error.

## Examples

### Simple update example with `id` being value:

Having `id` defined like this:

```javascript
1
```

And `delta` of:

```javascript
{ name: "Frank" }
```

And `collection`:

```javascript
[{ id: 1, name: "Adam", occupation: "Frontend Developer" },
 { id: 2, name: "Martha", occupation: "CTO" }]
```

The result of calling:

```javascript
updateEntityIn(1, { name: "Frank" }, [
  { id: 1, name: "Adam", occupation: "Frontend Developer" },
  { id: 2, name: "Martha", occupation: "CTO" }])
```

Is:

```javascript
[{ id: 1, name: "Frank", occupation: "Frontend Developer" },
 { id: 2, name: "Martha", occupation: "CTO" }]
```

### Simple updating entity with id as a function:

`id`: `({name}) => name === "Martha"`
`delta`: `{ occupation: "CEO" }`
`collection`: 
```javascript
[
  { id: 1, name: "Adam", occupation: "Frontend Developer" },
  { id: 2, name: "Martha", occupation: "CTO" }
]
```

`updateEntityIn(id, delta, collection)`:
```javascript
[
  { id: 1, name: "Adam", occupation: "Frontend Developer" },
  { id: 2, name: "Martha", occupation: "CEO" }
]
```

### Can't find ID example of throwing (simple value):

`id`: `1`
`delta`: `{ whatever: 'foo' }`
`collection`: `[]`
`updateEntityIn(id, delta, collection)`: Throws `Error("updateEntityIn: There is no entity matching the given ID")`

### Can't find ID example of throwing (function):

`id`: `({name}) => name === "Martha"`
`delta`: `{ whatever: 'foo' }`
`collection`: `[]`
`updateEntityIn(id, delta, collection)`: Throws `Error("updateEntityIn: There is no entity matching the given ID")`

See tests for more examples.
