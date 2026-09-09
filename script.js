// ==========================================
// HAPPY PAWS PETCARE JAVASCRIPT
// ==========================================


// ==========================================
// HERO PET SWITCHER
// Click the pet in the hero section
// ==========================================

let heroPets = ["🐶", "🐱", "🐦", "🦎"];

let currentPet = 0;


function changeHeroPet() {

    // Move to the next pet
    currentPet++;


    // If we reach the end,
    // start again from the dog
    if (currentPet >= heroPets.length) {

        currentPet = 0;

    }


    // Change the emoji inside the hero
    document.getElementById("heroPet").firstChild.textContent =
        heroPets[currentPet];

}



// ==========================================
// SERVICE FORM
// ==========================================

let selectedService = "";


function openForm(service) {

    // Store which service was selected
    selectedService = service;


    // Hide all forms first

    document.getElementById("daycareFormBox").style.display =
        "none";

    document.getElementById("petcareFormBox").style.display =
        "none";

    document.getElementById("adoptionFormBox").style.display =
        "none";


    // Show the correct form

    if (service === "daycare") {

        document.getElementById("daycareFormBox").style.display =
            "block";

    }


    else if (service === "petcare") {

        document.getElementById("petcareFormBox").style.display =
            "block";

    }


    else if (service === "adoption") {

        document.getElementById("adoptionFormBox").style.display =
            "block";

    }


    // Display modal

    document.getElementById("formModal").style.display =
        "flex";

}



// ==========================================
// CLOSE FORM
// ==========================================

function closeForm() {

    document.getElementById("formModal").style.display =
        "none";

}



// ==========================================
// DAYCARE FORM
// ==========================================

document
    .getElementById("daycareForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();


        // Create daycare booking object

        let booking = {

            type: "Daycare",

            petName:
                document.getElementById("daycarePetName").value,

            breed:
                document.getElementById("daycareBreed").value,

            owner:
                document.getElementById("daycareOwner").value,

            date:
                document.getElementById("daycareDate").value,

            time:
                document.getElementById("daycareTime").value

        };


        // Save booking

        saveBooking(booking);


        // Show confirmation

        alert(
            "Your daycare booking has been submitted!"
        );


        // Clear form

        this.reset();


        // Close modal

        closeForm();

    });



// ==========================================
// PET CARE FORM
// ==========================================

document
    .getElementById("petcareForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();


        // Create pet care object

        let booking = {

            type: "Pet Care",

            petName:
                document.getElementById("carePetName").value,

            breed:
                document.getElementById("careBreed").value,

            owner:
                document.getElementById("careOwner").value,

            service:
                document.getElementById("careService").value,

            date:
                document.getElementById("careDate").value,

            notes:
                document.getElementById("careNotes").value

        };


        // Save booking

        saveBooking(booking);


        // Confirmation message

        alert(
            "Your pet care request has been submitted!"
        );


        // Clear form

        this.reset();


        // Close modal

        closeForm();

    });



// ==========================================
// ADOPTION FORM
// ==========================================

document
    .getElementById("adoptionForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh
        event.preventDefault();


        // Create adoption request

        let adoptionRequest = {

            type: "Adoption",

            adopterName:
                document.getElementById("adopterName").value,

            email:
                document.getElementById("adopterEmail").value,

            phone:
                document.getElementById("adopterPhone").value,

            preferredPet:
                document.getElementById("preferredPet").value,

            homeType:
                document.getElementById("homeType").value,

            petExperience:
                document.getElementById("petExperience").value,

            reason:
                document.getElementById("adoptionReason").value

        };


        // Get existing adoption requests

        let requests =
            JSON.parse(
                localStorage.getItem("adoptionRequests")
            ) || [];


        // Add new request

        requests.push(adoptionRequest);


        // Save adoption requests

        localStorage.setItem(
            "adoptionRequests",
            JSON.stringify(requests)
        );


        // Show confirmation

        alert(
            "Your adoption request has been submitted!"
        );


        // Clear form

        this.reset();


        // Close modal

        closeForm();

    });



// ==========================================
// SAVE DAYCARE / PET CARE BOOKINGS
// ==========================================

function saveBooking(booking) {

    // Get old bookings

    let bookings =
        JSON.parse(
            localStorage.getItem("petBookings")
        ) || [];


    // Add new booking

    bookings.push(booking);


    // Save everything again

    localStorage.setItem(
        "petBookings",
        JSON.stringify(bookings)
    );

}



// ==========================================
// CONTACT FORM
// ==========================================

document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

        // Stop page refresh

        event.preventDefault();


        // Create contact object

        let contact = {

            name:
                document.getElementById("contactName").value,

            email:
                document.getElementById("contactEmail").value,

            subject:
                document.getElementById("contactSubject").value,

            message:
                document.getElementById("contactMessage").value

        };


        // Get old messages

        let messages =
            JSON.parse(
                localStorage.getItem("contactMessages")
            ) || [];


        // Add new message

        messages.push(contact);


        // Save messages

        localStorage.setItem(
            "contactMessages",
            JSON.stringify(messages)
        );


        // Show confirmation

        alert(
            "Thank you " +
            contact.name +
            "! Your message has been saved."
        );


        // Clear form

        this.reset();

    });



// ==========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ==========================================

window.addEventListener("click", function(event) {

    let modal =
        document.getElementById("formModal");


    // If user clicks the dark background

    if (event.target === modal) {

        closeForm();

    }

});