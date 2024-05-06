var colorBox = document.getElementById("color-box");
var changeColorBtn = document.getElementById("change-color-btn");
document.addEventListener("DOMContentLoaded", function() {
   

    // Function to generate a random color
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listener for button click
    changeColorBtn.addEventListener("click", function() {
        colorBox.style.backgroundColor = getRandomColor();
    });
});