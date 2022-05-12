import { useState, useEffect } from 'react'
import { getRecipes } from '../helpers/getRecipes';


export const useFetch = ( endpoint ) => {
    
    const [data, setData] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        /* const params="&region=US" */
        getRecipes(endpoint/* ,params */)
        .then( movies => {
                
            setData({
                data: movies,
                loading: false
            });
        })
            
    }, [endpoint])

    return data; // { data:[], loading: true };


}
