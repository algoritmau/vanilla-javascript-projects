const theater = document.querySelector('.theater');
const availableSeats = document.querySelectorAll(
  '.theater__row .theater__seat:not(.occupied)'
);
const orderSeatsCountEl = document.getElementById('order-seats-count');
const orderTotalEl = document.getElementById('order-total-amount');
const moviePickerEl = document.getElementById('movie-picker');

populateUI();

let ticketPrice = +moviePickerEl.value;

const selectSeats = (e) => {
  if (
    e.target.classList.contains('theater__seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
  }

  updateOrder();
};

const updateOrder = () => {
  const seatsToBook = theater.querySelectorAll('.theater__seat.selected');
  const seatsToBookTotal = seatsToBook.length;
  const orderTotal = seatsToBookTotal * ticketPrice;

  const seatsToBookIndexes = [...seatsToBook].map((seatToBook) =>
    [...availableSeats].indexOf(seatToBook)
  );

  localStorage.setItem('selectedSeats', JSON.stringify(seatsToBookIndexes));

  orderSeatsCountEl.textContent = seatsToBookTotal;
  orderTotalEl.textContent = orderTotal;
};

function populateUI() {
  const selectedSeatsFromLocalStorage = JSON.parse(
    localStorage.getItem('selectedSeats')
  );

  if (
    selectedSeatsFromLocalStorage !== null &&
    selectedSeatsFromLocalStorage.length > 0
  ) {
    availableSeats.forEach((selectedSeat, index) => {
      if (selectedSeatsFromLocalStorage.indexOf(index) > -1) {
        selectedSeat.classList.add('selected');
      }
    });

    orderSeatsCountEl.textContent = selectedSeatsFromLocalStorage.length;
  }

  const selectedMovieIndexFromLocalStorage = localStorage.getItem(
    'selectedMovieIndex'
  );

  if (selectedMovieIndexFromLocalStorage !== null) {
    moviePickerEl.selectedIndex = selectedMovieIndexFromLocalStorage;
  }

  const selectedMoviePriceFromLocalStorage = localStorage.getItem(
    'selectedMoviePrice'
  );

  if (selectedMoviePriceFromLocalStorage !== null) {
    orderTotalEl.textContent =
      +selectedMoviePriceFromLocalStorage *
      selectedSeatsFromLocalStorage.length;
  }
}

const updateTicketPrice = (e) => {
  ticketPrice = +e.target.value;
  updateOrder();
};

const setMovieData = (e) => {
  localStorage.setItem('selectedMovieIndex', e.target.selectedIndex);
  localStorage.setItem('selectedMoviePrice', e.target.value);
};

// Event Listeners
theater.addEventListener('click', selectSeats);
moviePickerEl.addEventListener('change', updateTicketPrice);
moviePickerEl.addEventListener('change', setMovieData);
