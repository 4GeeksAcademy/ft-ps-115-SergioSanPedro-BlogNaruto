import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getCharactersById } from "../ServicesApi/narutoApi";
import useGlobalReducer from "../hooks/useGlobalReducer";


export const CharacterDetails = () => {


    const {store, dispatch} = useGlobalReducer()
    const { id } = useParams();
    

    const dataContent = async () => {
        const data = await getCharactersById(id)
        dispatch({
            type: 'detailCharacter',
            payload: data
        })
    }
    
    useEffect(() => {
        dataContent()
    },[])


    
    
    if (!store.detailCharacter) {
        return <p>Cargando</p>
    } 
    
    

    return (
        <>
            <div className="card mb-3">
                <img src={store.detailCharacter.images[0]} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.detailCharacter.name}</h5>
                    <p className="card-text">
                        {store.detailCharacter.personal.birthdate}
                    </p>
                    <p className="card-text">
                        <small className="text-body-secondary">Last updated 3 mins ago</small>
                    </p>
                </div>
            </div>
        </>
    )
}