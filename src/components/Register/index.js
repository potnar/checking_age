import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 !important;
  padding: 0 !important;
`;

const StyledHello = styled.div`
  color: #2e4057;
  font-weight: 800;
  margin: 0 !important;
  padding: 0 !important;
`;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      age: "",
      errorSurname: "",
      errorName: "",
      errorAge: "",
      hello: "",
      dataName: "",
      dataSurname: "",
      dataAge: "",
    };
  }

  handleName = (e) => {
    const letters = /[a-zA-Z - zżźćńółęąśŻŹĆĄŚĘŁÓŃ]/;

    if (e.target.value === "" || letters.test(e.target.value)) {
      this.setState({ name: e.target.value });
      this.setState({ errorName: "" });
    } else {
      this.setState({ errorName: "Invalid character!" });
    }
    if (
      this.state.name !== "" &&
      this.state.surname !== "" &&
      this.state.age !== ""
    ) {
      this.setState({
        hello: `Hello ${this.state.name}, ${this.state.surname}!`,
      });
    }
  };

  handleSurname = (e) => {
    const letters = /[a-zA-Z - zżźćńółęąśŻŹĆĄŚĘŁÓŃ]/;

    if (e.target.value === "" || letters.test(e.target.value)) {
      this.setState({ surname: e.target.value });
      this.setState({ errorSurname: "" });
    } else {
      this.setState({ errorSurname: "Invalid character!" });
    }
    if (
      this.state.name !== "" &&
      this.state.surname !== "" &&
      this.state.age !== ""
    ) {
      this.setState({
        hello: `Hello ${this.state.name}, ${this.state.surname}!`,
      });
    }
  };

  handleAge = (e) => {
    const num = /^[0-9\b]+$/;
    console.log(this.state.age);
    if (e.currentTarget.value === "" || num.test(e.currentTarget.value)) {
      this.setState({ age: e.currentTarget.value });
      this.setState({ errorAge: "" });
    } else {
      this.setState({ errorAge: "Invalid character!" });
    }
    if (
      this.state.name !== "" &&
      this.state.surname !== "" &&
      this.state.age !== "" &&
      e.currentTarget.value
    ) {
      this.setState({
        hello: `Hello ${this.state.name} ${this.state.surname}!`,
      });
    } else {
      this.setState({
        hello: "",
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.name !== "" &&
      this.state.surname !== "" &&
      this.state.age !== ""
    ) {
      localStorage.setItem("dataName", this.state.name);
      localStorage.setItem("dataSurname", this.state.surname);
      localStorage.setItem("dataAge", this.state.age);
      this.props.history.push("/content");
    }
  };
  render() {
    return (
      <section>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.name}
                onChange={this.handleName}
              />
            </Col>
            <Col sm="5">
              {this.state.errorName && (
                <StyledError>
                  <p>{this.state.errorName}</p>
                </StyledError>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Surname
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.surname}
                onChange={this.handleSurname}
              />
            </Col>
            <Col sm="5">
              {this.state.errorSurname && (
                <StyledError>
                  <p>{this.state.errorSurname}</p>
                </StyledError>
              )}
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Age
            </Form.Label>
            <Col sm="5">
              <Form.Control
                type="text"
                name="firstName"
                value={this.state.age}
                onChange={this.handleAge}
              />
            </Col>
            <Col sm="5">
              {this.state.errorAge && (
                <StyledError>
                  <p>{this.state.errorAge}</p>
                </StyledError>
              )}
            </Col>
          </Form.Group>
          {
            <StyledHello>
              <p>{this.state.hello}</p>
            </StyledHello>
          }
          <Button type="submit">Save</Button>
        </Form>
      </section>
    );
  }
}

export default Register;
