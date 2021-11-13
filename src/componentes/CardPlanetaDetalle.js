import { Link } from "react-router-dom";
import PropType from "prop-types";
import { useEffect } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";


const CardPlanetasDetalles = ({ name,clima,terreno,poblacion,creado}) => {

  const { store, actions } = useContext(Context);


  return (
    <>
      <div className="container">
        <div className="row">

        

          <div className="col-sm-6"> 
          
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item active">Nombre</li>
            <li className="list-group-item"><h1>{name}</h1></li>

            </ul>

            <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item ">Clima</li>
            <li className="list-group-item">{clima}</li>
            </ul>

      
            <ul className="list-group list-group-horizontal-sm">
              <li className="list-group-item ">Terreno</li>
              <li className="list-group-item">{terreno}</li>

            </ul>
            <ul className="list-group list-group-horizontal-md">
              <li className="list-group-item">Poblacion</li>
              <li className="list-group-item">{poblacion}</li>

            </ul>
            <ul className="list-group list-group-horizontal-md">
              <li className="list-group-item">Creado</li>
              <li className="list-group-item">{creado}</li>

            </ul>
          </div>


        </div>



      </div>





    </>


  )

}
CardPlanetasDetalles.PropType = {
  descripcion: PropType.string,
  altura: PropType.string,
  masa: PropType.number,
  año: PropType.string,


}

export default CardPlanetasDetalles;