const button = document.getElementById("calc");

button.addEventListener("click", calculateNewDateTime)


function calculateNewDateTime() {
    console.log("hi")

    const dateInput = document.getElementById('date').value;
    const hoursInput = document.getElementById('hours').value;

    if (!dateInput || isNaN(hoursInput) || hoursInput < 0) {
        document.getElementById('result').innerText = 'Пожалуйста, введите корректные данные.';
        return;
    }


    const [datePart, timePart] = dateInput.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute] = timePart.split(':').map(Number);
    
    const dateTime = new Date(year, month - 1, day, hour, minute);

    dateTime.setHours(dateTime.getHours() + parseInt(hoursInput));


    const newYear = dateTime.getFullYear();
    const newMonth = String(dateTime.getMonth() + 1).padStart(2, '0');
    const newDay = String(dateTime.getDate()).padStart(2, '0');
    const newHour = String(dateTime.getHours()).padStart(2, '0');
    const newMinute = String(dateTime.getMinutes()).padStart(2, '0');
    const newSecond = String(dateTime.getSeconds()).padStart(2, '0');

    const newDateTime = `${newYear}-${newMonth}-${newDay}T${newHour}:${newMinute}:${newSecond}`;

    document.getElementById('result').innerText = `Новая дата и время: ${newDateTime}`;
}
