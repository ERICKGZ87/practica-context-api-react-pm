import { Link } from "react-router-dom";
import PropType from "prop-types";
import { useEffect } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";


const CardHeroes = ({ id, titulo, descripcion }) => {

    const { store, actions } = useContext(Context);
    return (
        <>

            <div className="card">


                <div className="card-body">
                <h5 className="card-title">Id: {id}</h5>
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">
                        {descripcion}
                    </p>
                    <Link to={"/Heroes/" + id + "/HeroesDetalle"} className="btn btn-primary">
                        Mas Informacion
                    </Link>


                </div>



            </div>




        </>
    )

}
CardHeroes.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id: PropType.number,
    Url: PropType.string,


}

export default CardHeroes;