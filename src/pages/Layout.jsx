import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { getAkatsukiList, getCharacters, getTailedBeasts } from "../ServicesApi/narutoApi"
import { useEffect } from "react"
import { SideBar } from "../components/SideBar"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {


    const { store, dispatch } = useGlobalReducer();

    const charactersData = async () => {

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

    const tailedBeastsData = async () => {
        const data = await getTailedBeasts();

        dispatch({
            type: 'addTailedBeast',
            payload: data
        })
        
        
    }


    useEffect(() => {
        charactersData();
        akatsukiData();
        tailedBeastsData();

    }, []);




    return (
        <ScrollToTop>
            <SideBar/>
            <Navbar />
            <Outlet />
            <Footer />
        </ScrollToTop>
    )
}