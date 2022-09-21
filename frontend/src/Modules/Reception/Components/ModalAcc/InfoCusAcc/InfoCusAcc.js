import React from "react";
import { FormGroup, Form, Label, Col, Row } from "reactstrap";
import "./InfoCusAcc.scss";
function InfoCustomer(props) {
  const { infoUser } = props;
  //    console.log(infoUser);
  return (
    <>
      <div>
        <Form className="Form-2">
          <Row className="row-2">
            <span className="text-success ">
              <i className="fa fa-user "></i>
              Thông tin bệnh nhân
            </span>
            <Col md={6}>
              <FormGroup>
                <Label>Mã bệnh nhân: {infoUser.user_id}</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Giới Tính : {infoUser.user_sex}</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Họ Tên : {infoUser.user_name}</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Ngày Sinh : {infoUser.user_birthday}</Label>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Địa chỉ : {infoUser.user_adress}</Label>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}
export default InfoCustomer;
