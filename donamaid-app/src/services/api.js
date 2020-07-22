import axios from 'axios';

var peopleNames = [];

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

export function randomProfessionalListCreate() {
  getDetail("https://swapi.dev/api/people/");

  let professionalsNames = [];

  if(peopleNames !== []) {
    for(let x = 0; x < 5; x++) {
      let peopleInformation = peopleNames[Math.floor(Math.random() * peopleNames.length)];
      
      let alreadyHave = false;

      for(let i = 0; i < professionalsNames.length; i++) {
        if(professionalsNames[i].name === peopleInformation.name) {
          alreadyHave = true;
        }
      }

      if(alreadyHave === false) {
        professionalsNames.push(peopleInformation);
      }
    }
  }

  return professionalsNames;
}

getDetail("https://swapi.dev/api/people/");

export default peopleNames;