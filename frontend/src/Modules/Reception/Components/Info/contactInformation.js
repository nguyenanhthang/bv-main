import "./contactInformation.scss";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Col, Row, Form } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function ContactInformation(props) {
  const { onChangeInfoUser, infoUser } = props;
  const [dataCity, setdataCity] = useState([]);
  const [codeDistrict, setCodeDistrict] = useState([]);
  const [dataDistrict, setdataDistrict] = useState([]);
  const [codeWards, setCodeWards] = useState([]);
  const [dataWards, setdataWards] = useState([]);


  useEffect(() => {
    // Thành Phố
    axios.get("https://provinces.open-api.vn/api/?depth=1").then((response) => {
      setdataCity(response.data);
    });
  }, []);
  // Huyện
  useEffect(() => {
    const callApiDistrict = (api) => {
      return axios.get(api).then((response) => {
        setdataDistrict(response.data.districts);
      });
    };
    callApiDistrict(
      "https://provinces.open-api.vn/api/" + "p/" + codeDistrict + "?depth=2"
    );
  }, [codeDistrict]);

  useEffect(() => {
    // Xã
    var callApiWard = (api) => {
      return axios.get(api).then((response) => {
        setdataWards(response.data.wards);
      });
    };
    callApiWard(
      "https://provinces.open-api.vn/api/" + "d/" + codeWards + "?depth=2"
    );
  }, [codeWards]);

  return (
    <div className="contact">
      <div className="contactInformation__user">
        <Col className="contactInformation__user__col">
          <FontAwesomeIcon icon={faClipboardList} id="icon__user" />
          <span>Thông tin liên lạc</span>
        </Col>
        <div className="contactInformation">
          <Col className="contactInformation__col">
            <Row xs="12" className="contactInformation__row">
              <Col xs="4">
                Địa chỉ
                <span className="star">*</span>
              </Col>
              <Col xs="8">
                <input
                  name="user_adress"
                  value={infoUser.user_adress}
                  onChange={(e) => onChangeInfoUser(e)}
                />
              </Col>
            </Row>
            <Row xs="12" className="contactInformation__row">
              <Col xs="4">
                <Form>
                  TP / Tỉnh
                  <select
                    type="select"
                    className="countrySelect"
                    id="province"
                    onChange={(e) => {
                      setCodeDistrict(e.target.value);
                      const city = document.getElementById("province");
                      infoUser.user_city = city.options[city.selectedIndex].text;
                    }}
                  >
                    <option>Tỉnh/Thành phố</option>
                    {dataCity.map((data) => {
                      return (
                        <option key={data.code} value={data.code}>
                          {data.name}
                        </option>
                      );
                    })}
                  </select>
                </Form>
              </Col>
              <Col xs="4">
                <Form>
                  Quận/Huyện
                  <select
                    className="countrySelect"
                    id="district"
                    onChange={(e) => {
                      setCodeWards(e.target.value);
                      const district = document.getElementById("district");
                      infoUser.user_district = district.options[district.selectedIndex].text;
                    }}
                  >
                    <option>Chọn Quận/Huyện </option>
                    {dataDistrict?.map((dataDistrict) => {
                      return (
                        <option
                          value={dataDistrict.code}
                          key={dataDistrict.code}
                        >
                          {dataDistrict.name}
                        </option>
                      );
                    })}
                  </select>
                </Form>
              </Col>
              <Col xs="4">
                <Form>
                  Xã/Phường
                  <select
                    className="countrySelect"
                    id="ward"
                    onChange={() => {
                      const ward = document.getElementById("ward");
                      infoUser.user_ward = ward.options[ward.selectedIndex].text;
                    }}
                  >
                    <option value=""> Chọn Xã/Phường </option>
                    {dataWards?.map((data) => {
                      return <option key={data.code}>{data.name}</option>;
                    })}
                  </select>
                </Form>
              </Col>
            </Row>
            <Row xs="12" className="contactInformation__row">
              <Col xs="4">CMT/CCCD</Col>
              <Col xs="8">
                <input
                  type={"number"}
                  name="user_CMND"
                  value={infoUser.user_CMND}
                  onChange={(e) => onChangeInfoUser(e)}
                />
              </Col>
            </Row>
            <Row xs="12" className="contactInformation__row">
              <Col xs="4">Nơi đăng kí</Col>
              <Col xs="8">
                <input
                  name="user_PlateOfRegis"
                  value={infoUser.user_PlateOfRegis}
                  onChange={(e) => onChangeInfoUser(e)}
                />
              </Col>
            </Row>
            <Row xs="12" className="contactInformation__row">
              <Col xs="4">Tên người liên hệ</Col>
              <Col xs="8">
                <input
                  name="user_contact"
                  value={infoUser.user_contact}
                  onChange={(e) => onChangeInfoUser(e)}
                />
              </Col>
            </Row>
          </Col>
        </div>
      </div>
    </div>
  );
}

export default ContactInformation;
