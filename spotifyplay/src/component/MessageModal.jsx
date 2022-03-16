import React from 'react';
import { Modal, Button } from 'react-bootstrap';
const Messagemodal = ({handleMessageModal, title}) => {
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={true}
            >
            <Modal.Body>

                <Modal.Title>
                    {title}
                </Modal.Title>     

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleMessageModal} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default Messagemodal;
