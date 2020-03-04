const container = document.querySelector('.airplane')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.getElementById('count')
const total = document.getElementById('total')
const classSelect = document.getElementById('flight-class')

const ticketPrice = +classSelect.value


function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice
}


//Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    }
})