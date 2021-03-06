
import CardHeroes from "../componentes/CardHeroes";
import { useParams, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ListaFavoritos from "../componentes/ListaFavoritos";


const Heroes = () => {
    const { store, actions } = useContext(Context);
    const [favoritos, setfavoritos] = useState([])
    const { product_id } = useParams();
    const [images, setImages] = useState ([

        {id: 1, url: "https://c8.alamy.com/compes/2b8w8da/star-wars-1977-lucasfilm-20th-century-fox-con-mark-hamill-como-luke-skywalker-2b8w8da.jpg"},
        {id: 2, url: "https://media.revistagq.com/photos/5f50af1b9d4e3d875292aea3/3:2/w_1998,h_1332,c_limit/c3po.jpg"},
        {id: 3, url: "https://m.media-amazon.com/images/I/61srwGulapL._AC_SX679_.jpg"},
        {id: 4, url: "https://depor.com/resizer/KNPCpo2Jsd5qAuvru0EbJ8Sj-R0=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/Z7B7S4BVSZFJFPCI5Z4TZI7GQM.jpg"},
        {id: 5, url: "http://pm1.narvii.com/6240/500eddc6a556ae64973ba2bbd2471bbbd86cd832_00.jpg"},
        {id: 6, url: "http://pm1.narvii.com/6955/8de3ebe4060f25b47bb284ef0708886144d46dd8r1-377-382v2_00.jpg"},
        {id: 7, url: "https://i2.wp.com/thefutureoftheforce.com/wp-content/uploads/2018/01/aunt-beru-header.jpg?resize=672%2C372&ssl=1.jpg"},
        {id: 8, url: "http://pm1.narvii.com/6886/54c8e45f075cdb3ef82c3372fd380378c11c56dfr1-398-365v2_00.jpg"},
        {id: 9, url: "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780"},
        {id: 10, url: "https://www.latercera.com/resizer/QGuEqvFKJQUH3nq4SK11NcSdzTo=/375x250/smart/filters:focal(450x62:460x52)/cloudfront-us-east-1.images.arcpublishing.com/copesa/JHODGDNOINE2BFODBMDY55WKPE.jpg"},
    ]);
   

   { favoritos.map((valor, indice) => {
        return (
          <li key={indice}>{valor}</li>

        )
      })}


    return (
        <div className="Container">
        
            <ListaFavoritos
            id={product_id}
                data={favoritos}
            />
            <div className="row">
            <h1>Lista de Personajes de Stars Wars</h1>

                {
                    store.Heroes !== null &&
                    store.Heroes.map((prode) => {
                    let data1=images.find((prod) => prod.id === parseInt(prode.uid));
                        return (
                            <>

                                <div className="col-sm-4 py-2" key={prode.uid}>

                                    <CardHeroes
                                Url={data1.url}
                                        titulo={prode.name}
                                        id={prode.uid}
                                    />
                                    <button id="boton" className="btn btn-primary" style={{ marginBottom: 1 }} onClick={() => setfavoritos(favoritos.concat(prode.name))}>
                                       <img src="/star.jpg" id="logoboton"></img>
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