import axios from "axios"


export default class UsersService{
    
    getUsers(){
        return axios.get("http://localhost:3000/Users")
    }
   

}