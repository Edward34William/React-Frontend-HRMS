import React, { useEffect, useState } from "react";
import {Button, Icon, Label, Menu, Table } from "semantic-ui-react";
import { useParams,useHistory } from "react-router-dom";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function JobAdverstDetails() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();

  const [JobAdverts, setJobAdvert] = useState([]);
  
const history = useHistory()
  
  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService
      .getAdvertisement()
      .then((result) => setJobAdvert(result.data));
  }, [id]);

  const application = () => {
    window.alert("Başvuru İşlemi Başarıyla Tamamlandı.")
    history.push("/")
  }

  return (
    <div>
      <Table inverted size="large">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Min Salary</Table.HeaderCell>
            <Table.HeaderCell>Max Salary</Table.HeaderCell>
            <Table.HeaderCell>Word Type</Table.HeaderCell>
            <Table.HeaderCell>Application</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {JobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.employer}</Table.Cell>
              <Table.Cell>{adverts.job_position}</Table.Cell>
              <Table.Cell>{adverts.city}</Table.Cell>
              <Table.Cell>{adverts.job_description}</Table.Cell>
              <Table.Cell>{adverts.min_salary}</Table.Cell>
              <Table.Cell>{adverts.max_salary}</Table.Cell>
              <Table.Cell>{adverts.Work_type}</Table.Cell>
              <Table.Cell ><Button onClick={application} > Application </Button></Table.Cell>

              
            </Table.Row>
          ))}
        </Table.Body>

      </Table>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
}
