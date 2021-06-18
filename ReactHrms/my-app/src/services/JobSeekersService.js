import axios from "axios"


export default class JobSeekersService{
    
    getJobSeekers(){
        return axios.get("http://localhost:3000/JobSeekers")
    }
    getById(id){
        return axios.get("http://localhost:3000/JobSeekers?id="+id)
    }

}