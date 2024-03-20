function linear(form) {
    var a = parseFloat(form.linear_a.value);
    var b = parseFloat(form.linear_b.value);
    var c = parseFloat(form.linear_c.value);
    
    var ans = (c + (b * -1)) / a;

    const htmlAns = document.getElementById("linear_ans");
    htmlAns.innerHTML = ("Answer: x = " + ans.toString());
}

function quadratic(form) {
    var a = parseFloat(form.quadratic_a.value);
    var b = parseFloat(form.quadratic_b.value);
    var c = parseFloat(form.quadratic_c.value);

    let discriminant = b * b - 4 * a * c;
    let x1, x2;

    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    } else if (discriminant == 0) {
        x1 = x2 = -b / (2 * a);
    } else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

        x1 = `${realPart} + ${imagPart}i`;
        x2 = `${realPart} - ${imagPart}i`;
    }

    x1Element = document.getElementById('x1');
    x2Element = document.getElementById('x2');

    x1Element.innerHTML = `x₁ = ${x1}`; x2Element.innerHTML = `x₂ = ${x2}`;
}