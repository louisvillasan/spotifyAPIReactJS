import React from 'react';


import { Table } from 'react-bootstrap';
const Tabledata = ({items}) => {


    return (
        <Table striped bordered hover variant="dark">
            <tbody>
                {items.map((item) =>{
                    return(
                    <tr key={item.id}>
                        <td>{item.name}</td>
                    </tr>
                    );
                })}
            </tbody>
        </Table>
    );
}

export default Tabledata;
