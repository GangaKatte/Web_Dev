function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    let timeString = `${hours}:${minutes}:${seconds}`;
    
    let dateString = now.toDateString();

    document.getElementById("time").innerText = timeString;
    document.getElementById("date").innerText = dateString;
}

function changeTheme(theme) {
    document.body.className = ""; // Reset all classes
    if (theme === 'dark') {
        document.body.classList.add("dark-theme");
    } else if (theme === 'blue') {
        document.body.classList.add("blue-theme");
    }
}

function setCustomColor() {
    let color = document.getElementById("colorPicker").value;
    document.body.style.background = color;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock immediately
updateClock();
