import axios from "axios";


export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
    saveUserData: function(userData) {
      return axios.post("/api/users", userData);
    }
  };