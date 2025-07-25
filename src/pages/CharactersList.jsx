import { useEffect } from "react";
import { getCharacters } from "../ServicesApi/narutoApi.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Cards } from "../components/Cards.jsx";



export const CharactersList = () => {


    const { store, dispatch } = useGlobalReducer();

    const dataExtract = async () => {

        const dataContext = await getCharacters()

        dispatch({
            type: 'addCharacters',
            payload: dataContext
        })


    }


    useEffect(() => {
        dataExtract()

    }, []);

    console.log(store.characters);
    return (
        <>
            <div className="container my-4 bg-secondary" style={{overflowY: 'auto'}}>
                <h1 className="text-center mt-2 p-3">Lista de personajes</h1>

                <div className="row d-flex justify-content-center gap-3 p-2">
                    {store.characters.map((character) => (
                        <Cards key={character.id} character={character} />
                    ))}
                </div>
            </div>

        </>
    )
}