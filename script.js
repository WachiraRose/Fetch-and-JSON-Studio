// TODO: add code here
const htmlBuilderAstronaut = (astronaut) => (
    `
    <div class="astronaut">
    <div class="bio">
        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
        <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li class="${astronaut.active ? 'green' : ''}">Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills.join(", ")}</li>
        </ul>
    </div>
    <img class="avatar" src="${astronaut.picture}"/>
    </div>
    `
);
​
const astronautComponent = async () => {
    // Fetch the JSON data:
    const response = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    // Parse the JSON data (turn it into a regular JavaScrip Object)
    const data = await response.json();
    // This will store all of the HTML as text //
    let astronauts = '';
    for (astronaut of data) {
        astronauts += htmlBuilderAstronaut(astronaut);
    }
    // Add HTML to container
    container.innerHTML = astronauts;
};
​
// waits for the page to load 
window.addEventListener('load', function() {    
    astronautComponent();
});