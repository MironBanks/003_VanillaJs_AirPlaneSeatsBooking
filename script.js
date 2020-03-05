const container = document.querySelector('.airplane')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const firstClass = document.querySelector('.col-first')
const businessClass = document.querySelector('.col-business')
const economyClass = document.querySelector('.col-economy')
const count = document.getElementById('count')
const total = document.getElementById('total')
const classSelect = document.getElementById('flight-class')
const flightClass = document.getElementById('flightClassBox')
const infoUncheck = document.querySelector('.info-uncheck')

let ticketPrice = +classSelect.value




function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length

    if (selectedSeatsCount > '0') {
        flightClass.classList.add('col-2')
        infoUncheck.classList.remove('col-2')
    } else {
        flightClass.classList.remove('col-2')
        infoUncheck.classList.add('col-2')
    }

    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount * ticketPrice

}
//Flight class select event
classSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value
    updateSelectedCount()

    if (+e.target.value == '1250') {
        firstClass.classList.remove('col')
        businessClass.classList.add('col')
        economyClass.classList.add('col')

    } else if (+e.target.value == '720') {
        firstClass.classList.add('col')
        businessClass.classList.remove('col')
        economyClass.classList.add('col')

    } else {
        firstClass.classList.add('col')
        businessClass.classList.add('col')
        economyClass.classList.remove('col')

    }
})


//Seat click event
container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat')
        && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')

        updateSelectedCount()
    }
})