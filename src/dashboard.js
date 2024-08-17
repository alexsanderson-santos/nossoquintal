document.addEventListener("DOMContentLoaded", function() {
    const userInfo = getUserInfo();
    if (!userInfo) {
        window.location.href = "/login";
        return;
    }

    document.getElementById("username").textContent = userInfo.name;

    const itineraries = [
        { title: "Ecuador Adventure", description: "Explore the Amazon and Andes." },
        { title: "Galapagos Islands", description: "Dive into unique wildlife experiences." },
    ];

    const itinerariesContainer = document.getElementById("itineraries");
    itineraries.forEach(itinerary => {
        const itineraryElement = document.createElement("div");
        itineraryElement.classList.add("itinerary");

        itineraryElement.innerHTML = `<h3>${itinerary.title}</h3><p>${itinerary.description}</p>`;
        itinerariesContainer.appendChild(itineraryElement);
    });

    document.getElementById("logout").addEventListener("click", function() {
        // Azure Static Web Apps Logout
        fetch("/.auth/logout")
            .then(() => window.location.href = "/");
    });
});

function getUserInfo() {
    // Fetch user info from Azure Static Web Apps Authentication endpoint
    // In production, ensure that you validate this endpoint properly
    const userInfo = {
        name: "John Doe",
        // Add more user information if needed
    };
    return userInfo;
}
