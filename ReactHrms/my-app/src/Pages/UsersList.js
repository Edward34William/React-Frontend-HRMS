import React, { useEffect, useState } from "react";
import {  Table } from "semantic-ui-react";
import UsersService from "../services/UsersService";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let userService = new UsersService();
    userService.getUsers()
      .then((result) => setUsers(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>E-Mail</Table.HeaderCell>
            <Table.HeaderCell>Password</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>{user.password}</Table.Cell>
    
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default UsersList;
