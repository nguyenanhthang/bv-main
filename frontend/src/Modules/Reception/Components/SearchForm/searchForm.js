import React, { useState, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Table,
  FormGroup,
  Input,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
} from "reactstrap";
import "./searchForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";

function SearchForm(props) {
  const {
    open,   
    setOpen,
    handleChangeSearch,
    setInfoUser,
    resListInfoUser,
    search,
    setIsChecked,
    isChecked
  } = props;
  const handleClickItem = (data) => {
    setOpen(false);
    setInfoUser(data);
    setIsChecked(!isChecked)
  };

  useLayoutEffect(() => {
    const valueSearchInput = document.getElementById("searchInput").value;
    if (valueSearchInput === "") {
      setOpen(false);
    }
  },[search]);
  return (
    <div className="patientSearch__Receptionist">
      <Col>
        <ListGroup style={{ boxShadow: "5px 5px 10px -5px rgb(0 0 0 / 12%)" }}>
          <ListGroupItem>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="faMagnifyingGlass"
            />{" "}
            <span className="patientSearch">Tìm kiếm</span>
          </ListGroupItem>
          <ListGroupItem className="patientSearch__groupItem">
            <Row>
              <input
                id="searchInput"
                value={search}
                onChange={(e) => handleChangeSearch(e)}
                placeholder="Nhập mã bệnh nhân, số điện thoại"
              />
            </Row>
          </ListGroupItem>
          <div className="search-form" id="search__form">
            <ul
              className={open ? "search-list" : "close-search"}
              id="searchList"
            >
              {resListInfoUser.map((data,i) =>{
                return (
                  <li 
                  key={i}
                    className="search-item"
                    onClick={(e) => handleClickItem(data)}
                  >
                    {data.user_id}
                  </li>
                );
              })}
            </ul>
          </div>
        </ListGroup>
      </Col>
    </div>
  );
}
export default SearchForm;
