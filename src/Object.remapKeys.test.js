import remapKeys from "./Object.remapKeys";
import test from "tape";

test('#remapKeys takes object and mapping and returns remapped object', 
  function testRemapKeysSimple (assert) { 
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

    assert.equal(remapKeys(input, mapping), expected);
  });

test('#remapKeys omits fields that are not mapped',
  function testRemapKeysOmittingFieldsNotInMapping (assert) {  
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

    assert.equal(remapKeys(input, mapping), expected);
  });

test('#remapKeys omits fields that are not in object but exist in mapping',
  function testRemapKeysOmittingFieldsNotInObject (assert) {
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
    
    assert.equal(remapKeys(input, mapping), expected);
  }); 

test('#remapKeys throws if mapping is ambigous',
  function testRemapKeysThrowsIfMappingAmbigous (assert) {
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
