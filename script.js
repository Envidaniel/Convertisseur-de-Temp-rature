$(document).ready(function () {
    // 1. Fonction JS : Convertir la t
    function convertTemperature(value, unit) {
        let result;
        if (unit === "fahrenheit") {
            result = (value * 9/5) + 32; // Conversion en °F
        } else if (unit === "kelvin") {
            result = value + 273.15; // Conversion en K
        }
        return result.toFixed(2); 
    }

    // 2. Fonction JS : Afficher le resultat
    function displayResult(result, unit) {
        const unitLabel = unit === "fahrenheit" ? "°F" : "K";
        $("#output").text(`La température convertie est : ${result} ${unitLabel}`);
        showResultSection(); // Appel d'une fonction jQuery
    }

    // 3. Fonction JS : Réinitialiser les champs
    function resetFields() {
        $("#temperature").val("");
        $("#conversion").val("fahrenheit");
        hideResultSection(); // Appel d'une fonction jQuery
    }

    // 1. Fonction jQuery : Afficher la section résultat
    function showResultSection() {
        $("#result").removeClass("hidden").hide().fadeIn(500);
    }

    // 2. Fonction jQuery : Masquer la section résultat
    function hideResultSection() {
        $("#result").fadeOut(500, function () {
            $(this).addClass("hidden");
        });
    }

    // 3. Fonction jQuery :
    function validateInput(input) {
        if (isNaN(input) || input === "") {
            $("#temperature").addClass("error");
            alert("Veuillez entrer une température valide !");
            return false;
        }
        $("#temperature").removeClass("error");
        return true;
    }

    
    $("#convert-btn").click(function () {
        const tempValue = parseFloat($("#temperature").val());
        const targetUnit = $("#conversion").val();

        if (validateInput(tempValue)) { 
            const convertedTemp = convertTemperature(tempValue, targetUnit);
            displayResult(convertedTemp, targetUnit); 
        }
    });

    
    $("#reset-btn").click(function () {
        resetFields();
    });
});
