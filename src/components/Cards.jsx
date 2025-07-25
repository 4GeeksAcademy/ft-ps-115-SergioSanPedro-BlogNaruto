import { Link } from "react-router-dom"

export const Cards = ({ character }) => {

    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <img src={character.images[0]} className="card-img-top p-1" alt={character.image} />
                <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                    <p className="card-text">
                        Debut en anime: {character.debut.anime}
                    </p>

                    <Link to={'/characters-details'}>
                    <button className="btn btn-primary">
                        ver detalles
                    </button>
                    </Link>
                </div>
            </div>


        </>
    )
}