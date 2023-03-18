var elements = document.getElementsByClassName('ContributionCalendar-day');

for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = ChangeColor();
}

function ChangeColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 8; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
