import useGlobalReducer from "../hooks/useGlobalReducer";
import { Cards } from "../components/Cards";

export const AkatsukiList = () => {
  const { store } = useGlobalReducer();

  return (
    <>
      <section className="">
        <div className="container-fluid card-list">
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
