import React from "react";
import logo from "./Aasset/Img/logoPK.png";
import { Nav, NavItem, Col, Row, NavLink } from "reactstrap";
import { ReactComponent as IconDoctor } from "./Aasset/Icon/doctor-icon.svg";
import { ReactComponent as Iconacounting } from "./Aasset/Icon/accounting.svg";
import { ReactComponent as IconReception } from "./Aasset/Icon/reception_hospital.svg";
import { ReactComponent as IconExam } from "./Aasset/Icon/test-exam-svgrepo-com.svg";
import { ReactComponent as IconXRay } from "./Aasset/Icon/x-ray-svgrepo-com.svg";
import { ReactComponent as IconEnt } from "./Aasset/Icon/ent.svg";
import { ReactComponent as IconUtrasound } from "./Aasset/Icon/ultrasound.svg";
import { ReactComponent as IconPharmacy } from "./Aasset/Icon/first-aid-bag.svg";
import { ReactComponent as IconInventory } from "./Aasset/Icon/inventory.svg";
import { ReactComponent as IconManagement } from "./Aasset/Icon/management.svg";
import "./Appheader.scss";

function AppHeader() {
  const goTo = (url = "") => {
    url = window.location.origin + "" + url;
    window.location.replace(url);
  };
  return (
    <div className="AppHeader" style={{width: '100%'}}>
      <Nav className="Nav-container">
        <Row className="appHeaderContainer">
          <Col>
            <Row className="divLogo">
              <NavItem>
                <div className="ml-2 logo-header">
                  <img src={logo} alt="img company" className="logo-bv"></img>
                </div>
              </NavItem>
            </Row>
          </Col>

          <Col sm="10" className="List-Nav">
            {/* <Row style={{margin: '0px' }}> */}
            <NavItem className="pointer">
              <NavLink className="icon" onClick={(e) => goTo("/Acounting")}>
                <Iconacounting className="Icon-navbar"></Iconacounting>
                <p>Thu Ngân</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon" onClick={(e) => goTo("/Reception")}>
                <IconReception className="Icon-navbar"></IconReception>
                <p> Lễ Tân </p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconDoctor className="Icon-navbar"></IconDoctor>
                <p>Khám Bệnh</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconExam className="Icon-navbar"></IconExam>
                <p> Xét Nghiệm</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon" onClick={(e) => goTo("/Xray")}>
                <IconXRay className="Icon-navbar"></IconXRay>
                <p> X-Quang</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconEnt className="Icon-navbar"></IconEnt>
                <p> Nội Soi</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconUtrasound className="Icon-navbar"></IconUtrasound>
                <p> Siêu Âm </p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconPharmacy className="Icon-navbar"></IconPharmacy>
                <p> Nhà Thuốc</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconInventory className="Icon-navbar"></IconInventory>
                <p>Nhà Thuốc</p>
              </NavLink>
            </NavItem>
            <NavItem className="pointer">
              <NavLink className="icon">
                <IconManagement className="Icon-navbar"></IconManagement>
                <p>Quản Lý</p>
              </NavLink>
            </NavItem>
            {/* </Row> */}
          </Col>
        </Row>
      </Nav> 
    </div>
  );
}

export default AppHeader;
