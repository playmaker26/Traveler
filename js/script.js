//Start of open and close navigation function
function sideNav() {
  const burger = document.querySelector('.burger');
  let openNav = false;

  burger.addEventListener('click', () => {
    if(!openNav) {
      openNav = true;
      document.querySelector('ul').style.right = 0;
      document.querySelector('ul').style.opacity = 1;
      burger.classList.add('open');
    } else {
      openNav = false;
      document.querySelector('ul').style.right = '-96px';
      document.querySelector('ul').style.opacity = 0;
      burger.classList.remove('open');
    }
  });
}
sideNav();
//End of open and close navigation function

//Start of active link indicator
function activeLink() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-links').forEach(link => {
    if(link.href.includes(`${activePage}`)) {
      link.classList.add('activeLink')
    }
  });
}
activeLink();
//End of active link indicator

//Start of interactive map
async function getUser(place) {
  const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=b00bd8b4f2da4cd0a39008624849b5f5&location=${place}`
  
  const response = await fetch(api_url);
  
  const data = await response.json();
  
  time = await data.datetime
  // arr = Array.from(time)
  // arr.splice(0, 11)
  // arr.toString()
  // timezone = (arr.splice(0, 5)).join("");
  document.getElementById("time").innerText = `${place}'s time = ${time} ${data.timezone_abbreviation}`

}

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
  window.onmousemove=function (j) {
      x = j.clientX
      y = j.clientY
      document.getElementById('name').style.top = y-60  + 'px'
      document.getElementById('name').style.left = x +10 + 'px'
  }
  const classes=e.className.baseVal.replace(/ /g, '.')         
  document.querySelectorAll(`.${classes}`).forEach(country =>{
      country.style.fill = "#a50105"
  })
  document.getElementById("name").style.opacity = 1
  
  document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
  const classes=e.className.baseVal.replace(/ /g, '.')
  document.querySelectorAll(`.${classes}`).forEach(country =>{
      country.style.fill = "#ececec"
  })
  document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
  getUser(e.id)
})

})

// document.getElementById("searchBtn").addEventListener("click", function () {
//     country = document.getElementById("search").value
//     document.querySelectorAll(`.allPaths`).forEach(e => {
//         e.style.fill = "#ececec"
//     })
//     document.querySelectorAll(`#${country}`).forEach(e => {
//         e.style.fill = "red"
//     })
// }))

function sideForm() {
  let btn = document.querySelector('.btn-side-form');
  if (!btn) {
   
    return;
  }
  let formOpen = false;
  btn.addEventListener('click', () => {
    if (!formOpen) {
      formOpen = true;
      document.querySelector('.search-country').style.opacity = 1;
      document.querySelector('.search-country').style.left = 0;
      btn.style.left = '215px';
      btn.classList.add('activeForm');
      btn.innerText = 'Close';
    } else {
      formOpen = false;
      document.querySelector('.search-country').style.opacity = 0;
      document.querySelector('.search-country').style.left = '-228px';
      btn.style.left = '-14px';
      btn.classList.remove('activeForm');
      btn.innerText = 'Open';
    }
  });
}
sideForm();


function searchCountry() {
  const searchBtn = document.querySelector('.search-icon');
  const countryInput = document.querySelector('.search-input');
  const information = document.querySelector('.information');

  if (!searchBtn || !countryInput || !information) {
    return; // Exit the function if any of the search elements are not found
  }

  searchBtn.addEventListener('click', handleSearch);
  countryInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent page from refreshing
      handleSearch();
    }
  });

  function handleSearch() {
    const countryName = countryInput.value.trim();
    if (!countryName) {
      console.log('Please enter a country name.');
      return;
    }
    const finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        if (data[0].currencies && Object.keys(data[0].currencies).length > 0) {
          console.log(Object.keys(data[0].currencies)[0]);
          console.log(data[0].currencies[Object.keys(data[0].currencies)[0]].name);
        } else {
          console.log('Currencies information not available for this country.');
        }
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        information.innerHTML = `
        <figure class="img-flag">
          <img src="${data[0].flags.svg}" class="country-flag">
          <figcaption class="country-info">
            <header class="country-name-header"><h2 class="country-name">${data[0].name.common}</h2></header>
            <ul>
              <li><strong>Capital:</strong> ${data[0].capital[0]}</li>
              <li><strong>Continents:</strong> ${data[0].continents[0]}</li>
              <li><strong>Population:</strong> ${data[0].population}</li>
              <li><strong>Currency:</strong> ${data[0].currencies[Object.keys(data[0].currencies)[0]].name}</li>
              <li><strong>Common Languages:</strong> ${Object.values(data[0].languages).join(", ")}</li>
            </ul>
          </figcaption>
        </figure>
      `;
      })
      .catch((error) => {
        console.error('Error fetching country data:', error);
      });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  contactForm();
  sideForm();
  searchCountry();
});
//End of interactive map

//Start of book page page
document.addEventListener('DOMContentLoaded', function() {
  function bookingForm() {
    let name = document.querySelector('#name');
    let email = document.querySelector('#email');
    let phoneNumber = document.querySelector('#phonenumber');
    let numberOfPassengers = document.querySelector('#numberofpassengers');
    let numberOfAdults = document.querySelector('#numberofadults');
    let numberOfKids = document.querySelector('#numberofkids');
    let destination = document.querySelector('#destination');
    let departureDate = document.querySelector('#departure');
    let returnDate = document.querySelector('#return');
    let paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    let labelCreditCard = document.querySelector('.credit-card');
    let labelDebitCard = document.querySelector('.debit-card');
    let labelPayPal = document.querySelector('.paypal');
    let cardNumber = document.querySelector('#cardnumber');
    let expiryDate = document.querySelector('#expirydate');
    let cvv = document.querySelector('#cvv');
    let totalPrice = document.querySelector('#totalPrice');
    const bookingForm = document.querySelector('#bookingForm');

    function isWeekend(date) {
      const day = date.getDay();
      return day === 0 || day === 6;
    }

    function isHoliday(date) {
      if (isNaN(date)) {
        return false;
      }
      const holidays = [
        '01-01', // New Year's Day
        '02-14', // Valentine's Day
        '07-04', // Independence Day
        '12-25', // Christmas Day
        '12-31'  // New Year's Eve
        // Add other fixed holidays as needed
      ];
      const monthDay = date.toISOString().slice(5, 10);
      return holidays.includes(monthDay) || isThanksgiving(date);
    }

    function isThanksgiving(date) {
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      if (month === 10) { // November (0-indexed)
        const firstDayOfMonth = new Date(year, 10, 1).getDay();
        const fourthThursday = 22 + (11 - firstDayOfMonth) % 7;
        return day === fourthThursday;
      }
      return false;
    }

    function calculateTotalPrice() {
      const adultPrice = 100; // Base price for adults
      const kidPrice = 50; // Base price for kids
      let total = 0;

      const adults = parseInt(numberOfAdults.value) || 0;
      const kids = parseInt(numberOfKids.value) || 0;

      // Calculate base price
      total += adults * adultPrice;
      total += kids * kidPrice;

      const departure = new Date(departureDate.value);
      const returnD = new Date(returnDate.value);

      if (!isNaN(departure) && (isWeekend(departure) || isHoliday(departure))) {
        total *= 1.2;
      }

      if (!isNaN(returnD) && (isWeekend(returnD) || isHoliday(returnD))) {
        total *= 1.2;
      }

      totalPrice.textContent = `$${total.toFixed(2)}`;
    }

    numberOfAdults.addEventListener('input', calculateTotalPrice);
    numberOfKids.addEventListener('input', calculateTotalPrice);
    departureDate.addEventListener('input', calculateTotalPrice);
    returnDate.addEventListener('input', calculateTotalPrice);

    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let valid = true;

      const inputs = [name, email, phoneNumber, numberOfPassengers, numberOfAdults, numberOfKids, destination, departureDate, returnDate, cardNumber, expiryDate, cvv];
      inputs.forEach(input => {
        input.style.border = '1px solid #000';
      });
      labelCreditCard.style.color = '#000';
      labelDebitCard.style.color = '#000';
      labelPayPal.style.color = '#000';

      inputs.forEach(input => {
        if (input.value.trim() === '') {
          input.style.border = '2px solid red';
          valid = false;
        }
      });

      let paymentSelected = false;
      paymentMethods.forEach(method => {
        if (method.checked) {
          paymentSelected = true;
        }
      });

      if (!paymentSelected) {
        labelCreditCard.style.color = 'red';
        labelDebitCard.style.color = 'red';
        labelPayPal.style.color = 'red';
        valid = false;
      }

      if (valid) {
        const formData = {
          name: name.value.trim(),
          email: email.value.trim(),
          phoneNumber: phoneNumber.value.trim(),
          numberOfPassengers: numberOfPassengers.value.trim(),
          numberOfAdults: numberOfAdults.value.trim(),
          numberOfKids: numberOfKids.value.trim(),
          destination: destination.value.trim(),
          departureDate: departureDate.value,
          returnDate: returnDate.value,
          paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
          cardNumber: cardNumber.value.trim(),
          expiryDate: expiryDate.value.trim(),
          cvv: cvv.value.trim(),
          totalPrice: totalPrice.textContent
        };

        console.log('Form Data:', formData);

        alert('Booking submitted successfully!');
        bookingForm.reset();
        calculateTotalPrice();
      } else {
        console.log('Form has errors');
      }
    });

    calculateTotalPrice();
  }

  bookingForm();
  sideForm();
});
//End of book page

//Start of contact form
function contactForm() {
  const contactName = document.querySelector('#name');
  const contactEmail = document.querySelector('#email');
  const contactMessage = document.querySelector('#message');
  const contactForm = document.querySelector('.contact-form');

  if (!contactForm) {
    return; // Exit the function if the contact form element is not found
  }

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission

    let submit = true;
    const fields = [contactName, contactEmail, contactMessage];

    fields.forEach(field => {
      field.style.border = '1px solid #000'; // Reset border style
    });

    fields.forEach(field => {
      if (field.value.trim() === '') {
        field.style.border = '2px solid red'; // Highlight empty fields
        submit = false;
      }
    });

    if (submit) {
      const contactData = {
        contactName: contactName.value.trim(),
        contactEmail: contactEmail.value.trim(),
        contactMessage: contactMessage.value.trim()
      };

      console.log('Contact form data:', contactData);
      alert('Contact form submitted successfully!');

      // Optionally, you can reset the form fields after successful submission
      contactForm.reset();
    } else {
      alert('Form is incomplete. Please fill in all fields.');
    }
  });
}

//End of contact form