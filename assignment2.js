const salon = {
    name: "The Pet Place",
    phone: "818 999 9999",
    address: {
            number: "12345",
            street: "Olivera St.",
            city: "Los Angeles",
            state: "CA",
            zip: "12345"},
    
    hours:{
            open: "8am",
            close: "6pm"
    },
    owner: "Alexander Dedman"
    }

function displaySalonInformation(){
    let salonContainer = document.getElementById("salonContainer");
    let information = "";


    information += `<h2>${salon.name} </h2>
    <p> Owner: ${salon.owner} </p>
    <p> Phone: ${salon.phone} </p>
    <p> Address: ${salon.address.number} ${salon.address.street}, ${salon.address.city}, ${salon.address.state} ${salon.address.zip} </p>
    <p> Hours: ${salon.hours.open} - ${salon.hours.close} </p>
`;


salonContainer.innerHTML = information;
}

displaySalonInformation();

function Pet(name,age,gender,service,breed,tier){
        this.name = name,
        this.age = age,
        this.gender = gender,
        this.service = service, 
        this.breed = breed,
        this.tier = tier
}

const pet4 = new Pet("Tara", 2, "female", "Grooming", "Mixed", "Basic");
const pet5 = new Pet("Dude", 4, "male", "Nail Clipping", "Bulldog", "Premium");
const pet6 = new Pet("Lady", 6, "other", "Daycare", "Pug", "Deluxe");

const petRegistrationForm = document.getElementById("petRegistrationForm");
const petsList = document.getElementById("petsList");

function registerPet(event){
  event.preventDefault();

 let result = "";

    const name = petRegistrationForm.elements["petName"].value;
    const age = petRegistrationForm.elements["petAge"].value;
    const gender = petRegistrationForm.elements["petGender"].value;
    const breed = petRegistrationForm.elements["petBreed"].value;
    const service = petRegistrationForm.elements["petService"].value;
    const tier = petRegistrationForm.elements["petTier"].value;

    const newPet = new Pet(name, age, gender, service, breed);

console.log(newPet);

petList.innerHTML += `
<div class="petCard" style="width: 18rem; border: solid 2px black">
  <div class="card-body">
    <h5 class="card-title">${newPet.name}</h5> <br>
    <p class="card-text">Age: ${newPet.age}</p>
    <p class="card-text">Gender: ${newPet.gender}</p>
    <p class="card-text">Breed: ${newPet.breed}</p>
    <p class="card-text">Service ${newPet.service}</p>
    <p class="card-text">Type: ${newPet.tier}</p>
  </div>
</div>
`

}



