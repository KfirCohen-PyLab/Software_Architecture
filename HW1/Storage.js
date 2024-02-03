// script.js
let reservedSlots = [];

function updateAvailableSlots() {
    var selectedLot = document.getElementById('parkingLot').value;
    

    var availableSlots = getAvailableSlots(selectedLot);

    

    availableSlots.forEach((slot, index) => {
        var bar = document.createElement('div');
        bar.style.height = slot + 'px';
        bar.title = `Slot ${index + 1}: ${slot} available`;
       
    });

}

function getAvailableSlots(lot) {
    switch (lot) {
        case 'lotA':
            return [20, 18, 15, 13, 10];
        case 'lotB':
            return [15, 14, 12, 10, 8];
        case 'lotC':
            return [30, 28, 25, 23, 20];
        default:
            return [];
    }
}

function reserveParking(event) {
    event.preventDefault();
    var studentName = document.getElementById('studentName').value;
    var selectedLot = document.getElementById('parkingLot').value;
    var reservationTime = document.getElementById('reservationTime').value;

    // Check if the slot is available
    var availableSlots = getAvailableSlots(selectedLot);
    if (availableSlots.length > 0) {
        // Reserve the first available slot
        var reservedSlot = availableSlots[0];

        // Add the reservation to the list
        reservedSlots.push({
            studentName: studentName,
            lot: selectedLot,
            time: reservationTime,
            slot: reservedSlot
        });


        // Update the reservations table
        updateReservationTable();

        alert(`Parking reserved successfully! You have Slot ${reservedSlot} in Lot ${selectedLot}.`);
    } else {
        alert('No available slots in the selected parking lot. Please choose another lot or time.');
    }
}

function removeReservation() {
    var reservationTime = document.getElementById('reservationTime').value;

    // Find the reservation with the specified time
    var indexToRemove = reservedSlots.findIndex(reservation => reservation.time === reservationTime);

    if (indexToRemove !== -1) {
        // Remove the reservation from the list
        reservedSlots.splice(indexToRemove, 1);



        // Update the reservations table
        updateReservationTable();

        alert('Reservation removed successfully!');
    } else {
        alert('No reservation found for the specified time.');
    }
}

function updateReservationTable() {
    var tableBody = document.querySelector('#reservationTable tbody');
    tableBody.innerHTML = "";

    reservedSlots.forEach(reservation => {
        var row = tableBody.insertRow();
        row.insertCell(0).textContent = reservation.studentName;
        row.insertCell(1).textContent = reservation.lot;
        row.insertCell(2).textContent = reservation.time;
        row.insertCell(3).textContent = reservation.slot;
    });
}
