document.addEventListener('DOMContentLoaded', function () {
    const setAlarmBtn = document.getElementById('setAlarmBtn');
    const alarmStatus = document.getElementById('alarmStatus');
    const currentTime = document.querySelector('#current-time');

    setInterval(function () {
        let date = new Date();
        // console.log(date.toLocaleTimeString());
        currentTime.innerHTML = date.toLocaleTimeString();
    }, 1000);
    let alarmTime = null;
    let alarmTimeout = null;

    setAlarmBtn.addEventListener('click', function () {
        const hours = parseInt(document.getElementById('hours').value, 10);
        const minutes = parseInt(document.getElementById('minutes').value, 10);
        const seconds = parseInt(document.getElementById('seconds').value, 10);

        if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            alert('Please enter valid time values.');
            return;
        }

        const now = new Date();
        const alarm = new Date();

        alarm.setHours(hours);
        alarm.setMinutes(minutes);
        alarm.setSeconds(seconds);

        if (alarm <= now) {
            alarm.setDate(alarm.getDate() + 1); // Set the alarm for the next day if the time has already passed for today
        }

        const timeToAlarm = alarm - now;

        alarmStatus.textContent = `Alarm set for ${alarm.toLocaleTimeString()}`;

        if (alarmTimeout) {
            clearTimeout(alarmTimeout); // Clear the previous timeout if there is one
        }

        alarmTimeout = setTimeout(function () {
            alarmStatus.textContent = 'Wake up!';
            alert('Wake up!');
        }, timeToAlarm);
    });
});
