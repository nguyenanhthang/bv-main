import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Acc from './Acc'
function ModalFullscreenExample(props) {
  const { modal,  
          toggle,  
          infoUser, 
          listInfoUser, 
          setListInfoUser, 
          setInfoUser,
          isChecked,
          handleUpdate} = props
  

  return (
    <div>
      {isChecked? 
        
        (<Button style={{fontSize:'large', margin:'20px', padding:'8px'}} color="success" onClick={handleUpdate} >Update</Button> )
      :(
      <Button style={{fontSize:'large', margin:'20px', padding:'8px'}} color="success" onClick={toggle}>
        Lưu
        </Button>
)
}
      <Modal isOpen={modal} toggle={toggle} fullscreen>
        <h3 style={{textAlign:'center',color:'#28b76b', marginTop:'20px', fontSize:'33px', fontWeight:'700'}}>Thu Ngân</h3>
        <ModalBody>
          <Acc  
          infoUser = {infoUser} 
          setInfoUser = {setInfoUser} 
          listInfoUser = {listInfoUser} 
          setListInfoUser = {setListInfoUser}
          toggle = {toggle}
        />
        </ModalBody>
        <ModalFooter>
        
          <Button color="danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalFullscreenExample;