import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
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
    },[id])


    
    
    if (!store.detailCharacter) {
        return <p>Cargando</p>
    } 
    
    console.log(store.detailCharacter);
    

    return (
        <>
            <div className="card w-50 mb-3 d-flex space-between">
                <img src={store.detailCharacter.images[0]} className="card-img-top w-25 h-25" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{store.detailCharacter.name}</h5>
                    <p className="card-text">
                        {store.detailCharacter.personal.birthdate}
                    </p>
                    <p className="card-text">{store.detailCharacter.clan}</p>
                    <p className="card-text">
                        
                    </p>

                    <Link to={'/characters-list'}>
                    <button className="btn btn-success btn-lg w-25">Volver</button>
                    </Link>
                </div>
            </div>
        </>
    )
}