import test from "tape";
import emptyObject from "./emptyObject";
test('#emptyObject is just an empty object',
  function testEmptyObjectIsEmptyObjectSingleton (assert) {
    assert.plan(1);
    assert.same(emptyObject, {});  
  });
