import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardPlaneta = ({ id,nombre,cardTitulo,texto }) => {

    return (
        <div className="card">
            <div
                className="card text-white bg-secondary mb-3"
                style={{ maxWidth: "18rem" }}
            >
                <div className="card-header"><h1>{nombre}</h1></div>
                <div className="card-body">
                    <h4 className="card-title">{cardTitulo}</h4>
                    <p className="card-text">
                      {texto}
                    </p>
                    <Link to={"/Planetas/" + id + "/PlanetasDetalle"} className="btn btn-primary">
                        Mas Informacion
                    </Link>
                </div>
            </div>
        </div>

    )

}
CardPlaneta.PropType = {
    cardTitulo: PropType.string,
    titulo: PropType.string,
    texto: PropType.number,
    


}

export default CardPlaneta;