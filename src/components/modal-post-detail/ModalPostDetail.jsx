import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';




/**
 * Componente basado en function
 * 
 * @author Emmanuel Lepe <simon.lepe@gmail.com>
 * @since 0.1.0
 * @version 1.0.0 
 * 
 * @param {*} props 
 * @param {string} props.className
 * @param {*} props.id
 * @param {*} props.detalle
 */

const ModalPostDetail = (props) => {

    const [modal, setModal] = useState(false);
    

    const toggle = (history) =>  {
      setModal(!modal);
    };

    
  
    return (
      <div className="">
        <Button color="primary" onClick={toggle}>{props.buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={props.className}>
          <ModalHeader toggle={toggle}>Detalle</ModalHeader>
          <ModalBody className="ml-2 mr-2">            
            <p>{props.detalle}</p>
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </Modal>
      </div>
    );

}

export default ModalPostDetail;