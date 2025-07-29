import useGlobalReducer from "../hooks/useGlobalReducer";
import { Cards } from "../components/Cards";

export const AkatsukiList = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <section className="akatsukiImg" style={{marginTop: '8vw'}}>
        <div className="container-fluid my-4">
          <div className="row d-flex justify-content-center gap-4">
            {store.akatsuki.map((aka) => (
              <Cards key={aka.id} character={aka} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
