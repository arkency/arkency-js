# partitionAll

*Type*: Function
*Returns:* Array
*Arguments*: `array` (Array), `tupleSize` (Integer)
*Throws:* Yes (Error beginning with `partitionAll:`), when `tupleSize` is zero or negative.
*Polyfills:* `Array.forEach`

`partitionAll` splits your `array` into a set of so-called _tuples_ with the same size determined by `tupleSize`. If there are not enough elements in an array to make equally sized tuples, the last tuple can have less than `tupleSize` elements. It returns the 2D array (tuples are arrays) of tuples.

## Examples:

### Simple example with unequal tuples

Having an `array`:

```javascript
[1, 2, 3, 4]
```

And `tupleSize`:

```javascript
3
```

The result of calling:

```javascript
partitionAll([1, 2, 3, 4], 3)
```

Is:

```javascript
[[1, 2, 3], [4]]
```

### Example #1 with equal tuples:

`array`: `[1, 2, 3, 4]`
`tupleSize`: `1`
`partitionAll(array, tupleSize)`: `[[1], [2], [3], [4]]`

### Example #2 with equal tuples:

`array`: `[1, 2, 3, 4]`
`tupleSize`: `2`
`partitionAll(array, tupleSize)`: `[[1, 2], [3, 4]]`

### Example #1 of invalid tuple size:

`array`: `[1, 2, 3, 4]`
`tupleSize`: `0`
`partitionAll(array, tupleSize)`: throws `Error("partitionAll: tuple size must be bigger than zero")`

### Example #2 of invalid tuple size:

`array`: `[1, 2, 3, 4]`
`tupleSize`: `-1`
`partitionAll(array, tupleSize)`: throws `Error("partitionAll: tuple size must be bigger than zero")`

There are also examples in test.
