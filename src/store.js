export const initialStore = () => {
  return {
    characters: [],
    tailedBeast: {},
    detailCharacter: null,
    akatsuki: [],
    favorites: []
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
    case 'akatsuki':
      return {
        ...store, akatsuki: action.payload
      }
    case 'favorites':
      return {
        ...store, favorites: [...store.favorites, action.payload]
      }

    default:
      throw Error('Unknown action.');
  }
}
