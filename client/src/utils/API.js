import axios from "axios";


export default {
  getUsers: function() {
    return axios.get("/api/users");
  },
    saveUserData: function(userData) {
      return axios.post("/api/users/signup", userData);
    },
    checkUser: function(userData){
      return axios.post("api/users/login",userData)
    },
    getuserDetails: function(id){
      return axios.get("api/users/"+id)
    },
    getVulDetails: function(data){
      return axios.get("api/users/",data)
    }
  };