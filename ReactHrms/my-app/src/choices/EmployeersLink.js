import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function EmployeersLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            className="images"
            
            src="https://y26uq11r8xr1zyp0d3inciqv-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/32-1.jpg"
          />
            <Card.Header>Employeer List</Card.Header>
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
          <strong>Employeer</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button href="http://localhost:3001/Employeers" color="black">
              See Employeers List
          </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default EmployeersLink;
