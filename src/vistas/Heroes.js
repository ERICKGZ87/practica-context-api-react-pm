
import CardProduct from "../componentes/CardHeroes";
import { useContext } from "react";
import { Context } from "../store/appContext";

const Heroes = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="Container">

            <div className="row">
                {
                    store.Heroes.map((prod) => {

                        return (
                            <div className="col-sm-4 py-3" key={prod.id}>
                                
                                <CardProduct
                                    titulo={prod.name}
                                    id={prod.id}
                                    Url={prod.url}

                                />


                            </div>

                        )
                    })
                }



            </div>

        </div>
    );

};

export default Heroes;