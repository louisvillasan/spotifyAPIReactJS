import React, {useState} from 'react';

import { ButtonGroup, Button} from 'react-bootstrap';
import InputLayout from './InputLayout';


const Buttonsplaylist = ({handleBringItems, isLoading}) => {

    const [initialState, setInitialState] = useState();
    
    const initialSeedDataRecomendation = {
            endpoint: 'recommendation',
            inputs: [{
                type: 'artist',
                value: '',
                id: ''
                }],
            options: [{
                    type: 'max_acousticness', 
                    value: 0.5
                },{
                    type: 'max_danceability', 
                    value: 0.5
                },{
                    type: 'max_energy', 
                    value: 0.5
                },{
                    type: 'max_instrumentalness', 
                    value: 0.5
                },{
                    type: 'max_loudness', 
                    value: 0.5
                }],
            selects: [],
        }

    const initialSeedDataTop = {
        endpoint: 'topArtistTopSongs',
        inputs: [],
        options: [],
        selects: [{
            type: 'Artist or Track',
            values: ['by artist', 'by track'],
            currentValue: ''
        }]
    }


    const [show, setShow] = useState(false)

    
    const handleInputs = (endpoint) =>{
        if ('recommendation' ===  endpoint){
            setInitialState(initialSeedDataRecomendation);
        }else if ('topArtistTopSongs' === endpoint){
            setInitialState(initialSeedDataTop);        
        }
        setShow(!show)
    }
    // <Button id="btnTopArtistTopSongs" 
    // onClick={()=>handleBringItems({endpoint: 'topArtistTopSongs'})} className='btnResources'>
    // {(isLoading)  ? <span>Cargando</span>
    //             : <span>  Top Items </span>}



    return (
        <>
            <ButtonGroup  size="lg" className="mb-2">
                <Button id="btnTopArtistTopSongs" 
                    onClick={()=>handleInputs('topArtistTopSongs')} className='btnResources'>
                    {(isLoading)  ? <span>Cargando</span>
                                : <span>  Top Items </span>}

                </Button>
                
                <Button id="btnRecTopSongs" 
                    onClick={()=>handleInputs('recommendation')} className='btnResources'>
                    {(isLoading)  ? <span>Cargando</span>
                                : <span> Get Recommendations from  </span>}

                </Button>

            </ButtonGroup>
            {show && <InputLayout 
                    initialState={initialState}/>}
        </>
    );
}

export default Buttonsplaylist;
