


function API_getAllFilms() {
 
axios.get('https://swapi.dev/api/films')
      .then(function (response ) {
         console.log(response);
      })
      .catch(function (error) {
         console.log(error);
      })
      .then(function () {
      });
}
