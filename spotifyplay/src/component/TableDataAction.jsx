import React, {useState} from 'react';
import {fetchAddTrackToPlaylist  } from '../api/spotifyApi';

import Searchmodal from './SearchModal';

import { Table, Button } from 'react-bootstrap';
import Messagemodal from './MessageModal';

const Tabledataaction = ({items}) => {

    const [show, setShow] = useState(false);
    const [showMessage, setShowMessage] = useState('')
    
    const [itemSelected, setItemSelected] = useState();

    const handleModal = (item)  => {
        setItemSelected(item);
        setShow(!show);
    }


    
    const handleSetTrackToPlaylist = async (playlist) =>{
        setShow(!show)
        const msg = await fetchAddTrackToPlaylist(playlist.id, itemSelected.uri)
        if (msg)
            handleMessageModal();

        console.log("🚀 ~ file: TableDataAction.jsx ~ line 22 ~ handleSetTrackToPlaylist ~ msg", msg)
    }

    const handleMessageModal = () =>{
        setShowMessage(!showMessage);
    }

    // useEffect(()=>{
    //     console.log(itemSelected, ' This is my item selected');
    // }, [itemSelected])

    return (
        <>
        <Table  bordered responsive hover>
            <tbody>
                {items.map((item) =>{
                    return(
                    <tr key={item.id}>
                        <td>{`${item.name} by  ${item.artists[0].name} `}</td>
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
                    handleSetArtist={handleSetTrackToPlaylist}
                    action={'showPlaylist'} 
                    /> }
        {showMessage && <Messagemodal handleMessageModal={handleMessageModal}
                        title={'Added to your playlist'} />}
        
        </>
    );
}

Tabledataaction.defaultProps = {
    items: [{}],
    handleSetArtist: () => {}
  };

export default Tabledataaction;
