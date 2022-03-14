import React, {useState} from 'react';
import { Modal, Button, 
        FormControl, InputGroup} from 'react-bootstrap';
import { searchByArtistOrTrack } from '../api/spotifyApi';
import Tabledata from './TableData';


const Searchmodal = ({handleModal,type, handleSetArtist }) => {

    const [query, setQuery] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e) =>{
        setLoading(!loading)
        e.preventDefault();
        
        const newItems = await searchByArtistOrTrack(query, type);
        setItems(newItems)
        setLoading(!loading)
    }

    const handleQuery = e =>{
        setQuery(e.target.value)
    }

    // FIXME: Fix loading button

    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={true}
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Search by {type}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder={`Search by ${type}`}
                    aria-label="search"
                    aria-describedby="basic-addon2"
                    onChange={handleQuery}
                    />                    
                    <Button variant="outline-secondary" 
                                        id="button-addon2" onClick={handleSearch}>
                        {loading ? <span>Loading</span>
                                 : <span>Search</span>}
                    </Button>
                </InputGroup>

                <Tabledata items={items} handleSetArtist={handleSetArtist}/>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModal} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Searchmodal;
