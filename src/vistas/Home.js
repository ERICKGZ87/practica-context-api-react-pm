
import CarrouselHome from "../componentes/CarrouselHome";



const Home = () => {

    return (
        <>
 <div className="container">

<div className="row">
    <div className="col-md-1"></div>
    <h1>SUperHeroes Mas Poderosos del mundo</h1>
    <div className="col-md-10">

   
    <CarrouselHome img1="https://www.superherodb.com//pictures2//portraits//10//100//10060.jpg"
            img2="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/956.jpg"
            img3="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1460.jpg"
            img4="https:\/\/www.superherodb.com\/pictures2\/portraits\/10\/100\/1.jpg"
        />
   
    </div>
    <div className="col-md-1"></div>
</div>

</div>
           
        </>
    )
}
export default Home;
