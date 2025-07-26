import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getAkatsukiList } from "../ServicesApi/narutoApi";
import { Cards } from "../components/Cards";

export const AkatsukiList = () => {

    const { store, dispatch } = useGlobalReducer();


    return (


        <>


        {
            store.akatsuki.map((aka) => (
                <Cards key={aka.id} character={aka}/>
            ))
        }


        </>
    )
}