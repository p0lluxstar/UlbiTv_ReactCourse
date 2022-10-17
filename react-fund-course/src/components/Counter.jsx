import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(0); 

    function inc (){
        setCount (count + 1)
      }
    
      function dec () {
        setCount (count - 1)
      }

    return (
        <div>
            <h1>Функциональный компонент</h1>
            <h2>{count}</h2>
            <button onClick={inc}>Увеличить</button>
            <button onClick={dec}>Уменьшить</button>
        </div>
    );
};

export default Counter;