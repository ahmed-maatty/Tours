import axios from "axios";

const Domain = axios.create({
    baseURL:"https://tours-server.onrender.com",
})

export default Domain ;
