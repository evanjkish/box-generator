import React, { useState } from 'react'
import Form from './form'


const Box = (props) => {


    return (
        <div >
            {props.boxes.map((box, idx) => {
                return (
                    <div key={idx} style={{ backgroundColor: box, height: '100px', width: '100px' }}></div>
                );
            }

            )
            }
        </div>
    )
};
export default Box
