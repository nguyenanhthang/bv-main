import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Row, Form } from "reactstrap";
import "./Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

function Service(props) {
    const { onChangeInfoUser, infoUser } = props;

    const [boolean, setBoolean] = useState("")
    useEffect(() => {
        infoUser.user_service === ""
            || infoUser.user_service_object === ""
            || infoUser.user_service === "Chọn dịch vụ"
            || infoUser.user_service_object === "Chọn đối tượng dịch vụ"
            ? setBoolean(false) : setBoolean(true)
    }, [infoUser.user_service && infoUser.user_service_object])

    const [priceService, setPriceService] = useState("")
    useEffect(() => {
        if (infoUser.user_service === "Khám nội") setPriceService("50.000")
        if (infoUser.user_service === "Khám nhi") setPriceService("100.000")
        if (infoUser.user_service === "Khám nội chuyên gia") setPriceService("200.000")
        if (infoUser.user_service === "Khám nhi chuyên gia") setPriceService("200.000")
        if (infoUser.user_service === "Khám cấp cứu") setPriceService("100.000")
        if (infoUser.user_service === "Tư vấn sức khỏe") setPriceService("0")
        if (infoUser.user_service === "Khám nội Bác sĩ BV Bạch Mai, Nội tiết...") setPriceService("120.000 VNĐ")
    }, [infoUser.user_service])

    const [discountService, setDiscountService] = useState("")
    const [discountText, setDiscountText] = useState("")
    useEffect(() => {
        if (infoUser.user_service_object === "Tứ thân phụ mẫu") { setDiscountService("0"); setDiscountText("(100% giảm giá)") }
        else if (infoUser.user_service_object === "Vip ( Miễn phí 100% )") { setDiscountService("0"); setDiscountText("(100% giảm giá)") }
        else if (infoUser.user_service_object === "Người thân nhân viên ( Giảm 20% )") { setDiscountService("0.2"); setDiscountText("(20% giảm giá)") }
        else if (infoUser.user_service_object === "Khám dịch vụ") { setDiscountService("0.1"); setDiscountText("(0% giảm giá)") }
        else if (infoUser.user_service_object === "Cán bộ nhân viên ( Miễn phí )") { setDiscountService("0"); setDiscountText("(100% giảm giá)") }
        else if (infoUser.user_service_object === "Không có bảo hiểm y tế") { setDiscountService("1"); setDiscountText("(0% giảm giá)") }
        else if (infoUser.user_service_object === "Bảo hiểm y tế") { setDiscountService("0"); setDiscountText("(90% giảm giá)") }
    }, [infoUser.user_service_object])
    // số tiền cần thanh toán
    const ServicePayment = priceService * discountService ;
    const PayPriceService = priceService * 0.1 ;
    const user_TotalPromotional = ServicePayment + PayPriceService ;
    const user_TotalSevice = priceService - user_TotalPromotional ;
    
    //hiện ở lễ tân
    const servicePayment = ServicePayment+ ".000 VNĐ";
    const payPriceService = PayPriceService + ".000 VNĐ";
    const user_totalPromotional = user_TotalPromotional + ".000 VNĐ";
    const user_totalSevice = user_TotalSevice + ".000 VNĐ";


    infoUser.user_promotional_price = payPriceService;
    infoUser.user_promotional_service = servicePayment;
    infoUser.user_cost =priceService + " " + "VNĐ"
    infoUser.user_totalPromotional = user_totalPromotional
    infoUser.user_totalSevice = user_totalSevice

    return (
        <div className="service">
            <div className="service__element">
                <Col>
                    <div className="service__choose">
                        <FontAwesomeIcon icon={faNotesMedical} id="icon__medical" />
                        <span>Chọn các dịch vụ</span>
                    </div>

                    <Row xs="12" className="service__row">
                        <Col xs="4">
                            <Form>
                                Chọn dịch vụ <span>*</span>
                                <select
                                    className="service__select"
                                    name="user_service"
                                    value={infoUser.user_service}
                                    onChange={(e) => onChangeInfoUser(e)}
                                >
                                    <option>Chọn dịch vụ</option>
                                    <option>Khám nội</option>
                                    <option>Khám nhi</option>
                                    <option>Khám nội chuyên gia</option>
                                    <option>Khám nhi chuyên gia</option>
                                    <option>Khám cấp cứu</option>
                                    <option>Tư vấn sức khỏe</option>
                                    <option>Khám nội Bác sĩ BV Bạch Mai, Nội tiết... </option>
                                    <option>Dịch vụ</option>
                                </select>
                            </Form>
                        </Col>
                        <Col xs="4">
                            <Form>
                                Đối tượng dịch vụ <span>*</span>
                                <select
                                    className="service__select"
                                    name="user_service_object"
                                    value={infoUser.user_service_object}
                                    onChange={(e) => onChangeInfoUser(e)}
                                >
                                    <option>Chọn đối tượng dịch vụ</option>
                                    <option>Tứ thân phụ mẫu</option>
                                    <option>Vip ( Miễn phí 100% )</option>
                                    <option>Người thân nhân viên ( Giảm 20% )</option>
                                    <option>Khám dịch vụ</option>
                                    <option>Cán bộ nhân viên ( Miễn phí )</option>
                                    <option>Không có bảo hiểm y tế</option>
                                    <option>Bảo hiểm y tế</option>
                                </select>
                            </Form>
                        </Col>
                        <Col xs="4">
                            <Form>
                                Phòng khám <span>*</span>
                                <input
                                    placeholder="Tên phòng khám"
                                    name="user_clinic"
                                    value={infoUser.user_clinic}
                                    onChange={(e) => onChangeInfoUser(e)}
                                ></input>
                            </Form>
                        </Col>
                        <Col xs="6" className="service__reason">
                            <Form>
                                Lí do <span>*</span>
                                <input
                                    placeholder="Nhập lí do"
                                    name="user_reason"
                                    value={infoUser.user_reason}
                                    onChange={(e) => onChangeInfoUser(e)}
                                ></input>
                            </Form>
                        </Col>

                        <Col xs="12" className="service__price">
                            {boolean && <ul>
                                <p>Giá gốc: {priceService} VNĐ </p>
                                <p>Giá khuyến mãi phòng khám: {payPriceService} <span style={{ fontWeight: "700", color: "black" }}>(10% giảm giá)</span></p>
                                <p>Giá khuyến mãi đối tượng dịch vụ: {servicePayment} <span style={{ fontWeight: "700", color: "black" }}>{discountText}</span></p>
                            </ul>}
                        </Col>
                    </Row>
                </Col>
            </div>
        </div>
    );
}


export default Service;
