import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EmployeersList from "../Pages/EmployeersList";
import CvList from "../Pages/CvList";
import EmployersList from "../Pages/EmployersList";
import JobSeekersList from "../Pages/JobSeekersList";
import UsersList from "../Pages/UsersList";
import List from "./List";
import Login from "./Login/Login";
import JobApplication from "../Pages/Forms/JobApplication";
import JobAdvertsList from "../Pages/JobAdvertsList";
import JobEmployer from "../Pages/Forms/JobEmployer";
import JobAdvertsDetail from "../Pages/Detail/JobAdvertsDetail";
import CvDetails from "../Pages/Detail/CvDetails";
import JobEmployersDetail from "../Pages/Detail/JobEmployersDetail";

export default function Dashboard() {
  return (
    <div>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={16}>
            <Route exact path="/" component={List} />
            <Route path="/Login" component={Login} />
            <Route exact path="/Employeers" component={EmployeersList} />
            <Route exact path="/Cv" component={CvList} />
            <Route exact path="/Employers" component={EmployersList} />
            <Route exact path="/JobSeekers" component={JobSeekersList} />
            <Route exact path="/Users" component={UsersList} />
            <Route exact path="/List" component={List} />
            <Route exact path="/JobAdverts" component={JobAdvertsList} />
            <Route exact path="/JobEmployer" component={JobEmployer} />
            <Route
              exact
              path="/JobAdvertisement/:id"
              component={JobAdvertsDetail}
            />
            <Route exact path="/Cv/:id" component={CvDetails} />
            <Route exact path="/Employers/:id" component={JobEmployersDetail} />

            <Route exact path="/JobApplication" component={JobApplication} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
