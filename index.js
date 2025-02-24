`This code calculates the Body/Mass index (BMI) by having you input your weight and height
and lets you know your BMI status`


$("input[name='units']").on("change", function () {
    if ($("#metric-unit").is(":checked")) {
        $(".feet, .inches").hide();

        $(".height").show();
        $(".weight").attr("placeholder", "Enter your weight in Kilograms");



    } else if ($("#imperial-unit").is(":checked")) {
        $(".feet, .inches").show();
        $(".height").hide();

        $(".weight").attr("placeholder", "Enter your weight in pounds");

    }
});

$(".conversion").on("click", function () {

    if ($("#metric-unit").is(":checked")) {
        bmiCalculator();
    } else if ($("#imperial-unit").is(":checked")) {
        bmiCalculatorImperial();
    }

});




function bmiCalculator() {
    var weight = $(".weight").val();
    var height = $(".height").val();


    if (isNaN(weight) || weight <= 0 || isNaN(height) || height <= 0) {
        $(".weight-status").html("You have entered the wrong values, check and try again!!");
        return;
    }

    var bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        $(".weight-status").html(`Your BMI is:  <strong> ${bmi}</strong>. You are underweight!`)
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        $(".weight-status").html("Your BMI = " + bmi + "." + "Your weight is normal!")
    }
    if (bmi >= 25) {
        $(".weight-status").html(`Your BMI is:   <strong> ${bmi}</strong>. You are overweight!`)
    }
}

function bmiCalculatorImperial() {
    var weight = $(".weight").val();
    var feetHeight = parseInt($(".feet").val(), 10);

    var inchesHeight = parseInt($(".inches").val(), 10);


    var totalHeight = (feetHeight * 12) + inchesHeight;

    if (isNaN(weight) || isNaN(feetHeight) || isNaN(inchesHeight) || weight <= 0 || feetHeight <= 0) {
        $(".weight-status").html("You have entered the wrong values, check and try again!!");
        return;
    }

    var bmiImperial = Math.round((weight * 703) / (totalHeight * totalHeight))

    if (bmiImperial < 18.5) {
        $(".weight-status").html(`Your BMI is: <strong> ${bmiImperial}</strong>. You are underweight!`)
    }
    if (bmiImperial >= 18.5 && bmiImperial < 24.9) {
        $(".weight-status").html(`Your BMI is:   <strong> ${bmiImperial}</strong>. You weight is normal!`);
    }
    if (bmiImperial >= 25) {
        $(".weight-status").html(`Your BMI is:   <strong> ${bmiImperial}</strong>. You are overweight!`)
    }
}




// var weight = prompt("Enter your weight:");
// var height = prompt("Enter your height:");
// bmiCalculator(weight, height);
