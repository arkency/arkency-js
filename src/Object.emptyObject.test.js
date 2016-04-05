import test from "tape";
import emptyObject from "./Object.emptyObject";
test('#emptyObject is just an empty object',
  function testEmptyObjectIsEmptyObjectSingleton (assert) {
    assert.equals(emptyObject, {});  
  });
