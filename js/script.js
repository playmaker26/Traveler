//open and close mobile navigation
function mobileNav() {
  const hamburgerBtn = document.querySelector('#hamburger');
  let nav = false;
  hamburgerBtn.addEventListener('click', () => {
    if(!nav) {
      nav = true;
      document.querySelector('.nav-ul').style.right = 0;
      document.querySelector('.nav-ul').style.opacity = 1;
      hamburgerBtn.classList.add('open');
    }else {
      nav = false;
      document.querySelector('.nav-ul').style.right = '-200px';
      document.querySelector('.nav-ul').style.opacity = 0;
      hamburgerBtn.classList.remove('open');
    }
  });
}
mobileNav();

//active link
function activeLink() {
  const activeLink = window.location.pathname;
  const navLinks = document.querySelectorAll('nav .nav-link').forEach(link => {
if(link.href.includes(`${activeLink}`)) {
  link.classList.add('currentPage');
}
  });
}
activeLink();

//modal function
function modal() {
const countries = {
  Australia: {
    image: '../img/australia.jpg',
    name: 'Australia',
    info: 'Australia beckons with its diverse landscapes, from the iconic Sydney Opera House to the pristine beaches of the Gold Coast. Explore the unique wildlife, including kangaroos and koalas, and dive into the vibrant underwater world of the Great Barrier Reef.'
  },

  Brazil: {
    image: '../img/brazil.jpg',
    name: 'Brazil',
    info: 'Brazil entices travelers with its infectious energy, showcased in the lively streets of Rio de Janeiro during the colorful Carnival. Discover the Amazon rainforest\'s biodiversity, relax on the sun-kissed beaches of Copacabana, and savor the rich cultural fusion that defines this South American gem.'
  },

  Canada: {
    image: '../img/canada.jpg',
    name: 'Canada',
    info: 'Canada\'s vast wilderness and cosmopolitan cities create a magnetic allure. From the majestic Rocky Mountains to the multicultural hubs of Toronto and Vancouver, Canada offers outdoor adventures, cultural experiences, and the warm hospitality of its friendly locals.'
  },

  France: {
    image: '../img/france.jpg',
    name: 'France',
    info: 'France, the epitome of romance, boasts iconic landmarks like the Eiffel Tower, charming countryside vineyards, and world-class cuisine. Immerse yourself in the art and history of Paris, indulge in gourmet delights, and savor the enchanting ambiance of this European treasure.'
  },

  Greece: {
    image: '../img/greece.jpg',
    name: 'Greece',
    info: 'Greece, steeped in ancient mythology, captivates with its sun-drenched islands, archaeological wonders, and Mediterranean cuisine. Explore the historic ruins of Athens, relax on the beaches of Santorini, and embrace the warmth of Greek hospitality.'
  },

  Iceland: {
    image: '../img/iceland.jpg',
    name: 'Iceland',
    info: 'Iceland\'s ethereal landscapes, featuring glaciers, geysers, and hot springs, create a mesmerizing setting. Witness the Northern Lights dance across the sky, bathe in the Blue Lagoon, and embark on a journey through this land of fire and ice.'
  },

  India: {
    image: '../img/india.jpeg',
    name: 'India',
    info: 'India, a tapestry of colors and traditions, invites travelers to experience its diverse landscapes, from the bustling streets of Delhi to the serene backwaters of Kerala. Discover ancient temples, indulge in aromatic spices, and witness the vibrant festivals that define this subcontinent.'
  },

  Italy: {
    image: '../img/italy.jpg',
    name: 'Italy',
    info: 'Italy, a living canvas of art and history, beckons with landmarks like the Colosseum, the Leaning Tower of Pisa, and the romantic canals of Venice. Delight in the flavors of Italian cuisine, from pasta in Rome to gelato in Florence.'
  },

  Japan: {
    image: '../img/japan.jpg',
    name: 'Japan',
    info: 'Japan seamlessly blends tradition and modernity, offering a glimpse into ancient temples, serene gardens, and futuristic technology. Cherry blossoms in spring, traditional tea ceremonies, and the bustling energy of Tokyo create an unforgettable experience.'
  },

  Mexico: {
    image: '../img/mexico.jpg',
    name: 'Mexico',
    info: 'Mexico enchants with its vibrant culture, ancient ruins, and sun-soaked beaches. Explore the archaeological wonders of Chichen Itza, savor authentic tacos in Mexico City, and unwind on the shores of Cancun or Tulum.'
  },

  Morocco: {
    image: '../img/morocco.jpg',
    name: 'Morocco',
    info: 'Morocco, where the desert meets the sea, entices with its colorful markets, intricate architecture, and the Sahara\'s golden dunes. Immerse yourself in the medinas of Marrakech, taste flavorful tagines, and ride camels into the sunset.'
  },

  NewZealand: {
    image: '../img/new-zealand.jpg',
    name: 'New Zealand',
    info: 'New Zealand\'s breathtaking landscapes, from fjords to mountains, make it a haven for outdoor enthusiasts. Explore the adventure capital of Queenstown, witness the glowworm caves in Waitomo, and embrace the Kiwi spirit.'
  },

  Peru: {
    image: '../img/peru.jpg',
    name: 'Peru',
    info: 'Peru, home to the ancient Inca civilization, beckons with the awe-inspiring Machu Picchu, nestled in the Andes. Journey through the Sacred Valley, explore the vibrant markets of Cusco, and trek the Inca Trail for an unforgettable experience.'
  },

  Portugal: {
    image: '../img/portugal.jpg',
    name: 'Portugal',
    info: 'Portugal charms with its historic cities, picturesque beaches, and vibrant cultural scene. Wander through the cobbled streets of Lisbon, taste port wine in Porto, and relax on the golden sands of the Algarve.'
  },

  SouthAfrica: {
    image: '../img/south-africa.jpg',
    name: 'South Africa',
    info: 'South Africa\'s diverse landscapes offer wildlife safaris, vibrant cities, and stunning coastlines. Discover the Big Five in Kruger National Park, explore the cultural melting pot of Cape Town, and savor the flavors of South African cuisine.'
  },

  Spain: {
    image: '../img/spain.jpeg',
    name: 'Spain',
    info: 'Spain, a land of fiestas and flamenco, invites travelers to explore its historic cities, from the Alhambra in Granada to the Sagrada Familia in Barcelona. Indulge in tapas, dance to the rhythm of flamenco, and soak in the sun on the Costa del Sol.'
  },

  Switzerland: {
    image: '../img/switerland.jpg',
    name: 'Switzerland',
    info: 'Switzerland\'s Alpine beauty, pristine lakes, and charming villages create an idyllic setting. Whether skiing in the Swiss Alps, cruising on Lake Geneva, or exploring the cultural richness of Zurich, Switzerland offers a blend of adventure and tranquility.'
  },

  Thailand: {
    image: '../img/thailand.jpg',
    name: 'Thailand',
    info: 'Thailand, known for its tropical beaches, ornate temples, and bustling street markets, captivates with its vibrant energy. Experience the bustling markets of Bangkok, relax on the islands of Phuket or Koh Phi Phi, and savor the diverse Thai cuisine.'
  },

  UnitedStates: {
    image: '../img/united-states.jpg',
    name: 'United States',
    info: 'The United States offers a tapestry of experiences, from the iconic skyline of New York City to the natural wonders of Yellowstone National Park. Explore the cultural diversity of cities like San Francisco, indulge in southern hospitality, and embark on road trips through scenic landscapes.'
  },

  Vietnam: {
    image: '../img/vietnam.jpg',
    name: 'Vietnam',
    info: 'Vietnam\'s rich history, vibrant cities, and serene landscapes make it a compelling destination. Cruise through the limestone karsts of Ha Long Bay, explore the ancient town of Hoi An, and savor the flavors of Vietnamese street food.'
  }
};

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalImage = document.getElementById('modal-image');
const modalCountryName = document.querySelector('.modal-country-name');
const modalInfo = document.querySelector('.modal-info');
const closeButton = document.querySelector('.close');
const readMoreLinks = document.querySelectorAll('.read-more-link');

if(!modalContent) {
  return;
}

// Function to open the modal
function openModal(country) {
  modalImage.src = countries[country].image;
  modalCountryName.textContent = countries[country].name;
  modalInfo.textContent = countries[country].info;
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  modal.style.display = 'none';
}

// Event listener for close button
closeButton.addEventListener('click', closeModal);

// Event listeners for each country
readMoreLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    openModal(Object.keys(countries)[index]);
  });
});
}

// Call the modal function
modal();

//intersection observer
window.addEventListener('DOMContentLoaded', setup);

function setup() {
  // Check if the observer should be set up on the current page
  if (window.location.pathname.endsWith("/about.html")) {
    const options = {
      rootMargin: '0px 0px -200px 0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const travelAgencyPic = document.querySelector('.agency-pic');
    if (travelAgencyPic) {
      observer.observe(travelAgencyPic);
    }

    const travelAgencyInfo = document.querySelector('.travel-ageny-info');
    if (travelAgencyInfo) {
      observer.observe(travelAgencyInfo);
    }

    const employeePic = document.querySelector('.employee-pic');
    if (employeePic) {
      observer.observe(employeePic);
    }

    const employeeInfo = document.querySelector('.employee-info');
    if (employeeInfo) {
      observer.observe(employeeInfo);
    }
  }
}

//payment function
if(window.location.pathname.includes('/payment.html')) {
  function calculatePrice() {
    const itemType = document.querySelector('#itemType').value;
    const country = document.querySelector('#country').value;
    const quantity =  parseInt(document.querySelector('#quantity').value);
    const travelDate = new Date(document.querySelector('#travelDate').value);

    const basePrice = Math.floor(Math.random() * (500 - 50 + 1)) + 50;

    const currentDate = new Date();
    const timeDifference = travelDate - currentDate;
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    let holidayFactor = 1;
    let seasonFactor = 1;

    const fixedHolidays = [
      new Date(travelDate.getFullYear(), 0, 1),
      new Date(travelDate.getFullYear(), 0, 20),
      new Date(travelDate.getFullYear(), 1, 17),
      new Date(travelDate.getFullYear(), 4, 25),
      new Date(travelDate.getFullYear(), 5, 19),
      new Date(travelDate.getFullYear(), 6, 4),
      new Date(travelDate.getFullYear(), 8, 5),
      new Date(travelDate.getFullYear(), 9, 14),
      new Date(travelDate.getFullYear(), 9, 31),
      new Date(travelDate.getFullYear(), 10, 11),
      new Date(travelDate.getFullYear(), 10, 24),
      new Date(travelDate.getFullYear(), 11, 24),
      new Date(travelDate.getFullYear(), 11, 25),
      new Date(travelDate.getFullYear(), 11, 31)
    ];
    
    if(fixedHolidays.some(holiday => (
      holiday.getDate() === travelDate.getDate() && holiday.getMonth() === travelDate.getMonth()
    ))) {
      holidayFactor = 1.2;
    }

    if(travelDate.getMonth() >= 5 && travelDate.getMonth() <= 7) {
      seasonFactor = 1.1;
    }

    let popularityFactor = 1;

    const countryPopulations = {
      "Australia": 25600000,
      "Brazil": 213993437,
      "Canada": 38131104,
      "France": 67564251,
      "Greece": 10423054,
      "Iceland": 342364,
      "India": 1393409038,
      "Italy": 60367482,
      "Japan": 126050804,
      "Mexico": 126190788,
      "Morocco": 36910558,
      "New Zealand": 4822233,
      "Peru": 33465622,
      "Portugal": 10196709,
      "South Africa": 60041950,
      "Spain": 46733038,
      "Switzerland": 8707720,
      "Thailand": 69950850,
      "United States": 331002651,
      "Vietnam": 97338579
    };

    if(countryPopulations[country]) {
      popularityFactor = 0.5 +(countryPopulations[country] / 100000000);
    }

    const finalPrice = basePrice * quantity * holidayFactor * seasonFactor * popularityFactor;

    document.querySelector('#totalPrice').textContent = `$${finalPrice.toFixed(2)}`;
  }
}