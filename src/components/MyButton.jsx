import React, { useState } from 'react'

const MyButton = () => {
    
   const[count, setCount] = useState(0);

    return (
    <div>
        <button onClick={() => setCount(count + 1)}
        className='p-5 border-4 border-cyan-600 text-white bg-black hover:bg-amber-400 hover:animate-bounce'>

        {count}

      </button>
    </div>
  )
}

export default MyButton