import React from "react";
import { Col, Card, Button, Row } from "react-bootstrap";

const UserInfo = ({user}) => {

  return (
    <Row xs={2} md={3} lg={3} className="mt-4 justify-content-center text-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Text>{user.name ? user.name : user.login}</Card.Text>
            <Button
              href={user.html_url} 
              target="_blank"
              style={{ borderRadius: "50px" }}
              variant="primary"
            >
              VIEW PROFILE
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default UserInfo;
