import React, { useState } from 'react'

const Form = (props) => {

    const [colorInput, setColorInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBox(colorInput);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input
                type="text"
                onChange={(e) => setColorInput(e.target.value)}
                value={colorInput}
            />
            <button>Submit</button>
        </form>
    )
}

export default Form
