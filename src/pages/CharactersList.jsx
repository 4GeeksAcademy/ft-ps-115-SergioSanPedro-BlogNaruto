import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";


export const CharactersList = () => {


    const { store, dispatch } = useGlobalReducer();

    return (
        <>
            <div className="container-fluid" style={{marginTop: '8vw'}}>
                <div className="row d-flex justify-content-center gap-4">
                    {store.characters.map((character) => (
                        <Cards key={character.id} character={character} />
                    ))}
                </div>
            </div>

        </>
    )
}