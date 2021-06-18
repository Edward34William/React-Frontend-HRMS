import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import JobAdvertisementService from "../../services/JobAdvertisementService";


export default function JobAdvertsDetail() {
  //BU FONK. PARAMETRELERİ OBJE OLARAK VERİR.
  let { id } = useParams();


  const [JobAdverts, setJobAdvert] = useState([]);

  const history = useHistory();

  useEffect(() => {
    let jobAdvertsService = new JobAdvertisementService();
    jobAdvertsService.getById(id).then((result) => setJobAdvert(result.data));
  }, []);

  const application = () => {
    window.alert("Başvuru İşlemi Başarıyla Tamamlandı.");
    history.push("/");
  };
  const decline = () => {
    window.alert("İlanı Reddettiniz. İlan sayfasına yönlendiriliyosunuz.");
    history.push("/JobAdverts");
  };

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}> 
          
          <List.Header centered>Authors</List.Header>
            <List animated verticalAlign="middle">
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header>Berkay</List.Header>
                </List.Content>
              </List.Item>
              <hr></hr>
              <List.Item>
                <Image
                  avatar
                  src="https://pbs.twimg.com/profile_images/1403300051749851145/XhuGb8BI_400x400.jpg"
                />
                <List.Content>
                  <List.Header>Kübra</List.Header>
                </List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={14}>
            detay: {id}
            {JobAdverts.map((advert) => (
              <Card.Group className="tttt">
                <Card centered fluid>
                  <Card.Content key={advert.id}>
                    <Card.Header>
                      Employer: <b color="red"> {advert.employer}</b>
                    </Card.Header>
                    <Card.Header>Position: {advert.job_position}</Card.Header>
                    <Card.Header>City: {advert.city}</Card.Header>
                    <Card.Header>Work Type: {advert.Work_type}</Card.Header>
                  </Card.Content>

                  <Card.Content>
                    <Card.Header>
                      Description: {advert.job_description}
                    </Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>Min Salary: {advert.min_salary}</Card.Header>
                    <Card.Header>Max Salary: {advert.max_salary}</Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green" onClick={application}>
                        Application
                      </Button>
                      <Button basic color="red" onClick={decline}>
                        Decline
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      {/* <Table color="red" size="large">
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
        {JobAdverts.map((advert) => (
            <Table.Row key={advert.id}>
              <Table.Cell>{advert.employer}</Table.Cell>
              <Table.Cell>{advert.job_position}</Table.Cell>
              <Table.Cell>{advert.city}</Table.Cell>
              <Table.Cell>{advert.job_description}</Table.Cell>
              <Table.Cell>{advert.min_salary}</Table.Cell>
              <Table.Cell>{advert.max_salary}</Table.Cell>
              <Table.Cell>{advert.Work_type}</Table.Cell>
              <Table.Cell ><Button onClick={application} color="red"> Application </Button></Table.Cell>

              
            </Table.Row>
          ))}
        </Table.Body>

      </Table> */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
