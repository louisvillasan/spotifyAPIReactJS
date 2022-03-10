import React from 'react';

import { ButtonGroup, Button} from 'react-bootstrap';

const Buttonsplaylist = ({handleBringItems, isLoading}) => {
    return (
        <ButtonGroup  size="lg" className="mb-2">
            <Button id="btnTopArtistTopSongs" 
                onClick={()=>handleBringItems(1)} className='btnResources'>
                {(isLoading)  ? <span>Cargando</span>
                            : <span>  Your top artist, his top songs </span>}

            </Button>
            
            <Button id="btnRecTopSongs" 
                onClick={()=>handleBringItems(2)} className='btnResources'>
                {(isLoading)  ? <span>Cargando</span>
                            : <span>  Reomendations from your top songs </span>}

            </Button>
            <Button className='btnResources'>
                Made another another 
            </Button>
        </ButtonGroup>
    );
}

export default Buttonsplaylist;
