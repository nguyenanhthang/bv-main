import React from "react";
import { FormGroup, Form, Label, Col, Row } from 'reactstrap'
import './InfoCustomer.scss'
function InfoCustomer(props) {
    
    const { saveData } = props
    
    return (

        <>
            <div>


                <Form className="Form-2">


                    <Row className="row-2">
                        <span className="text-success " >
                            <i className="fa fa-user "></i>
                            Thông tin bệnh nhân
                        </span>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Mã bệnh nhân:{saveData.user_id}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Giới Tính :{saveData.user_sex}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Họ Tên :{saveData.user_name}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >
                                                Ngày Sinh :{saveData.user_birthday}

                                            </Label>

                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label>
                                                Địa chỉ :{saveData.user_adress}

                                            </Label>

                                        </FormGroup>
                                    </Col>



                    </Row>


                </Form>

            </div>
        </>
    )
}
export default InfoCustomer;