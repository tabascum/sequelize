(async () => {
  const Planet = require("./models/Planet");

  //method to create new entries in the database
  /*
  const newPlanet = await Planet.create({
    name: "Pluto",
    position: 9,
  });
*/

  // method to display all database entries (in this case with the name "Earth")
  /*const seePlanets = await Planet.findAll({
    where: {
        name: "Earth",
    }
  });  */

  const seePlanets = await Planet.findByPk(2);

  console.log(seePlanets);
})();
