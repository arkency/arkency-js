const remapKeys = function remapKeys (input, mapping) {
  const checkMapping = mapping => {
    Object.keys(mapping).reduce((valuesSoFar, key) => {
      if(valuesSoFar.indexOf(mapping[key]) !== -1) {
        throw new Error('remapKeys: mapping is ambigous');
      }
      return [].concat(valuesSoFar, [mapping[key]]);
    }, []);
  };

  checkMapping(mapping);
  return Object.keys(mapping).reduce((output, key) => {
    if(input.hasOwnProperty(key)) {
      output[mapping[key]] = input[key];
    }
    return output;
  }, {});
};

export default remapKeys;
