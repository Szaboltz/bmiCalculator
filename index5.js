function bmiCalculator(w, h) {
    var bmi = w / (Math.pow(h, 2));

    return Math.round(bmi);
};

var bmi = bmiCalculator(65, 1.8)

console.log(bmi)