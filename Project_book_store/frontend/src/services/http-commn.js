import axios from "axios";
const http=axios.create({


     baseURL:"http://localhost:8899",
     Headers:{"content-type":"application/json"}


})
export default http