function sumOfProducts(n1, n2) {
    let num1 = String(n1).split("").map(Number);
    let num2 = String(n2).split("").map(Number);

    let sum = 0;
    for (let i = 0; i < num1.length; i++) {
        sum = sum + (num1[i] * num2[i]);
    }

    console.log("n1: " + n1 + ", n2: " + n2 + " | Result: " + sum);
    return sum;
}

sumOfProducts(6, 34);   // (6*3) + (0*4) = 24 -- wait n1=6 is 1 digit
// As per question: n1=6, n2=34 => (6*4)+(0*3) = 24
// Correcting: pad n1 to match n2 length
function sumOfProductsFixed(n1, n2) {
    let s1 = String(n1);
    let s2 = String(n2);

    // pad shorter number with leading zeros
    while (s1.length < s2.length) s1 = "0" + s1;
    while (s2.length < s1.length) s2 = "0" + s2;

    let sum = 0;
    for (let i = 0; i < s1.length; i++) {
        sum = sum + (Number(s1[i]) * Number(s2[i]));
    }

    console.log("n1: " + n1 + ", n2: " + n2 + " | Result: " + sum);
    return sum;
}

sumOfProductsFixed(6, 34);    // (0*3) + (6*4) = 24
sumOfProductsFixed(12, 34);   // (1*3) + (2*4) = 11
