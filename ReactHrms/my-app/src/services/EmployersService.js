import axios from "axios"


export default class EmployersSevice{
    
    getEmployers(){
        return axios.get("http://localhost:3000/Employers")
    }
   

}