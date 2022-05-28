import React, { useState } from 'react';

function Example() {
    // Declare uma nova variável de state, a qual chamaremos de "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)} type="button"
                class="btn btn-primary btn-sm">+</button>
            <button onClick={() => setCount(count - 1)} type="button"
                class="btn btn-danger btn-sm">-</button>
            <button onClick={() => setCount(count == 0)} type="button"
                class="btn btn-dark btn-sm">Clique aqui para zerar o contador.</button>
        </div>
    );
}

export default Example;