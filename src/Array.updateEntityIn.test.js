import updateEntityIn from "./updateEntityIn";
import test from "tape";

const INPUT_COLLECTION = [
  { id: 1,
    name: "Bob",
    occupation: "Web Developer"
  },
  { id: 2,
    name: "Martha",
    occupation: "CTO"
  }
];

test('#updateEntityIn takes id as function or value and returns collection with an updated entity',
 function testUpdateEntityInAcceptsBothFunctionAndValue (assert) {
   const expectedWithFn = [
     INPUT_COLLECTION[0],
     { id: 2,
       name: "Martha",
       occupation: "World Leader" }];

   const expectedWithId = [
     { id: 1,
       name: "Bob",
       occupation: "VP of Education" },
     INPUT_COLLECTION[1]
   ];

   const marthaFn = ({name}) => name === "Martha";
   const bobID = 1;

   assert.equals(updateEntityIn(marthaFn, 
                                { occupation: "World Leader" },
                                INPUT_COLLECTION), expectedWithFn);

   assert.equals(updateEntityIn(bobID,
                                { occupation: "VP of Education" },
                                INPUT_COLLECTION), expectedWithId);
 });

test('#updateEntityIn throws if entity is not found with a given id',
  function testUpdateEntityThrowsIfEntityIsNotFound (assert) {
    assert.throws(() => {
      updateEntityIn(3,
                     { something: 'irrelevant' },
                     INPUT_COLLECTION);
    }, Error, 'updateEntityIn: There is no entity matching the given ID');

    assert.throws(() => {
      updateEntityIn(() => false,
                     { something: 'irrelevant' },
                     INPUT_COLLECTION);
    }, Error, 'updateEntityIn: There is no entity matching the given ID');
  });
