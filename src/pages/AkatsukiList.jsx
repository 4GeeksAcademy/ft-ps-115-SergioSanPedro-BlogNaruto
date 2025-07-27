import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getAkatsukiList } from "../ServicesApi/narutoApi";
import { Cards } from "../components/Cards";

export const AkatsukiList = () => {

    const { store, dispatch } = useGlobalReducer();


    return (


        <>
            <div className="container my-4 bg-secondary" style={{ overflowY: 'auto' }}>
                <h1 className="text-center mt-2 p-3">Lista de personajes</h1>

                <div className="row d-flex justify-content-center gap-3">

                    {
                        store.akatsuki.map((aka) => (
                            <Cards key={aka.id} character={aka} />
                        ))
                    }
                </div>
            </div>

        </>
    )
}