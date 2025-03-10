# Bengali Digital Clock

This project is a simple **digital clock** built with **HTML, CSS, and JavaScript** that displays the current time using **Bengali numerals** and formats the session as "পূর্বাহ্ণ" (AM) or "অপরাহ্ণ" (PM).

## Features
- Displays hours, minutes, seconds, and milliseconds in **Bengali numerals**.
- Uses a **12-hour format** with correct Bengali AM/PM labels.
- Updates every **10 milliseconds** to ensure smooth timekeeping.
- Simple and lightweight, using **pure JavaScript** (no libraries required).

## Installation & Usage
1. **Download or Clone** this repository.
2. Open the `index.html` file in any web browser.
3. The clock will start running automatically.

## Files Structure
- **index.html** → The main HTML file containing the clock UI.
- **style.css** → Stylesheet for designing the clock.
- **script.js** → JavaScript file handling the real-time clock update.

## JavaScript Logic
- The `displayTime()` function fetches the current time and converts it into Bengali numerals.
- The `convertToBengaliNumeral(number)` function maps standard Arabic numerals (0-9) to their Bengali counterparts (০-৯).
- The `setInterval(displayTime, 10)` ensures that the time updates dynamically every 10 milliseconds.

## Preview
Simply open the `index.html` file in a browser to see the **Bengali Digital Clock** in action!

## Author
Developed by **Agniva Maiti**

## License
This project is open-source and free to use under the MIT License.

