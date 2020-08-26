import React, { useReducer } from 'react';
import ContextReducer from './ContextReducer';

const Child2 = ()=> {

    let [state, dispatch] = useReducer(ContextReducer, 1)
    

    return(
        <div>
            <h1>This is Reducer </h1>
             <h3>This is a Context Reducer {state}</h3>
             <button onClick={()=> dispatch('Increment')}>Increment Reducer</button>

        </div>

    )
}

export default Child2;