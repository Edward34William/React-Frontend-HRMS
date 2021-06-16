import React, { useEffect, useState } from "react";
import {  Table , Button} from "semantic-ui-react";
import EmployersSevice from "../services/EmployersService";
import { NavLink } from "react-router-dom";
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
            <Table.HeaderCell>See Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
               <Table.Cell>{employer.id}</Table.Cell> 
              <Table.Cell>{employer.company_name}</Table.Cell>
              <Table.Cell><Table.Cell ><Button as={NavLink} to={"/JobAdverts"}> Application </Button></Table.Cell></Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default EmployersList;