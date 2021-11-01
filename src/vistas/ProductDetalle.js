import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

const ProductDetalle = (props) => {
    const { store, actions } = useContext(Context);

    const Historia = useHistory()


    const { product_id } = useParams();

    /*const [images,setImages] = useState ([
        {id:1,Url:"https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"},
        {id:2,Url:"https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=415&q=80"},
        {id:3,Url:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"},
        {id:4,Url:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}
    ])*/
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        // console.log(product_id)
        //const SelectedProd = images.find((prod)=>prod.id == product_id);

        const SelectedProd = store.Heroes
        .find((prod) => prod.id === parseInt(product_id));
        setSelected(SelectedProd);
    }, [])

    return (
        <div className="container">

            <div className="row">

                <div className="col-md-4">
                </div>
                <div className="col-md-4">
                    <div className="card mb-4" style={{ maxWidth: 700 }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={selected && selected.url} className="card-img-top img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{selected && selected.name}</h5>
                                    <p className="card-text">
                                       
                                    </p>
                                    <p className="card-text">
                                        <ul>
                                            <li key={selected && selected.id}>Fuerza  {selected && selected.strength}</li>
                                        </ul>
                                    </p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                   
                                </div>
                                <button className="btn btn-warning"
                                        onClick={Historia.goBack}>
                                        Regresar
                                    </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                </div>



            </div>
           
            
        </div>


    )



}

export default ProductDetalle;