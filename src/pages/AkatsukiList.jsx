import useGlobalReducer from "../hooks/useGlobalReducer";
import { Cards } from "../components/Cards";

export const AkatsukiList = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <>
      <section className="akatsukiImg">
        <div className="container my-4" style={{ overflowY: "auto" }}>
          <h1 className="text-center fw-bold mt-5 p-3">Personajes Akatsuki</h1>

          <div className="row d-flex justify-content-center gap-3">
            {store.akatsuki.map((aka) => (
              <Cards key={aka.id} character={aka} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
