import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

function CvLink() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
           className="images"
            
            src="https://cdn0.iconfinder.com/data/icons/thin-files-documents/57/thin-081_file_document_cv_curriculum_vitae-512.png"
          />
            <Card.Header>CV List</Card.Header>
          <Card.Meta>Berkay ERGÜN</Card.Meta>
          <Card.Description>
          <strong>Curriculum Vitae</strong> Listesini görmek için butona tıklayınız.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
            <Button href="http://localhost:3001/Cv" color="black">
             
              See Cv List
            </Button>
        </Card.Content>
      </Card>
    </div>
  );
}

export default CvLink;
