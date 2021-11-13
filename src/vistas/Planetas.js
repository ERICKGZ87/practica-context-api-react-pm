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
                   

                </div>
            </div>
        </>
    )
}
export default Planetas;
