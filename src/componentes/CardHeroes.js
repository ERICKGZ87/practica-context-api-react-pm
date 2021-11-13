import { Link } from "react-router-dom";
import PropType from "prop-types";
import { useEffect } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";


const CardProduct = ({ id, titulo, Url, descripcion }) => {

    const { store, actions } = useContext(Context);



    return (
        <>
        
                        <div className="card">


                            <div className="card-body">
                          
                                <h5 className="card-title">{titulo}</h5>
                                <p className="card-text">
                                    {descripcion}
                                </p>
                                <Link to={"/Product/" + id + "/ProductDetalle"} className="btn btn-primary">
                                    Mas Informacion
                                </Link>
                               

                            </div>

        

            </div>




        </>
    )

}
CardProduct.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id: PropType.number,
    Url: PropType.string,


}

export default CardProduct;