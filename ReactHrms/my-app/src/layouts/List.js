import React from "react";
import { Grid } from "semantic-ui-react";
import CandidateLink from "../choices/JobAdvertsLink";
import EmployeersLink from "../choices/EmployeersLink";
import JobSeekersLink from "../choices/JobSeekersLink";
import UsersLink from "../choices/UsersLink";
import EmployersLink from "../choices/EmployersLink";
import CvLink from "../choices/CvLink";

function List() {
  return (
    <div className="bg">
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <CandidateLink />
            <br></br>
            <EmployeersLink />
          </Grid.Column>
          <Grid.Column>
            <CvLink />
            <br></br>
            <UsersLink />
          </Grid.Column>
          <Grid.Column>
          <EmployersLink />
            <br></br>
            <JobSeekersLink />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default List;
