import React from 'react';
import { Form } from 'react-bootstrap';

const Inputrange = ({op, handleChangueOpPerItem, idx}) => {

    const handleOption = (e) =>{
        e.preventDefault()
        op.value = (Math.floor(e.target.value/10))/10
        handleChangueOpPerItem(op, idx)
        console.log("🚀 ~ file: InputRange.jsx ~ line 8 ~ handleOption ~ op", op)        
    }


    return (
        <>
            <Form.Label>{op.type}</Form.Label>
            <Form.Range onChange={handleOption} />
        </>
    );
}

export default Inputrange;
