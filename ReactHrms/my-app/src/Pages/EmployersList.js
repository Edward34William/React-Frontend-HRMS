import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import EmployersSevice from "../services/EmployersService";

function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employersService = new EmployersSevice();
    employersService
      .getEmployers()
      .then((result) => setEmployers(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Job id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
               <Table.Cell>{employer.id}</Table.Cell> 
              <Table.Cell>{employer.company_name}</Table.Cell>
              <Table.Cell>{employer.job_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default EmployersList;