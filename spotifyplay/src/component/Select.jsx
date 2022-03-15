import React from 'react';
import { Form } from 'react-bootstrap';


// TODO: Return select value 
const Select = ({select,handleChangeDataPerItemGeneric}) => {


    const handleSelectValue = e =>{
        console.log(e.target.value)
        handleChangeDataPerItemGeneric('select', {
            ...select,
            currentValue: e.target.value
        }, 0) 
    }

    return (
        <Form.Select aria-label="Default select example"
            onChange={handleSelectValue}>
            <option>{select.type} </option>
            {select.values.map(value =>{
                return (
                    <option key={value}
                            value={value.slice(3)}> {value}
                            </option>
                )
            })}
        </Form.Select>
    );
}

export default Select;
