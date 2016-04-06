import test from "tape";
import partitionAll from "./partitionAll";

const EXAMPLE_ARRAY = [1, 2, 3, 4, 5, 6];

test('#partitionAll raises an error if tupleSize is set to zero',
  function testPartitionAllThrowsIfZeroTupleSize (assert) {
    assert.plan(1);
    assert.throws(() => {
      partitionAll(EXAMPLE_ARRAY, 0);
    }, Error, 'partitionAll: tuple size must be bigger than zero');
  });

test('#partitionAll raises an error if tupleSize is negative',
  function testPartitionAllThrowsIfNegativeTupleSize (assert) {
    assert.plan(1);
    assert.throws(() => {
      partitionAll(EXAMPLE_ARRAY, -42);
    }, Error, 'partitionAll: tuple size must be bigger than zero');
  });

test('#partitionAll splits an array into evenly sized tuples',
  function testPartitionAllSplitsInEvenlySizedTuples (assert) {
    assert.plan(1);
    const expected = [[1, 2], [3, 4], [5, 6]];
    assert.same(partitionAll(EXAMPLE_ARRAY, 2), expected);
  });

test('#partitionAll fills the last tuple as most as possible',
  function testPartitionAllFillsTheLastTupleBestEffortWay (assert) {
    assert.plan(1);
    const expected = [[1, 2, 3, 4], [5, 6]];
    assert.same(partitionAll(EXAMPLE_ARRAY, 4), expected);
  });


