import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import CandidateService from "../services/CandidateService";

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidate()
      .then((result) => setCandidates(result.data));
  },[]);

  return (
    <div>
      <Table inverted>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>id</Table.HeaderCell>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>identifactionNumber</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id}>
              <Table.Cell>{candidate.id}</Table.Cell>
              <Table.Cell>{candidate.firstname}</Table.Cell>
              <Table.Cell>{candidate.lastname}</Table.Cell>
              <Table.Cell>{candidate.identifactionNumber}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>


      
    </div>
  );
}

export default CandidateList;
