// Write your JavaScript code here!

//const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    //need to call formSubmission here first
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let list = document.getElementById("faultyItems");
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);

    })

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet = pickPlanet(listedPlanets);
       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

    })
   
});