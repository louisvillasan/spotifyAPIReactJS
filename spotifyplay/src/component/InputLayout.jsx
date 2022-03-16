import React, {useState, useEffect} from 'react';
// Redux
import { useDispatch } from 'react-redux';
import {setThunkItems } from '../Redux/spottifySlice'
// Components
import Inputseed from './Inputseed';
import Inputrange from './InputRange';
import Select from './Select';
// Bootstrap
import { Button, Container } from 'react-bootstrap';


const InputLayout = ({initialState}) => {

    // ,{
    //     type: 'max_popularity', 
    //     value: 0.5
    // }

    const [inputs, setInputs] = useState(initialState.inputs)
    const [selects, setSelects] = useState(initialState.selects);

    const [options, setOptions] = useState(initialState.options)
    const dispatch = useDispatch();

    // TODO: create a custom hook for manage the inputs dinamyclly

    const handleChangeDataPerItemGeneric = (inputType, data, idx) => {
        
        if (inputType === 'input') {
            setInputs(inputs.map((input,index) => {
                return (index===idx) ? data : input
            }));
        }else if (inputType === 'option'){
            setOptions(options.map((option,index) =>{
                return (index === idx) ? data : option
            }))
        }else if (inputType === 'select'){
            setSelects(selects.map((select,index) =>{
                return (index === idx) ? data : select
            }))
        }
    }


    useEffect(()=>{
        // console.log("🚀 ~ file: InputLayout.jsx ~ line 45 ~ useEffect ~ options", options);
        console.log("🚀 ~ file: InputLayout.jsx ~ line 49 ~ InputLayout ~ selects", selects)
    }, [selects])

    const handleMoreinputs = () =>{
        (inputs.length<=4) 
            ? setInputs([...inputs, initialState.inputs[0]])
            : alert('Only 5 items');
    }

    const handleRemoveInputSeed = data => {  
        if (inputs.length > 1)
            setInputs(inputs.filter((seed) =>  seed.id !== data.id))
    }

    // const handleChangueOpPerItem = (op, idx) =>{
    //     let newOps = options;
    //     newOps[idx] = op;
    //     setOptions(newOps);
    // }

    const handleData = async () =>{
        
        const endpoint = initialState.endpoint
        console.log("🚀 ~ file: InputLayout.jsx ~ line 66 ~ handleData ~ initialState", initialState)
        if ('recomendation' === endpoint){
            console.log('pase')
            dispatch(setThunkItems({
                endpoint: 'recomendation',
                args: [inputs, options]
            }))
        }else if ('topArtistTopSongs' === endpoint){
            dispatch(setThunkItems({
                endpoint: 'topArtistTopSongs',
                args: [selects]
            }))
        }
        
    }

  

    return (
        <div>
            {inputs.map((data, idx ) => {
                return <Inputseed key={idx}
                data={data} idx={idx} handleChangeDataPerItem={handleChangeDataPerItemGeneric}
                handleRemoveInputSeed={handleRemoveInputSeed}/>
            })}
            {inputs.length>0 && 
                <Button  
                    onClick={()=>handleMoreinputs()}
                    className='btnResources'>
                    Add seeds 
                </Button>}
            
            <Container>
                {options.map( (op, idx) => {
                    return (
                        <Inputrange key={idx} op={op} idx={idx}
                        handleChangueOpPerItem={handleChangeDataPerItemGeneric}/>
                    )
                })}
                
            </Container>
            <Container>
                {selects.map(select =>{
                    return (<Select key={select.type} 
                                select={select}
                                handleChangeDataPerItemGeneric={handleChangeDataPerItemGeneric}/>)
                })}
            </Container>

            <Button  
                    onClick={handleData}
                    className='btnResources'>
                    Get Tracks
            </Button>
            
        </div>
    );
}


// InputLayout.defaultProps = {
//     initialState: {
//         endpoint: '',
//         inputs: [{

//         }],
//         options:[],
//         selects: []
//     }
//   };


export default InputLayout;
