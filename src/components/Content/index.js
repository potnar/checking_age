import React, { useState } from "react";
import styled from "styled-components";
import test from "../assets/test.png";
import { Button } from "react-bootstrap";

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 !important;
  padding: 0 !important;
`;
let age = true;

const Content = () => {
  const [imgState, setImg] = useState("none");
  const [bgState, setBg] = useState("gray");

  const resultName = localStorage.getItem("dataName");
  const resultSurname = localStorage.getItem("dataSurname");
  const resultAge = localStorage.getItem("dataAge");

  const ImageBox = styled.div`
    background: ${bgState};
    background-size: 100%;
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      display: ${imgState};
    }
    @media (orientation: portrait) {
      width: 100%;
    }
  `;
  const handleCheck = () => {
    if (resultAge < 18) {
      age = false;
      setBg("red");
      setImg("none");
    } else {
      setBg("gray");
      setImg("block");
      age = true;
    }
  };

  return (
    <section>
      <div class="container">
        <div class="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <p>{`${resultName} ${resultSurname}'s Page`}</p>
            <Button className="btn-success" onClick={handleCheck}>
              Check
            </Button>
            <ImageBox className="mx-auto">
              <img src={test} />
            </ImageBox>
            {!age ? (
              <StyledError>
                <p>You must be at least 18 years old!</p>
              </StyledError>
            ) : (
              ""
            )}
          </div>
          <div className="col-sm-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
