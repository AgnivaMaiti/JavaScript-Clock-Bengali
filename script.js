function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var msec = dateTime.getMilliseconds();
    var session = document.getElementById('session');
    var hoursSpan = document.getElementById('hours');
    var minutesSpan = document.getElementById('minutes');
    var secondsSpan = document.getElementById('seconds');
    var millisecondsSpan = document.getElementById('milliseconds');

    if (hrs >= 12) {
        session.innerHTML = 'অপরাহ্ণ'; 
    } else {
        session.innerHTML = 'পূর্বাহ্ণ'; 
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }

    hoursSpan.innerHTML = convertToBengaliNumeral(hrs);
    minutesSpan.innerHTML = convertToBengaliNumeral(min);
    secondsSpan.innerHTML = convertToBengaliNumeral(sec);
    millisecondsSpan.innerHTML = convertToBengaliNumeral(msec % 10);
}

function convertToBengaliNumeral(number) {
    var bengaliNumerals = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    var result = "";

    if (number < 10) {
        result = bengaliNumerals[number];
    } else {
        var digits = number.toString().split("");
        digits.forEach(function (digit) {
            result += bengaliNumerals[parseInt(digit)];
        });
    }

    return result;
}

setInterval(displayTime, 10);
