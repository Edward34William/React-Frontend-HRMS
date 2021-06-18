import React, { useEffect, useState } from "react";
import { Button, Card, Grid, List, Image } from "semantic-ui-react";
import { useParams, useHistory } from "react-router-dom";
import CvService from "../../services/CvService";

export default function CvDetails() {
  let { id } = useParams();
  const [cvs, setCv] = useState([]);

  const history = useHistory();
  useEffect(() => {
    let cvService = new CvService();
    cvService.getById(id).then((result) => setCv(result.data));
  }, []);

  const application = () => {
    window.alert("Başarıyla İndirdiniz.");
    history.push("/");
  };
  const decline = () => {
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
            
            {cvs.map((cv) => (

              <Card.Group className="tttt">
                <Card centered fluid>
                  <Image floated="centered" size="medium" src={cv.image} />
                  <Card.Content key={cv.id}>
                    <Card.Header>
                      Name: <b color="red"> {cv.firstName}</b>
                    </Card.Header>
                    <Card.Header> Surname: {cv.LastName} </Card.Header>
                    <Card.Header> Phone Number: {cv.phone_number} </Card.Header>
                    <Card.Header>Adress: {cv.Adress}</Card.Header>
                    <Card.Header>
                      Work Experience: {cv.workExperience}
                    </Card.Header>
                  </Card.Content>

                  <Card.Content>
                    <Card.Header>Cover Letter: {cv.cover_letter}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>School: {cv.school}</Card.Header>
                  </Card.Content>
                  <Card.Content>
                    <Card.Header>
                      <a href={cv.Github} target="blank">
                        Github
                      </a>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green" onClick={application}>
                        Download For Pdf
                      </Button>
                      <Button basic color="blue" onClick={decline}>
                        Wiev as Pdf
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              </Card.Group>
            ))}
          </Grid.Column>
        </Grid.Row>
      </Grid>
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
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
