import React,{useState} from 'react';
import { InputGroup, DropdownButton, 
        Dropdown, FormControl, Form } from 'react-bootstrap';
import Searchmodal from './SearchModal';

const Inputseed = ({data, idx, handleChangeDataPerItem}) => {
    
  
    // FIXME: Show artist on the input after clicked on the modal
    // TODO: Block user can text from input
    const [type, setType] = useState('Artist');
    const [showModal, setShowModal] = useState(false);

    const handleSeed = (e) =>{
        e.preventDefault();
        data.value = e.target.value
        handleChangeDataPerItem(data, idx)
    }
    const handleType = (e) => {
        e.preventDefault();
        data.type = e.target.title
        setType(data.type);
        handleChangeDataPerItem(data,idx);
    }

    const handleModal = () =>{
        setShowModal(!showModal)
    }

    const handleSetArtist = seed => e =>{
        console.log("🚀 ~ file: Inputseed.jsx ~ line 31 ~ Inputseed ~ e", e)
        e.preventDefault();
        data.value = seed.name;
        handleChangeDataPerItem( data , idx )
        handleModal();
    }

    return (
        <>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Seeds</Form.Label>
                <InputGroup className="mb-3">
                    <DropdownButton
                    variant="outline-secondary"
                    title={type}
                    id="input-group-dropdown-1"
                    >
                        <Dropdown.Item  title='Artist' 
                                    onClick={handleType} > 
                                    Artist
                        </Dropdown.Item>
                        <Dropdown.Item  title='Track' 
                                    onClick={handleType} > 
                                    Track
                        </Dropdown.Item>
                    </DropdownButton>
                        
                <FormControl  onClick={handleModal}   onChange={handleSeed} aria-label="Text input with dropdown button" />
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

export default Inputseed;
