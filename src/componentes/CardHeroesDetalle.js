import { Link } from "react-router-dom";
import PropType from "prop-types";
import {useEffect} from "react-router-dom";
import { useContext,useState } from "react";
import { Context } from "../store/appContext";


const CardHeroesDetalles = ({altura,masa,año,creado,url }) => {

    const { store, actions } = useContext(Context);

   
    return (
        <>
        <ul className="list-group list-group-horizontal">
        <img src={url} className="card-img-top" alt="..." />
          <li className="list-group-item">Altura</li>
          <li className="list-group-item">{altura}</li>
          
        </ul>
        <ul className="list-group list-group-horizontal-sm">
          <li className="list-group-item">Masa</li>
          <li className="list-group-item">{masa}</li>
          
        </ul>
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">Año Nacimiento</li>
          <li className="list-group-item">{año}</li>
          
        </ul>
        <ul className="list-group list-group-horizontal-md">
          <li className="list-group-item">creado</li>
          <li className="list-group-item">{creado}</li>
          
        </ul>
    
     
     
      </>
      

    )

}
CardHeroesDetalles.PropType = {
    descripcion: PropType.string,
    altura: PropType.string,
    masa:PropType.number,
    año: PropType.string,
   
    
    }
    
export default CardHeroesDetalles;