import React, {useState} from 'react';
import {fetchAddTrackToPlaylist  } from '../api/spotifyApi';

import Searchmodal from './SearchModal';

import { Table, Button } from 'react-bootstrap';

const Tabledataaction = ({items}) => {

    const [show, setShow] = useState(false);
    
    const [itemSelected, setItemSelected] = useState();

    const handleModal = (item, e)  => {
        setItemSelected(item);
        setShow(!show);
    }
    
    const handleSetTrackToPlaylist = async (playlist) =>{
        setShow(!show)
        // console.log(itemSelected, ' this is my track')
        const msg = await fetchAddTrackToPlaylist(playlist.id, itemSelected.uri)
        console.log("🚀 ~ file: TableDataAction.jsx ~ line 22 ~ handleSetTrackToPlaylist ~ msg", msg)
    }

    // useEffect(()=>{
    //     console.log(itemSelected, ' This is my item selected');
    // }, [itemSelected])

    return (
        <>
        <Table striped bordered hover variant="dark">
            <tbody>
                {items.map((item) =>{
                    return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td> 
                            <Button onClick={(e)=>handleModal(item, e)}>
                                Add to Playlist 
                            </Button>
                        </td>
                    </tr>
                    );
                })}
            </tbody>
        </Table>
        {show &&  <Searchmodal handleModal={handleModal}
                    title={'Add to playlist ...'}
                    handleSetArtist={handleSetTrackToPlaylist} /> }
        
        </>
    );
}

Tabledataaction.defaultProps = {
    items: [{}],
    handleSetArtist: () => {}
  };

export default Tabledataaction;
