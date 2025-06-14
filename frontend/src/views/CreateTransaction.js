import React from "react";
import { Card, CardBody, CardHeader, Container, Row, Col } from "reactstrap";
import TransactionForm from "components/TransactionForm/TransactionForm";

function CreateTransaction() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col lg="10" md="12">
          <Card>
            <CardHeader className="text-center">
              <h4 className="title">Create Transactions</h4>
            </CardHeader>
            <CardBody>
              <TransactionForm />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateTransaction;
