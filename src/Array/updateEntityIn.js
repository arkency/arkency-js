const seekByFieldIdFn = (expectedID, {id}) => expectedID === id;

const updateEntityIn = function updateEntityIn (id, delta, collection) {
  const findIndexFn = typeof id === 'function' ? 
                        id : seekByFieldIdFn.bind(null, id);
  const entityIndex = collection.findIndex(findIndexFn);

  if (entityIndex === -1) {
    throw new Error("updateEntityIn: There is no entity matching the given ID");
  }

  const updatedEntity = Object.assign({}, collection[entityIndex], delta);
  let updatedCollection = [].concat(collection);
  updatedCollection[entityIndex] = updatedEntity;

  return updatedCollection;
};

export default updateEntityIn;
