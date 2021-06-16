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
            <Table.HeaderCell>Job Seeker Name</Table.HeaderCell>
            <Table.HeaderCell>Job Seekers Surname</Table.HeaderCell>
            <Table.HeaderCell>Job Seekers Experiencez</Table.HeaderCell>
            <Table.HeaderCell>Job Seekers Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cvs.map((cv) => (
            <Table.Row>
              <Table.Cell>{cv.id}</Table.Cell>
              <Table.Cell>{cv.jobseeker_name}</Table.Cell>
              <Table.Cell>{cv.jobseeker_surname}</Table.Cell>
              <Table.Cell>{cv.jobseekerExperience}</Table.Cell>
              <Table.Cell>{cv.jobseeker_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default CvList;
