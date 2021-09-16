import { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(1)
    return (
        <div>
    <h1>{count}</h1>
<button onClick={() => setCount(count - 1)}>-</button>
<button onClick={() => setCount(count + 1)}>+</button>
<button> agregar al carri </button>


<h1>Stock 20</h1>

        </div>
    )
}


export default Counter