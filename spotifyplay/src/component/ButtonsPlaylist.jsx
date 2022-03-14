import React, {useState} from 'react';

import { ButtonGroup, Button} from 'react-bootstrap';
import InputLayout from './InputLayout';


const Buttonsplaylist = ({handleBringItems, isLoading}) => {

    const [initialState, setInitialState] = useState();
    
    const initialSeedDataRecomendation = [{
        type: 'artist',
        value: '',
        id: ''
        }]


    const [show, setShow] = useState(false)
    // const [seedData, setSeedData] = useState([initialSeedData])
    
    const handleInputs = (endpoint) =>{
        if ('recommendation' ===  endpoint){
            setInitialState(initialSeedDataRecomendation);
        }
        setShow(!show)
    }

   


    return (
        <>
            <ButtonGroup  size="lg" className="mb-2">
                <Button id="btnTopArtistTopSongs" 
                    onClick={()=>handleBringItems({endpoint: 'topArtistTopSongs'})} className='btnResources'>
                    {(isLoading)  ? <span>Cargando</span>
                                : <span>  Your top artist, his top songs </span>}

                </Button>
                
                <Button id="btnRecTopSongs" 
                    onClick={()=>handleInputs('recommendation')} className='btnResources'>
                    {(isLoading)  ? <span>Cargando</span>
                                : <span>  Reomendations from your top songs </span>}

                </Button>

            </ButtonGroup>
            {show && <InputLayout 
                    initialState={initialState}/>}
        </>
    );
}

export default Buttonsplaylist;
