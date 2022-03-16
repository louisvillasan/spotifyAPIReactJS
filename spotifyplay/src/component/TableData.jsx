import React from 'react';


import { Table } from 'react-bootstrap';
const Tabledata = ({items, handleSetArtist}) => {


    return (
        <Table striped bordered hover variant="dark">
            <tbody>
                {items.map((item) =>{
                    return(
                    <tr key={item.id}>
                        <td onClick={()=>handleSetArtist(item)} >{item.name}</td>
                    </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}


export default Tabledata;
