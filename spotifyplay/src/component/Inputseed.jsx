import React from 'react';
import { InputGroup, DropdownButton, 
        Dropdown, FormControl, Form } from 'react-bootstrap';

const Inputseed = ({data, idx, handleChangeDataPerItem}) => {
    
  
    // TODO: Set Artist by his ID
    //TODO: Set Type for the Artist or Tracks

    const handleSeed = (e) =>{
        e.preventDefault();
        data.value = e.target.value
        handleChangeDataPerItem(data, idx)
        
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Seeds</Form.Label>
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-secondary"
                    title="Dropdown"
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item>Artist</Dropdown.Item>
                        <Dropdown.Item>Track</Dropdown.Item>
                    </DropdownButton>
                <FormControl onChange={handleSeed} aria-label="Text input with dropdown button" />
            </InputGroup>
            </Form.Group>
        </Form>
    );
}

export default Inputseed;
