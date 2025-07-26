import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getAkatsukiList, getCharacters } from "../ServicesApi/narutoApi"
import { useEffect } from "react"
import { AkatsukiList } from "./AkatsukiList"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {


    const { store, dispatch } = useGlobalReducer();

    const dataExtract = async () => {

        const dataContext = await getCharacters()

        dispatch({
            type: 'addCharacters',
            payload: dataContext
        })

    }

    const akatsukiData = async () => {
        const data = await getAkatsukiList();

        dispatch({
            type: 'akatsuki',
            payload: data
        })
         
    }


    useEffect(() => {
        dataExtract();
        akatsukiData();

    }, []);




    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}