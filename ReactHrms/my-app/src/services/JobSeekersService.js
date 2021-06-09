import axios from "axios"


export default class JobSeekersService{
    
    getJobSeekers(){
        return axios.get("http://localhost:3000/JobSeekers")
    }
   

}