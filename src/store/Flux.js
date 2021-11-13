
const getState = ({ getStore, getActions, setStore }) => {

    return {
        store:
        {
            
            Heroes:[],

            HeroesDetalles:[],

            Planetas: [],

            PlanetasDetalles: [],

        },
        actions:
        {
           
            getHeroes: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({Heroes: data.results}))

            },

            getHeroesDetalles: (id) => {
                fetch(`https://www.swapi.tech/api/People/${id}/`).then(resp => resp.json()).then(dat => setStore({HeroesDetalles: dat.result.properties}))

            },
            getPlanetas: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({Planetas: data.results}))

            },
            getPlanetasDetalles: (id) => {
                fetch(`https://www.swapi.tech/api/Planets/${id}/`).then(resp => resp.json()).then(dat => setStore({PlanetasDetalles: dat.result.properties}))

            },
           
        }
    }

}



export default getState;