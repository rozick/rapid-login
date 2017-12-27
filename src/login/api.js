/**
 * Our beautiful api call with axios
 */
var axios = require('axios');

module.exports = {
  fetchUsers: function() {
    var encodedURI = window.encodeURI('http://localhost:3000/users');
    return axios.get(encodedURI).then(function(response) {
      return response.data;
    });
  }
};
