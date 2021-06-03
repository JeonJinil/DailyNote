import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/api/auth"

class UserService {

    loginUser(user){
        return axios.post(AUTH_API_BASE_URL, user);
    }

    registerUser(userRequestDto){
        return axios.post(AUTH_API_BASE_URL, userRequestDto);
    }

}

export default new UserService();
