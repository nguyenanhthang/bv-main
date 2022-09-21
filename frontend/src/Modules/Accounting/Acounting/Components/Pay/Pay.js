import React from "react";
import { Form, Row, Col, Input, Button } from "reactstrap";
import '../Pay/Pay.scss'
function Pay() {
    return (
        <>
            <Form className="form-4">
                <Row>
                    <Col sm={3} className='col'>
                        <span className="text-success ">
                            <i className="fa fa-dollar"></i>
                            Thanh toán hóa đơn
                        </span>
                    </Col>
                    <Col sm={3} className='col'>
                        <select >
                            <option value="1">Tiền mặt</option>
                            <option value="2">Thẻ ATM</option>
                        </select>

                    </Col>
                    <Col sm={3} className='col'>
                        <Input placeholder="Điền thông tin giao dịch" />
                    </Col>
                    <Col sm={3} className='col'>
                        <Button color="success">
                            THANH TOÁN 
                        </Button>
                    </Col>
                </Row>


            </Form>
        </>
    )
}
export default Pay;