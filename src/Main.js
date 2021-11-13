import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import About from './vistas/About';
import Contact from './vistas/Contact';
import Home from "./vistas/Home";
import NotFound from "./vistas/NotFound";
import Heroes from './vistas/Heroes';
import HeroesDetalle from './vistas/HeroesDetalle';
import InjectContext from './store/appContext';
import Planetas from './vistas/Planetas';
import PlanetasDetalle from './vistas/PlanetasDetalle';



const Main = () => {
    return (
        <BrowserRouter>
        <Navbar/>

   
       

      
       <Switch>

       <Route exact path="/Planetas" component={Planetas} />
       <Route exact path="/Contact" component={Contact} />
       <Route exact path="/About" component={About} />
       <Route exact path="/" component={Home} />
       <Route exact path="/Heroes" component={Heroes} />
       <Route exact path="/Heroes/:product_id/HeroesDetalle" component={HeroesDetalle} />
       <Route exact path="/Planetas/:id/PlanetasDetalle" component={PlanetasDetalle} />


        <Route component={NotFound} />

        


       </Switch>
               
            
        </BrowserRouter>
    )
}

export default InjectContext(Main);