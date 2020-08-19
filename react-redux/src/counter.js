import React from 'react'

const Counter = ({ counter, dec, inc, rnd }) => {
   return (
      <div class="jumbotron">
         <h2>Redux + React</h2>
         <p class="text-lg font-weight-bold">{counter}</p>
         <button 
            onClick={dec}
            class="btn btn-primary btn-lg"
         >
            DEC
         </button>
         <button 
            onClick={inc}
            class="btn btn-primary btn-lg"
         >
            INC
         </button>
         <button 
            onClick={rnd}
            class="btn btn-secondary btn-lg"
         >
            RND
         </button>
      </div>
   )
}

export default Counter