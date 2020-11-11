import React, { useState } from 'react';

function MyComponent() {
    const [name, setName] = useState();
    return (
        <div>
            <input onChange={(event) => {setName(event.target.value)}} type="text" />
            <p>Hi {name}!</p>
        </div>
    );
}

export default MyComponent;