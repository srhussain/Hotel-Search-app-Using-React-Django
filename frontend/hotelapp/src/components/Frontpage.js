import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container, Form } from "react-bootstrap";
import axios from "axios";

function Frontpage() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [sortby, setsortby] = useState("");

  const sort = "";
  const amount = "";
  const amenities = "";

  function getHotels(sort, amount,amenities) {
    console.log(sort, amount);
    axios
      .get(
        `http://127.0.0.1:8000/api/get-hotels/?sort_by=${sort}&amount=${amount}&amenities=${amenities}`
      )
      // .get("http://127.0.0.1:8000/api/get-hotels/")
      .then((response) => setData(response.data));
  };

  useEffect(() => {
    getHotels(sort, amount,amenities);
  }, [setData]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/get-amenities/")
      .then((response) => setData2(response.data));
  }, [setData2]);

  const handleChange = (event) => {
    // setsortby(event.target.value);
    // console.log(event.target.value);
    const sort=event.target.value
    getHotels(sort,"","")
    // axios.get(
    //   `http://127.0.0.1:8000/api/get-hotels/?sort_by=${event.target.value}`
    // );
  };

  const priceChange = (e) => {
    // console.log(e.target.value);
    const amount=e.target.value
    getHotels("",amount,"")
    
  };
  const handleAmenity=(e)=>{
    const amenities=e.target.value
    // console.log(e.target.value)
    getHotels("","",amenities)

  }

  return (
    <Container className="text-align-center">
        <h1 className="text-align-center pb-2">Hello Welcome to our Django Hotel Search App</h1>
      <Row>
        <Col md={4} className="mt-3 align-items-center">
           

          <label>Choose Amenities</label>
          <select className="form-control" onChange={handleAmenity}>
            <option >Choose</option>
            {data2.map((data) => {
                //   console.log(data.amenities);
                return (
                    <option key={data.id} value={data.id} >
                  {data.amenity}
                </option>
              );
            })}
          </select>
        </Col>
        <Col md={4} className="mt-3 align-items-center">
          <label>Sort By</label>
          <select
            className="form-control"
            value={sortby}
            onChange={handleChange}
          >
            <option value="asc">ASC 0-100</option>
            <option value="dsc">DSC 100-0</option>
          </select>
        </Col>
        <Col md={4} className="mt-3">
        <Form.Label>Select Price</Form.Label>
          <>
          <div className="d-flex">
            <span style={{color:"black",fontWeight:"500"}}>500 </span>   <Form.Range onChange={priceChange} max={5000} min={500}/>   <span style={{color:"black",fontWeight:"500"}}>5000 </span> 

          </div>
          </>
        </Col>
      </Row>
      <Row>
        {data.map((data) => {
          // console.log(data)
          return (
            <Col md={6} key={data.id} className="mt-5 pt-5 justify-content-center d-flex align-items-center">
              <Card style={{ width: "28rem" }} className="shadow round">
                <Card.Img
                  variant="top"
                  src={`http://127.0.0.1:8000/images/${data.banner_image}`}
                />
                <Card.Body>
                  <Card.Title>{data.hotel_name}</Card.Title>
                  <Card.Text>{data.hotel_description.substr(0, 100)}</Card.Text>
                  <Button variant="primary">Rs {data.hotel_price}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Frontpage;
