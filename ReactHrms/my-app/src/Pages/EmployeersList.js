import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import EmployeersService from "../services/EmployeersService";

function EmployeersList() {
  const [employeers, setEmployeers] = useState([]);

  useEffect(() => {
    let employeersService = new EmployeersService();
    employeersService
      .getEmployeers()
      .then((result) => setEmployeers(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Position Id</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employeers.map((employeer) => (
            <Table.Row key={employeer.id}>
               <Table.Cell>{employeer.id}</Table.Cell> 
              <Table.Cell>{employeer.firstName}</Table.Cell>
              <Table.Cell>{employeer.lastName}</Table.Cell>
              <Table.Cell>{employeer.position_id}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default EmployeersList;