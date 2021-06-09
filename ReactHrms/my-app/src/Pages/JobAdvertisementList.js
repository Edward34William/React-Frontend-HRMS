import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import JobAdvertisementService from "../services/JobAdvertisementService";

function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisement] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAdvertisement()
      .then((result) => setJobAdvertisement(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>

            <Table.HeaderCell>Employer id</Table.HeaderCell>
            <Table.HeaderCell>job position_id</Table.HeaderCell>
            <Table.HeaderCell>city id</Table.HeaderCell>
            <Table.HeaderCell>job description</Table.HeaderCell>
            <Table.HeaderCell>min salary</Table.HeaderCell>
            <Table.HeaderCell>max salary</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.employer_id}>
              <Table.Cell>{jobAdvertisement.id}</Table.Cell>

              <Table.Cell>{jobAdvertisement.employer_id}</Table.Cell>
              <Table.Cell>{jobAdvertisement.job_position_id}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city_id}</Table.Cell>
              <Table.Cell>{jobAdvertisement.job_description}</Table.Cell>
              <Table.Cell>{jobAdvertisement.min_salary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.max_salary}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default JobAdvertisementList;
