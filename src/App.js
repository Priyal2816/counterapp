import { useState } from 'react';

import './App.css';

function App() {

const [count, setCount] = useState(0);

function handlerDecrement() {

setCount(count - 1);

}

function handlerIncrement() {

setCount(count + 1);

}

function handlerReset() {

setCount(0);

}

return (

<div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">



  <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>



  <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">



    <button onClick={handlerDecrement} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">

         -

    </button>



    <div className="font-bold gap-12 text-5xl">

        {count}

    </div>



    <button onClick={handlerIncrement} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">

        +

    </button>



  </div>



  <button onClick={handlerReset} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">

    Reset

  </button>

</div>

);

}

export default App;
