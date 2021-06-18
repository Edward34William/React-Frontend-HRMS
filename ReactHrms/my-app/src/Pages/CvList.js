import React, { useEffect, useState } from "react";
import {  Table,Button} from "semantic-ui-react";
import {Link } from "react-router-dom";
import CvService from "../services/CvService";

function CvList() {
  const [cvs, setCv] = useState([]);

  useEffect(() => {
    let cvService = new CvService();
    cvService.getCv()
      .then((result) => setCv(result.data));
  },[]);

  return (
    <div>
      <Table color="red" size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>See Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row key={cv.id}>
              <Table.Cell>{cv.firstName}</Table.Cell>
              <Table.Cell>{cv.LastName}</Table.Cell>
              
              <Table.Cell><Button color="red"><Link to={`/Cv/${cv.id}`}><b className="text-color">See Detail</b></Link>  </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}

export default CvList;
