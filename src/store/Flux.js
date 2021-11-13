
const getState = ({ getStore, getActions, setStore }) => {

    return {
        store:
        {
            
            Heroes:[],

            HeroesDetalles:[],

        },
        actions:
        {
           
            getHeroes: (url) => {
                fetch(url).then(resp => resp.json()).then(data => setStore({Heroes: data.results}))

            },

            getHeroesDetalles: (id) => {
                fetch(`https://www.swapi.tech/api/People/${id}/`).then(resp => resp.json()).then(dat => setStore({HeroesDetalles: dat.result.properties}))

            },

           
        }
    }

}



export default getState;