import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import JobSeekersService from "../services/JobSeekersService";

function JobSeekersList() {
  const [jobseekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekersService = new JobSeekersService();
    jobSeekersService.getJobSeekers()
      .then((result) => setJobSeekers(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobseekers.map((jobseeker) => (
            <Table.Row key={jobseeker.id}>
              <Table.Cell>{jobseeker.id}</Table.Cell>
              <Table.Cell>{jobseeker.first_name}</Table.Cell>
              <Table.Cell>{jobseeker.last_name}</Table.Cell>
    
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default JobSeekersList;
