import React from "react";
import { Button, Table } from "semantic-ui-react";
import { useEffect, useState } from "react";
import { NavLink,Link } from 'react-router-dom';
import JobAdvertisementService from "../services/JobAdvertisementService";

export default function JobAdvertsList() {

  const [JobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdverts(result.data));
  }, []);
  return (
    <div>
      <Table color="red" size="large" className="table">
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
              <Table.Cell > <strong>{adverts.employer}</strong> </Table.Cell>
              <Table.Cell>{adverts.job_position}</Table.Cell>
              <Table.Cell>{adverts.city}</Table.Cell>

              <Table.Cell><Button color="red"><Link to={`/JobAdvertisement/${adverts.id}`}><b className="text-color">See Detail</b></Link>  </Button></Table.Cell>
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