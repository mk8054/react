import { Container, Row, Col, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

function Listing() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((data) => {
        setData(data);
        console.log(data);
      });
    });
  };

  const toggleDetails = (id) => {
    console.log(id);
    document.getElementById("details" + id)?.classList.toggle("d-none");
  };
  return (
    <Container>
      <Row>
        <Col>
          <h2>Listing</h2>
          <hr />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <button
                        onClick={()=>{toggleDetails(index)}}
                        type="button"
                        className="btn btn-primary"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="d-none" id={"details" + index}>
                    <td colSpan={4}>
                      <Row>
                        <Col>
                          <h3>Address</h3>
                          <p>{item.address.street}</p>
                          <p>{item.address.suite}</p>
                          <p>{item.address.city}</p>
                          <p>{item.address.zipcode}</p>
                        </Col>
                        <Col>
                          <h3>Company</h3>
                          <p>{item.company.name}</p>
                          <p>{item.company.catchPhrase}</p>
                          <p>{item.company.bs}</p>
                        </Col>
                        <Col>
                          <h3>Website</h3>
                          <p>{item.website}</p>
                        </Col>
                      </Row>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Listing;
