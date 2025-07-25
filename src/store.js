export const initialStore = () => {
  return {
    characters: [],
    tailedBeast: {},
    detailCharacter: null
  }
}

export default function storeReducer(store, action) {
  switch (action.type) {

    case 'addCharacters':
      return {
        ...store,
        characters: action.payload
      };

    case 'addTailedBeast':
      return {
        ...store, tailedBeast: action.payload
      };

    case 'detailCharacter':
      return{
        ...store, detailCharacter: action.payload
      }

    default:
      throw Error('Unknown action.');
  }
}
