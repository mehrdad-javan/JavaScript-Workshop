// Sample data for advertisements
const advertisementsData = [
  {
    title: "Ad 1",
    description: "This is the first advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact1@example.com",
  },
  {
    title: "Ad 2",
    description: "This is the second advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact2@example.com",
  },
  {
    title: "Ad 3",
    description: "This is the third advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact3@example.com",
  },
  {
    title: "Ad 4",
    description: "This is the fourth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact4@example.com",
  },
  {
    title: "Ad 5",
    description: "This is the fifth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact5@example.com",
  },
  {
    title: "Ad 6",
    description: "This is the sixth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact6@example.com",
  },
  // Add more advertisements as needed
];

// Function to create a card for each advertisement
const createAdvertisementCard = (advertisement) => {
  const card = document.createElement("div");
  card.classList.add("card", "mb-4", "col-md-4"); // Bootstrap grid system

  const img = document.createElement("img");
  img.classList.add("card-img-top");
  img.src = advertisement.image;
  img.alt = advertisement.title;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = advertisement.title;

  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = advertisement.description;

  const contact = document.createElement("p");
  contact.classList.add("card-text");
  contact.textContent = "Contact: ***"; // Initially display contact info in "***" mode

  contact.addEventListener("click", function () {
    // Toggle between "***" mode and complete contact information
    contact.textContent =
      contact.textContent === "Contact: ***"
        ? "Contact: " + advertisement.contact
        : "Contact: ***";
  });

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(contact);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer", "text-center");

  const detailsButton = document.createElement("button");
  detailsButton.classList.add("btn", "btn-info", "btn-block");
  detailsButton.textContent = "Details";
  detailsButton.addEventListener("click", function () {
    // Reveal the complete contact information when Details button is clicked
    alert("Contact: " + advertisement.contact);
  });

  cardFooter.appendChild(detailsButton);

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  return card;
};

// Function to render advertisements based on the filter
const renderAdvertisements = (filter) => {
  const advertisementsContainer = document.getElementById("advertisements");

  // Clear existing content
  advertisementsContainer.innerHTML = "";

  // Filter advertisements based on title
  const filteredAdvertisements = filter
    ? advertisementsData.filter((advertisement) =>
        advertisement.title.toLowerCase().includes(filter.toLowerCase())
      )
    : advertisementsData;

  // Create and append cards for each advertisement
  filteredAdvertisements.forEach((advertisement, index) => {
    const card = createAdvertisementCard(advertisement);
    advertisementsContainer.appendChild(card);

    // Check if it's the third ad (index + 1 is used for 1-based indexing)
    if ((index + 1) % 3 === 0) {
      // Add a new row after every three ads
      advertisementsContainer.appendChild(document.createElement("div"));
    }
  });
};

// Event listener for input changes in the filter
document.getElementById("filterTitle").addEventListener("input", function () {
  const filterTitle = this.value.trim();
  renderAdvertisements(filterTitle);
});

// Call the function to render advertisements when the page loads
window.onload = function () {
  renderAdvertisements("");
};
