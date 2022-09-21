import React, { Fragment, useRef , useEffect} from 'react';

import { Form} from "reactstrap";
import ReactToPrint from 'react-to-print';
import "./Print_2.scss";
import {useLocation} from 'react-router-dom'
import logoPK from '../../../../../Assets/img/logoPK.png'
import QRcode from '../../../../../Assets/img/QRcode.png'
function Print(props) {
  const componentRef = useRef();
//   // const{infoUser} = props
//   const location = useLocation();
//   const state = location.state;
//   // console.log(state);
 
  
 
  let time = new Date().toLocaleTimeString('en-US', { hour12: false });
  let today = new Date().toLocaleDateString("en-GB");
  const [Ctime, setCtime] = React.useState(time);
  const [date, setDate] = React.useState(today);
  const updateTime = () => {
      time = new Date().toLocaleTimeString('en-US', { hour12: false });
      setCtime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <Fragment>
      
      <div className="print" ref={componentRef}>
        <div className="print-form">
          <Form>
            <div className="header">
              <div className="print-form-left">
                <div className="print-form-logo">
                  <img src={logoPK} alt="" />
                </div>
                <div className="print-form-infoCompany">
                  <p className="nameCompany">PHÒNG KHÁM ĐA KHOA VIỆT ĐOÀN</p>
                  <span className="company-adress">
                    Bách Môn, Việt Đoàn, Tiên Du, Bắc Ninh
                  </span>
                  <br />
                  <span className="company-hotline">
                    SĐT: 02222208999 - 0869968688
                  </span>
                </div>
              </div>
              <div className="print-form-right">
                <div className="QRcode">
                  <img alt="aaaa" src={QRcode} />
                </div>
                <div className="idcode">280810141201</div>
              </div>
            </div>
            <div className="content">
              <div className="content-header">
                <h2 className="header-title">BIÊN LAI THU TIỀN</h2>
                <p className="header-Lien1">Liên 2: Đưa cho khách</p>
                <span className="header-time">
                {Ctime} Ngày {date}
                </span>
              </div>
              <div className="content-body">
                <div className="infoUser">
                  <div className="infoUser-name">
                    Họ Tên:
                    <b>
                      <span>NGUYỄN NGỌC ĐỨC</span>
                    </b>
                  </div>
                  <div className="infoUser-birthday">
                    Ngày sinh:
                    <span>21/02/2001 </span>
                  </div>
                  <div className="infoUser-sex">
                    Giới tính:
                    <span>Nam</span>
                  </div>
                  <div className="infoUser-phone">
                    Điện thoại:
                    <span>0343674598</span>
                  </div>
                  <div className="infoUser-adress">
                    Địa chỉ:
                    <span>Thái Bình</span>
                  </div>
                </div>
                <div className="info-sevice-stt" style={{ marginTop: "-10px" }}>
                  <div className="info-sevice">
                    <div className="sevice">
                      Phòng Khám:
                      <span>Phòng khám nội</span>
                    </div>
                    <div className="Price-origin">
                      Giá gốc:
                      <b>
                        <span>500000</span>
                      </b>
                    </div>
                    <div className="Price-sale">
                      Số tiền được khuyến mãi:
                      <b>
                        <span>100000</span>
                      </b>
                    </div>
                    <div className="Price-total">
                      Tổng số tiền thanh toán:
                      <b>
                        <span>40000 </span>
                      </b>
                    </div>
                    <div className="Price-total-write">
                      Viết bằng chữ:
                      <b>
                        <span> Bốn mươi nghìn đồng</span>
                      </b>
                    </div>
                  </div>
                  <div className="info-stt">
                    <div className="stt">
                      Số Thứ Tự :{" "}
                      <b>
                        <span>12</span>
                      </b>
                    </div>
                    <div className="room">
                      <span>Khám nội - Tầng 2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-footer">
                <div className="user">
                  <b>Người nộp tiền</b>
                  <br />
                  <span>(Ký , họ tên)</span>
                </div>
                <div className="reception">
                  <b>Người thu tiền</b>
                  <br />
                  <span>(Ký , họ tên)</span>
                  <h4>NGUYỄN THÙY TRINH</h4>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <ReactToPrint
      
        trigger={() => <div className='print__form'><button className='btn-print'>Print </button></div>}
        content={() => componentRef.current}
      />
    </Fragment>
  );
}

export default Print;
