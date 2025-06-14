import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) return alert("No file selected.");
    console.log("Uploading file:", file.name);
    // TODO: Add backend call
  };

  return (
    <div className="content">
      <Container fluid>
        <Row>
          <Col md="8" className="mx-auto">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Upload Your File</CardTitle>
              </CardHeader>
              <CardBody>
                <FormGroup>
                  <Label for="uploadFile">Choose CSV File</Label>
                  <div className="custom-file mb-3">
                  <Input
                    type="file"
                    id="uploadFile"
                    accept=".csv"
                    onChange={handleFileChange}
                  />
                       <Label
                      className="custom-file-label"
                      htmlFor="uploadFile"
                    >
                      {file ? file.name : "No file selected"}
                    </Label>
                    </div>
                </FormGroup>
                <Button color="primary" onClick={handleUpload}>
                  Upload
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Upload;
