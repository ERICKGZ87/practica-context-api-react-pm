import { useContext } from "react";
import CardPlaneta from "../componentes/CardPlaneta";
import { Context } from "../store/appContext";

const Planetas = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">
            <h1>Lista de planetas</h1>
                <div className="row">
                    {
                        store.Planetas.map((planet) => {
                            return (
                                <div className="col-md-4" key={planet.uid}>
                                   
                                    <CardPlaneta
                                    titulo={planet.name}
                                    cardTitulo={planet.created}
                                    texto={planet.climate}
                                     />


                                </div>
                            )
                        })





                    }


                </div>
            </div>
        </>
    )
}
export default Planetas;
