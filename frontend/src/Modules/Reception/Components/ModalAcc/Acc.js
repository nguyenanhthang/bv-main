import React, { useEffect, useState } from "react";
import InfoOrderAcc from "./InfoOrderAcc/InfoOrderAcc"
import InfoCusAcc from "./InfoCusAcc/InfoCusAcc";
import PayAcc from "./PayAcc/PayAcc";
// import ModalPrint from '../ModalAcc/ModalPrint/ModalPrint'

function AccountingPrint(props) {
  const { infoUser,listInfoUser, setListInfoUser, setInfoUser,toggle} = props
 
  
  return (
    <div className="Acounting" style={{ margin: "auto", width: "1200px" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          fontWeight: 600,
          color: "#28b76b",
          fontSize: "20px",
        }}
      >

      </div>

      <InfoCusAcc infoUser={infoUser} />
      <InfoOrderAcc infoUser={infoUser} />
      <PayAcc  infoUser={infoUser}
      setListInfoUser = {setListInfoUser}
      listInfoUser = {listInfoUser}
      setInfoUser = {setInfoUser}
      toggle = {toggle}
      />
     
    </div>
  );
}
export default AccountingPrint;
