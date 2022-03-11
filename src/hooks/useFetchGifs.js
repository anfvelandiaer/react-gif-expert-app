import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    // EL segundo parámetro dice que se lanza el effect si la categoria cambia, 
    //si se deja un array vacio solo se ejecuta una vez, si se deja undefined se ejcuta siempre
    useEffect(()=> {
        getGifs(category)
        .then(imgs=> {
            setState( {
                data: imgs,
                loading: false
            });
        });
    }, [category]);

    return state;
}