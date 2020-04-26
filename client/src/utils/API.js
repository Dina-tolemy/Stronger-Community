import axios from "axios";

export default {
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
      return axios.get("api/users/getvul",data)
    },
    submittService: function(servicedata){
      return axios.post("api/users/submitservice",servicedata)
    }
  };