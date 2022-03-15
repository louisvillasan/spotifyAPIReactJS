import React,{useState} from 'react';
import { InputGroup, DropdownButton, 
        Dropdown, FormControl, Form, Button } from 'react-bootstrap';
import Searchmodal from './SearchModal';

const Inputseed = ({data, idx, handleChangeDataPerItem, handleRemoveInputSeed}) => {
    
  
    const [type, setType] = useState('artist');
    const [showModal, setShowModal] = useState(false);


    const handleType = (e) => {
        e.preventDefault();
        const newData = {...data, type: e.target.title}
        setType(newData.type);
        handleChangeDataPerItem('input', newData, idx);
    }

    const handleModal = () =>{
        setShowModal(!showModal)
    }

    const handleSetArtist = seed => e =>{
        e.preventDefault();
        
        // It is failing here
        handleChangeDataPerItem( 'input', {
            ...data,
            value: seed.name,
            id: seed.id
        } , idx )
        handleModal();
    }

    return (
        <>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Seeds</Form.Label>
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-secondary"
                    title={type}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item  title='artist' 
                                    onClick={handleType} > 
                                    Artist
                        </Dropdown.Item>
                        <Dropdown.Item  title='track' 
                                    onClick={handleType} > 
                                    Track
                        </Dropdown.Item>
                    </DropdownButton>
                        
                <FormControl   onClick={handleModal}   aria-label="Text input with dropdown button"
                               value={data.value} readOnly={true} />
                 <Button  variant="outline-secondary"
                          onClick={()=>handleRemoveInputSeed(data)}>
                    Remove
                </Button>
            </InputGroup>
            </Form.Group>
        </Form>
        {showModal && <Searchmodal 
                        handleModal={handleModal}
                        type={type}
                        handleSetArtist={handleSetArtist}
                        />
                        }
        
        </>

    );
}

Inputseed.defaultProps = {
    data: {},
    idx: null,
    handleChangeDataPerItem: () => {},
    handleRemoveInputSeed: () => {}

  };



export default Inputseed;
