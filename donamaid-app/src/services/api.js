import axios from 'axios';

function getDetail(apiURL) {
  axios.get(apiURL).then(function(response) {
    showDetail(response.data);
  });
}

function showDetail(data) {
  for (let i = 0; i < data.results.length; i++) {
    peopleNames.push(data.results[i]);
  }
  
  if (data.next) {
    getDetail(data.next);
  }else {
    return peopleNames;
  }
}

var peopleNames = [];
getDetail("https://swapi.dev/api/people/");

export default peopleNames;