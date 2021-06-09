import axios from "axios"

export default class CandidateService{
    getCandidate(){
        return axios.get("http://localhost:3000/Candidate")
    }
}
