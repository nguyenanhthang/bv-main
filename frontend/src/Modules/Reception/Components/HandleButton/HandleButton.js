import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import './HandleButton.scss'
import ModalAcc from '../ModalAcc/ModalAcc'
function HandleButton(props) {
   
    const { setInfoUser, 
            HandleButtonSave, 
            HandleButtonClose, 
            modal, 
            setModal,
            toggle, 
            infoUser, 
            listInfoUser, 
            setListInfoUser,
            isChecked,
            handleUpdate
        } = props;
   
    return (
        <div className="Handle__Button">
            <ButtonGroup>
                <Button onClick={() => { HandleButtonClose() }} className='Handle__Button__child' color="danger"><span className='Handle__Button__child__text'>Xóa</span></Button>
                {/* <Button  className='Handle__Button__child' color="success"><span className='Handle__Button__child__text'>Sửa</span></Button> */}
                <ModalAcc toggle = {toggle} 
                    modal = {modal} 
                    infoUser = {infoUser} 
                    listInfoUser = {listInfoUser} 
                    setModal = {setModal} 
                    setListInfoUser = {setListInfoUser}
                    setInfoUser = {setInfoUser} 
                    isChecked = {isChecked}
                    handleUpdate={handleUpdate}
                    />
            </ButtonGroup>
        </div>
    )
}


export default HandleButton