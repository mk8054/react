import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { useState } from "react";

import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Please fill all the fields");
    } else {
      let obj = {
        email: email,
        password: password,
      };
      console.log(obj);
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Container className="">
      <Row className="vh-100 justify-content-center align-items-center  ">
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title>Login</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={submitLogin}>
                <Form.Group controlId="loginEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={changeEmail}
                    type="email"
                    required
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="loginPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    required
                    placeholder="*******"
                  />
                </Form.Group>
                <Button className="mt-3" variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
