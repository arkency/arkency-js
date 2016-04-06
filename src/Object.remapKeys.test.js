import remapKeys from "./Object.remapKeys";
import test from "tape";

test('#remapKeys takes object and mapping and returns remapped object', 
  function testRemapKeysSimple (assert) { 
    assert.plan(1);
    const input = {
      foo: "bar",
      baz: "foo"
    };

    const mapping = { 
      foo: "first", 
      baz: "second" 
    };

    const expected = {
      first: "bar",
      second: "foo"
    };

    assert.same(remapKeys(input, mapping), expected);
  });

test('#remapKeys omits fields that are not mapped',
  function testRemapKeysOmittingFieldsNotInMapping (assert) { 
    assert.plan(1); 
    const input = {
      foo: "bar",
      baz: "foo"
    };

    const mapping = {
      foo: "first",
    };

    const expected = {
      first: "bar"
    };

    assert.same(remapKeys(input, mapping), expected);
  });

test('#remapKeys omits fields that are not in object but exist in mapping',
  function testRemapKeysOmittingFieldsNotInObject (assert) {
    assert.plan(1);
    const input = {
      foo: "bar",
      baz: "foo"
    };

    const mapping = {
      foo: "first",
      baz: "second",
      bar: "third"
    };

    const expected = {
      first: "bar",
      second: "foo"
    };
    
    assert.same(remapKeys(input, mapping), expected);
  }); 

test('#remapKeys throws if mapping is ambigous',
  function testRemapKeysThrowsIfMappingAmbigous (assert) {
    assert.plan(1);
    const input = {
      foo: "bar",
      baz: "foo"
    };

    const mapping = {
      foo: "first",
      baz: "first"
    };

    assert.throws(() => {
      remapKeys(input, mapping);
    }, Error, "remapKeys: mapping is ambigous")
  });
