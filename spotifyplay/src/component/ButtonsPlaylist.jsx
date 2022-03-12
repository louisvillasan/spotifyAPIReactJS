import React, {useState} from 'react';

import { ButtonGroup, Button} from 'react-bootstrap';
import Inpuslayout from './InpusLayout';


const Buttonsplaylist = ({handleBringItems, isLoading}) => {

    const initialSeedData = {
        type: 'artist',
        value: ''
        }


    const [show, setShow] = useState(false)
    const [seedData, setSeedData] = useState([initialSeedData])
    
    const handleInputs = () =>{
        setShow(!show)
    }

    const handleMoreSeedData = () =>{
        (seedData.length<=4) 
            ? setSeedData([...seedData, initialSeedData])
            : alert('Only 5 items');
    }

    return (
        <>
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
                <Button onClick={handleInputs} 
                    className='btnResources'>
                    Made another another 
                </Button>
            </ButtonGroup>
            {show && <Inpuslayout seedData={seedData} 
                    handleMoreSeedData={handleMoreSeedData}
                    setSeedData={setSeedData}/>}
            

        </>
    );
}

export default Buttonsplaylist;
