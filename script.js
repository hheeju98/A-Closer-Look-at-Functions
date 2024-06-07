'use strict';
// const bookings = [];
// const createBooking = function (flightNum, numPassengers =1, price =199 * numPassengers) {
//     // numPassengers = numPassengers || 1; // undefined = falsy이기때문 (ES5방식)
//     // price = price || 199;

//     const booking = {
//         flightNum, numPassengers, price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123',undefined, 1000);


const flight = 'LH234';
const jonas = {
    name: "Jonas",
    passport: 233423
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999'; // 원시형 flight변수 변화x
    passenger.name = 'Mr.' + passenger.name; //참조형 jonas객체 변화 o
    if (passenger.passport === 233423) {
        alert('Checked in')
    }  else {
        alert('Wrong Passport!');
    }
}
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// flightNum = flight;

//Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(jonas);
checkIn(flight, jonas);
