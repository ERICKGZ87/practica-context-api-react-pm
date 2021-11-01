import { Link } from "react-router-dom";
import PropType from "prop-types";

const CardProduct = ({ id,titulo,Url,descripcion}) => {

    return (
        <div className="card">
            <img src={Url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                  {descripcion}
                </p>
                <Link to={"/Product/" + id + "/ProductDetalle"} className="btn btn-primary">
                    Mas Informacion
                </Link>
            </div>
        </div>

    )

}
CardProduct.PropType = {
    descripcion: PropType.string,
    titulo: PropType.string,
    id:PropType.number,
    Url: PropType.string,
   
    
    }
    
export default CardProduct;