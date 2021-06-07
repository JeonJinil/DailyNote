import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth"

class UserService {

    loginUser(user){
        console.log("AXIOS LOGIN USER");
        return axios.post(AUTH_API_BASE_URL, user);
    }

    registerUser(userRequestDto){
        return axios.post(AUTH_API_BASE_URL+"/register", userRequestDto);
    }

}

export default new UserService();
