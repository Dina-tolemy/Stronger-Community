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
    submittService: function(id,servicedata){
      return axios.post("api/users/submitservice/"+id,servicedata)
    },
    getUsersWithService:function(data){
      return axios.get("api/users/Helper",data)
    },
    getUserOwnService:function(id){
      return axios.get("api/users/getMyServices/"+id)
    },
    getUsersinSuburb:function(data){
      return axios.get("api/users/search/suburbsearch",data)
    },
    chechService:function(data){
      return axios.put("api/users/checkservice",data)
    },
    deleteService:function(id){
      return axios.delete("api/users/deleteservice",id)
    },
    getAllServices:function(data){
      return axios.get("api/users/getAllServices",data)
    }
  };