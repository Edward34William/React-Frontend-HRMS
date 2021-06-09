import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
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
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>Candidate Id</Table.HeaderCell>
            <Table.HeaderCell>Social Adress Id</Table.HeaderCell>
            <Table.HeaderCell>Job Seekers Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row>
              <Table.Cell>{cv.id}</Table.Cell>
              <Table.Cell>{cv.candidate_id}</Table.Cell>
              <Table.Cell>{cv.social_adress_id}</Table.Cell>
              <Table.Cell>{cv.jobseeker_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default CvList;
