import React, { Fragment, useRef } from "react";
import { Form, Row, Col } from "reactstrap";
// import {Fragment} from "react-router-dom"
import "./Print.scss";
import logoPK from "../../../Assets/img/logoPK.png";
import QRcode from "../../../Assets//img/QRcode.png";
import ReactToPrint from "react-to-print";
function Print() {
  const componentRef = useRef();
  return (
    <Fragment>
      <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
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
                <p className="header-Lien1">Liên 1: Lưu tại quầy</p>
                <span className="header-time">
                  Ngày 16 Tháng 8 Năm 2022 15 giờ 20 phút
                </span>
              </div>
              <div className="content-body">
                <div className="infoUser">
                  <div className="infoUser-name">
                    Họ Tên:
                    <b>
                      <span>Văn Thắng</span>
                    </b>
                  </div>
                  <div className="infoUser-birthday">
                    Ngày sinh:
                    <span>22/01/2001 (21 tuổi) </span>
                  </div>
                  <div className="infoUser-sex">
                    Giới tính:
                    <span>Nam</span>
                  </div>
                  <div className="infoUser-phone">
                    Điện thoại:
                    <span>0861864598</span>
                  </div>
                  <div className="infoUser-adress">
                    Địa chỉ:
                    <span>Hà Nội</span>
                  </div>
                </div>
                <div className="info-sevice-stt" style={{ marginTop: "-10px" }}>
                  <div className="info-sevice">
                    <div className="sevice">
                      Phòng Khám:
                      <span>Khám Nội</span>
                    </div>
                    <div className="Price-origin">
                      Giá gốc:
                      <b>
                        <span>50.000 đ</span>
                      </b>
                    </div>
                    <div className="Price-sale">
                      Số tiền được khuyến mãi:
                      <b>
                        <span>10.000 đ </span>
                      </b>
                    </div>
                    <div className="Price-total">
                      Tổng số tiền thanh toán:
                      <b>
                        <span>40.000 đ </span>
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
                      <span>Khám Nội - Tầng 2</span>
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
    </Fragment>
  );
}

export default Print;
