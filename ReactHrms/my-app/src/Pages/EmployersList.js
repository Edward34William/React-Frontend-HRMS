import React, { useEffect, useState } from "react";
import {  Table , Button} from "semantic-ui-react";
import EmployersService from "../services/EmployersService";
import { NavLink } from "react-router-dom";
function EmployersList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employersService = new EmployersService();
    employersService
      .getEmployers()
      .then((result) => setEmployers(result.data));
  },[]);

  return (
    <div>
      <Table color="red"> 
        <Table.Header>
          <Table.Row>
          
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>See Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell><strong> {employer.company_name}</strong></Table.Cell>
              <Table.Cell><Table.Cell ><Button color="red" as={NavLink} to={`/Employers/${employer.id}`}> See Detail </Button></Table.Cell></Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default EmployersList;