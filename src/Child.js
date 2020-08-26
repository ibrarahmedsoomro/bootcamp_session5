import React, {useContext} from 'react';
import counterContext from './CounterContext';





const Child = () => {
    let counterValue = useContext(counterContext)
    

    return(
         <div>

             <h1>This is Context</h1>

             <h4>This is a cOntext :{counterValue[0]}</h4>

             <button onClick ={ ()=> {counterValue[1](++counterValue[0])}}> Increment Context </button>

         </div>
    )
}

export default Child;