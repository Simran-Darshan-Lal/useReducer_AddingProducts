import { useReducer, useState } from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': {
            return [
                ...state, { name: action.payload.name, price: action.payload.price }
            ]
        }
        default:
            return state;
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, [])
    const [proName, setProName] = useState('')
    const [proPrice, setProPrice] = useState('')
    console.log(state);
    return (<>
        <h3>This is a Counter!</h3>
        {/* <button onClick={() => dispatch({ type: 'DECREMENT', payload: 5 })}>-</button>
        <span>Count: {state.count}</span>
        <button onClick={() => dispatch({ type: 'INCREMENT', payload: 10 })}>+</button> */}
        <h4>This is List</h4>
        <label>Name:<input name="field1" type="text" value={proName} onChange={(e) => { setProName(e.target.value) }} /></label>
        <label>Price:<input price="field2" type="text" value={proPrice} onChange={(e) => { setProPrice(e.target.value) }} /></label>
        <button onClick={() => dispatch({ type: 'ADD', payload: { name: proName, price: proPrice } })}>Add Product</button>
        <h1>This is Name and product </h1>
        <div>{state.map((item) => <h2>{item.name},{item.price} </h2>)}
        </div>
    </>
    )
}
export default Counter;
