import { useState, useEffect } from 'react'
import { getRecipes } from '../helpers/getRecipes';


export const useFetch = ( endpoint, params="" ) => {
    
    const [data, setData] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getRecipes(endpoint,params)
        .then( movies => {
                
            setData({
                data: movies,
                loading: false
            });
        })
            
    }, [endpoint,params])

    return data; // { data:[], loading: true };


}
