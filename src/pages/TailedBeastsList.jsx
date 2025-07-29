import { Cards } from "../components/Cards";
import useGlobalReducer from "../hooks/useGlobalReducer"

export const TailedBeastsList = () => {

    const { store, dispatch } = useGlobalReducer();

   return (
           <>
               <div className="container-fluid">
                   <div className="row d-flex justify-content-center gap-4">
                       {store.tailedBeasts.map((beasts) => (
                           <Cards key={beasts.id} character={beasts} />
                       ))}
                   </div>
               </div>
   
           </>
       )
   }