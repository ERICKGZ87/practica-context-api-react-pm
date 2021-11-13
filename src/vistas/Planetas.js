import { useContext } from "react";
import CardPlaneta from "../componentes/CardPlaneta";
import { Context } from "../store/appContext";

const Planetas = () => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="container">


                <div className="row">
                    <h1>Lista de planetas</h1>
                    {
                        store.Planetas !== null &&
                        store.Planetas.map((prod) => {

                            return (
                                <>

                                    <div className="col-sm-4 py-2" key={prod.uid}>

                                        <CardPlaneta

                                            nombre={prod.name}
                                            id={prod.uid}
                                         
                                        />
                                

                                    </div>
                                </>
                            )
                        })
                    }




                </div>
            </div>
        </>
    )
}
export default Planetas;
