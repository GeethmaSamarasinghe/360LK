document.getElementById("plan").addEventListener("change", function () {
    let value = this.value;

    // Hide all first
    document.getElementById("PremiumForm").style.display = "none";
    document.getElementById("EducationForm").style.display = "none";
    

    // Show only the selected one
    if (value === "Premium") {
        document.getElementById("PremiumForm").style.display = "block";
    } else if (value === "Educational") {
        document.getElementById("EducationForm").style.display = "block";
    } 
});


document.getElementById("category").addEventListener("change", function () {
    let value = this.value;

    // Hide all first
    document.getElementById("most-popularForm").style.display = "none";
    document.getElementById("historicalForm").style.display = "none";
    document.getElementById("mountain-and-natureForm").style.display = "none";
    document.getElementById("beach-sideForm").style.display = "none";
    document.getElementById("customizedForm").style.display = "none";


    // Show only the selected one
    if (value === "most popular package") {
        document.getElementById("most-popularForm").style.display = "block";
    } else if (value === "historical package") {
        document.getElementById("historicalForm").style.display = "block";
    } else if (value === "mountain and nature") {
        document.getElementById("mountain-and-natureForm").style.display = "block";
    }else if (value === "beach side package") {
        document.getElementById("beach-sideForm").style.display = "block";
    }else if (value === "customized package") {
        document.getElementById("customizedForm").style.display = "block";
    }else if (value === "flight") {
        document.getElementById("flightForm").style.display = "block";
    }else if (value === "flight") {
        document.getElementById("flightForm").style.display = "block";
    }
});
