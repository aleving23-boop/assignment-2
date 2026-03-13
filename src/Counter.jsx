import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

     const decrementCount = () => {
        setCount(count - 1);
    };

     const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrementCount}> Decrement </button>
            <button onClick={resetCount}> Reset </button>
            <button onClick={incrementCount}> Increment </button>
        </div>
    )
};

export default Counter;