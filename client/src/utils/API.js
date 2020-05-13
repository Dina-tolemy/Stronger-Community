import axios from "axios";

export default {
  saveUserData: function (userData) {
    return axios.post("/api/users/signup", userData);
  },
  checkUser: function (userData) {
    return axios.post("api/users/login", userData);
  },
  getuserDetails: function (id) {
    return axios.get("api/users/" + id);
  },
  getVulDetails: function (data) {
    return axios.get("api/users/getvul", data);
  },
  submittService: function (id, servicedata) {
    return axios.post("api/users/submitservice/" + id, servicedata);
  },
  getUsersWithService: function (data) {
    return axios.get("api/users/Helper", data);
  },
  getUserOwnService: function (id) {
    return axios.get("api/users/getMyServices/" + id);
  },
  getUsersinSuburb: function (suburb) {
    return axios.get("api/users/search/" + suburb);
  },
  chechService: function (id) {
    return axios.put("api/users/checkservice/" + id);
  },
  deleteService: function (id) {
    return axios.delete("api/users/deleteservice/" + id);
  },
  getAllServices: function (data) {
    return axios.get("api/users/getAllServices", data);
  },
  deleteUserAccount: function (id) {
    return axios.delete("api/users/deleteaccount/" + id);
  },
  sendAmsg: function (id, msg) {
    return axios.post("api/users/sendMsg/" + id, msg);
  },
  getUserOwnMsg: function (id) {
    return axios.get("api/users/getMyMsgs/" + id);
  },
  deletAmsg: function(id){
    return axios.delete("api/users/deletemsg/"+id)
  }
};
