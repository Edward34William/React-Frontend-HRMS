import React from "react";
import { Button, Table } from "semantic-ui-react";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import { useEffect, useState } from "react";
import { NavLink,Link } from 'react-router-dom';

export default function JobAdverts() {
  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);
  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>See Details</Table.HeaderCell>
            
      
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.employer}</Table.Cell>
              <Table.Cell>{adverts.job_position}</Table.Cell>
              <Table.Cell>{adverts.city}</Table.Cell>

              <Table.Cell><Button><Link to={`/JobAdverstDetails/${adverts.id}`}> See Detail</Link>  </Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}