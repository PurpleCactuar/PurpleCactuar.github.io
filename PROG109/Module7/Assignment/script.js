// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}


// Create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);
var sunsetHotel = new Hotel('Sunset', 86, 10);


  // Update the HTML for the page
  var details1 = quayHotel.name + ' rooms: ';
      details1 += quayHotel.checkAvailability();
      var hotelName1 = document.createElement("h3");
      hotelName1.textContent = details1
  var elHotel1 = document.getElementById('hotel1');
  elHotel1.appendChild(hotelName1);

  var details2 = parkHotel.name + ' rooms: ';
      details2 += parkHotel.checkAvailability();
      var hotelName2 = document.createElement("h3");
      hotelName2.textContent = details2
  var elHotel2 = document.getElementById('hotel2');
  elHotel2.appendChild(hotelName2);

  var details3 = sunHotel.name + ' rooms: ';
      details3 += sunHotel.checkAvailability();
      var hotelName3 = document.createElement("h3");
      hotelName3.textContent = details3
  var elHotel3 = document.getElementById('hotel3');
  elHotel3.appendChild(hotelName3);

/*
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/
