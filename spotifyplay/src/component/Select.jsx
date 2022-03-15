import React from 'react';
import { Form } from 'react-bootstrap';


// TODO: Return select value 
const Select = ({select}) => {
    return (
        <Form.Select aria-label="Default select example">
            <option>{select.type} </option>
            {select.values.map(value =>{
                return (
                    <option key={value}
                            value={value}> {value} </option>
                )
            })}
        </Form.Select>
    );
}

export default Select;
