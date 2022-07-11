// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src ="${imageUrl}">
            `
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput == "") {
        return "Empty";
    }
    else if (isNaN(testInput)) {
        return "Is Not a Number";
    }
    else {
        return "Is a Number";
    };
};

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //will use validateInput() to complete the formSubmission()

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let faultyItemsList = document.getElementById("faultyItems");

    if (validateInput(list) == "Empty" || validateInput(pilot) == "Empty" || validateInput(copilot) == "Empty" || validateInput(fuelLevel) == "Empty" || validateInput(cargoLevel) == "empty") {
        window.alert("Please be sure all fields are completed");
    }
    else if (validateInput(fuelLevel) == "Is Not a Number" || validateInput(cargoLevel) == "Is Not a Number") {
        window.alert("Please enter a numeric value for Fuel Level and Cargo Level");
    }
    else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (fuelLevel < 10000) {
            faultyItemsList.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            //print there is not enough fuel for the journey
        }
        else if (cargoLevel > 10000) {
            faultyItemsList.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
        }
        else {
            faultyItemsList.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }
   }
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = planets[Math.floor(math.random()*planets.length)];
    return planet
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
