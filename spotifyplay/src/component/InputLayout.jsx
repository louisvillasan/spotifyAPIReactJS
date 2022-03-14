import React, {useState} from 'react';
import { Button, Container } from 'react-bootstrap';
import Inputrange from './InputRange';
import Inputseed from './Inputseed';
import { getRecommendations } from '../api/spotifyApi';

import {setThunkItems } from '../Redux/spottifySlice'
import { useDispatch, useSelector } from 'react-redux';


const InputLayout = ({seedData, handleMoreSeedData, setSeedData}) => {
    
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
    }
    // ,{
    //     type: 'max_popularity', 
    //     value: 0.5
    // }
]

    const  [options, setOptions] = useState(initialOptions)
    const dispatch = useDispatch();



    const handleChangeDataPerItem = (data, idx) =>{
        let newSeedData = seedData;
        newSeedData[idx] = data;
        setSeedData(newSeedData);
    }

    const handleRemoveInputSeed = idx => e => {
        e.preventDefault();
        const newSeedData = seedData.filter((seed, index) =>  index !== idx)
        setSeedData(newSeedData);
    }

    const handleChangueOpPerItem = (op, idx) =>{
        let newOps = options;
        newOps[idx] = op;
        setOptions(newOps);
    }

    const handleData = async () =>{
        console.log('pase')
        dispatch(setThunkItems({
            endpoint: 'recomendation',
            args: [seedData, options]
        }))
        // const items = await getRecommendations(seedData, options );
        // console.log("🚀 ~ file: InputLayout.jsx ~ line 56 ~ handleData ~ items", items)
        
    }


    return (
        <div>
            {seedData.map((data, idx ) => {
                return <Inputseed key={idx}
                data={data} idx={idx} handleChangeDataPerItem={handleChangeDataPerItem}
                handleRemoveInputSeed={handleRemoveInputSeed}/>
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

            <Button  
                    onClick={handleData}
                    className='btnResources'>
                    Submit
            </Button>
            
        </div>
    );
}

export default InputLayout;
