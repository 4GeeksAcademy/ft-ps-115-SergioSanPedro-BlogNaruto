import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";


export const CharactersList = () => {


    const { store, dispatch } = useGlobalReducer();

    return (
        <>
            <div className="container my-4">
                <h1 className="text-center mt-5 p-3">Lista de personajes</h1>

                <div className="row d-flex justify-content-center gap-4">
                    {store.characters.map((character) => (
                        <Cards key={character.id} character={character} />
                    ))}
                </div>
            </div>

        </>
    )
}