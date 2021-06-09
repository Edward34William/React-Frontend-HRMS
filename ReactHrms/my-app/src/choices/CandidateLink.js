import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import "../App.css";

function CandidateLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
          className="images"
            floated="centered"
            
            src="https://cdn2.iconfinder.com/data/icons/employment-business-2/256/Candidate_Search-512.png"
          />    
          <Card.Header floated="centered">Candidate List</Card.Header>
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
         <strong>Candidate</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          
            <Button href="http://localhost:3001/Candidate" color="black" floated="centered">
              See Candidate List
            </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CandidateLink;
