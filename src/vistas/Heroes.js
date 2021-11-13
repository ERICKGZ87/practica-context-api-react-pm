
import CardProduct from "../componentes/CardHeroes";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ListaFavoritos from "../componentes/ListaFavoritos";


const Heroes = () => {
    const { store, actions } = useContext(Context);
    const [favoritos,setfavoritos]= useState([])

    return (
        <div className="Container">
 <ListaFavoritos
     data={favoritos}
 />
            <div className="row">

           
                {
                    store.Heroes !==null &&
                    store.Heroes.map((prod) => {

                        return (
                            <>  
                            
                            <div className="col-sm-4 py-2" key={prod.uid}>
                            
                                <CardProduct
                                 titulo={prod.name}
                                 id={prod.uid}
                                />
<button id="boton" className="btn btn-primary" style={{ marginBottom: 5 }} onClick={() => setfavoritos(favoritos.concat(prod.name))}>
            Agregar Favoritos
          </button>

                            </div>
</>
                        )
                    })
                }



            </div>

        </div>
    );

};

export default Heroes;