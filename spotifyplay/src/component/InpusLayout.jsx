import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import Inputrange from './InputRange';
import Inputseed from './Inputseed';

const Inpuslayout = ({seedData, handleMoreSeedData, setSeedData}) => {
    
    const initialOptions = [{
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
    },{
        type: 'max_popularity', 
        value: 0.5
    }]

    const  [options, setOptions] = useState(initialOptions)

    // TODO: Get The recomendations with the inputs 

    const handleChangeDataPerItem = (data, idx) =>{
        let newSeedData = seedData;
        newSeedData[idx] = data;
        setSeedData(newSeedData);
        console.log("🚀 ~ file: InpusLayout.jsx ~ line 9 ~ handleChangeDataPerItem ~ seedData", seedData)
    }

    const handleChangueOpPerItem = (op, idx) =>{
        let newOps = options;
        newOps[idx] = op;
        setOptions(newOps);
    }


    return (
        <div>
            {seedData.map((data, idx ) => {
                return <Inputseed key={idx}
                data={data} idx={idx} handleChangeDataPerItem={handleChangeDataPerItem}/>
            })}
            <Button  
                onClick={handleMoreSeedData}
                    className='btnResources'>
                    Add seeds 
            </Button>
            <Container>
                {options.map( (op, idx) => {
                    return (
                        <Inputrange key={idx} op={op} idx={idx}
                        handleChangueOpPerItem={handleChangueOpPerItem}/>
                    )
                })}
                
            </Container>
            
        </div>
    );
}

export default Inpuslayout;
