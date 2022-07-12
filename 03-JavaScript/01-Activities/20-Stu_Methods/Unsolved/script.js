var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW
constellations.unshift("Canis Major");

planets.pop();

var galaxy = [constellations + planets];

var newStar = star.toUpperCase();

console.log(planets);
console.log(galaxy);
console.log(newStar);
