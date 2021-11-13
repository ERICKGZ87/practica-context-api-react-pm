import { Link } from "react-router-dom";
import PropType from "prop-types";
import {useEffect} from "react-router-dom";
import { useContext,useState } from "react";
import { Context } from "../store/appContext";

const ListaFavoritos = ({id,data}) => {

    const { store, actions } = useContext(Context);
    
    

    return (
        <ul className="list-group">
        <li className="list-group-item" aria-current="true">
          <h1>Favoritos <img src="/star.jpg" id="logoboton"></img></h1>
        </li>
        <li className="list-group-item" key={id}>{data+","}</li>
      
      </ul>
      

    )

}
ListaFavoritos.PropType = {
    data: PropType.string,
  
   
    
    }
    
export default ListaFavoritos;