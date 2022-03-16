import React, {useState, useEffect} from 'react';

import { Modal, Button, 
        FormControl, InputGroup} from 'react-bootstrap';

import { searchByArtistOrTrack,
         getPlaylist } from '../api/spotifyApi';

import Tabledata from './TableData';
         

const Searchmodal = ({action, handleModal,  type, handleSetArtist}) => {

    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    
    const [items, setItems] = useState([]);
    
    useEffect( 
        ()=>{
            const fetchItems = async()=>{
            const res = await getPlaylist()
            console.log(res);
            setItems(res);
        }
        if (action === 'showPlaylist')
            fetchItems();
    }, [action])


    useEffect(()=>{
        setLoading(!loading);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[items])
    
    const handleSearch = async (e) =>{
        e.preventDefault();     
        setLoading(!loading)
        const newItems = await searchByArtistOrTrack(query, type);
        setItems(newItems)
        // setLoading(!loading)
    }

    const handleQuery = e =>{
        setQuery(e.target.value)
    }


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

                {action === 'searchBy' && 
                
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
                }

                <Tabledata items={items} handleSetArtist={handleSetArtist}/>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModal} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Searchmodal;
