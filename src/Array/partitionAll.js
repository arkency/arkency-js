const partitionAll = function partitionAll (array, tupleSize) {
	let partitionedChunk = [],
			result = [];

	if(tupleSize <= 0) {
		throw new Error("partitionAll: tuple size must be bigger than zero");
	}

  array.forEach((element, index) => {
    if (index % tupleSize === 0 && index !== 0) {
      result.push(partitionedChunk);
      partitionedChunk = [];
    }

    partitionedChunk.push(element);
  });

  if(partitionedChunk.length !== 0) {
    result.push(partitionedChunk);
  }

  return result;
};

export default partitionAll;
