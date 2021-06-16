import React from "react";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import CandidateList from "../Pages/CandidateList";
import EmployeersList from "../Pages/EmployeersList";
import CvList from "../Pages/CvList";
import EmployersList from "../Pages/EmployersList";
import JobSeekersList from "../Pages/JobSeekersList";
import UsersList from "../Pages/UsersList";
import List from "./List";
import JobAdverts from "../Pages/Homepage/JobAdverts";
import JobEmployer from "../Pages/Homepage/JobEmployer";
import Login from "./Login/Login";
import JobAdverstDetails from "../Pages/Homepage/JobAdverstDetails";
import JobApplication from "../Pages/Homepage/JobApplication";

export default function Dashboard() {
  return (
    <div>
      <Grid stackable>
      {/* <Grid.Row>
        <Grid.Column width={16} className="header">
          BURAYA ÖN YAZI GELECEK
        </Grid.Column>
        </Grid.Row> */}



        <Grid.Row>
        <Grid.Column width={16}>
   
      <Route exact path="/" component={List}/>
      <Route  path="/Login" component={Login}  />
      <Route exact path="/Employeers" component={EmployeersList}/>
      <Route exact path="/Cv" component={CvList}/>
      <Route exact path="/Employers" component={EmployersList}/>
      <Route exact path="/JobSeekers" component={JobSeekersList}/>
      <Route exact path="/Users" component={UsersList}/>
      <Route exact path="/List" component={List}  />
      <Route exact path="/JobAdverts" component={JobAdverts}  />
      <Route exact path="/JobEmployer" component={JobEmployer}  />
      <Route exact path="/JobAdverstDetails/:id" component={JobAdverstDetails}  />
      <Route  exact path="/JobApplication" component={JobApplication}  />
      


        </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
