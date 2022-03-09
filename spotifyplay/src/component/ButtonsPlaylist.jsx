import React from 'react';

import { ButtonGroup, Button} from 'react-bootstrap';

const Buttonsplaylist = ({handleBringItems}) => {
    return (
        <ButtonGroup  size="lg" className="mb-2">
        <Button onClick={handleBringItems} className='btnResources'>
            Made a Playlist, for top artist, top tracks
        </Button>
        
        <Button className='btnResources' >
            Made another Playlist
        </Button>
        <Button className='btnResources'>
            Made another another 
        </Button>
    </ButtonGroup>
    );
}

export default Buttonsplaylist;
