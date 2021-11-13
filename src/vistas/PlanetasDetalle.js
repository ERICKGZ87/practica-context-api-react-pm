import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext} from "react";
import { Context } from "../store/appContext";

import CardPlanetasDetalles from "../componentes/CardPlanetaDetalle";



const PlanetasDetalle = (props) => {
    const { store, actions } = useContext(Context);

    const Historia = useHistory()


    const { id } = useParams();

    actions.getPlanetasDetalles(id);
 

    const [selected, setSelected] = useState(null);

        return (
            <div className="container">
    
                <div className="row">

                    <div className="col-md-11">
                       

                           <CardPlanetasDetalles
                           name={store.PlanetasDetalles.name}
                           clima={store.PlanetasDetalles.climate}
                           terreno={store.PlanetasDetalles.terrain}
                           poblacion={store.PlanetasDetalles.population}
                           creado={store.PlanetasDetalles.created}
                          
                           />

                         <button className="btn btn-warning"
                            onClick={Historia.goBack}>
                            Regresar
                          
                        </button>
                  
                    </div>
                    
    
    
    
                </div>
    
    
            </div>
    
    
        )




   

   


}

export default PlanetasDetalle;