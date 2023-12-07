var form = document
let b = 31313131;

function m(a, b) {
    a = Array.from(String(a), Number);
    b = Array.from(String(b), Number);
    let ans = [];
    for (let i = 0; i < a.length; i++) {
        let product = a[i] * b[i];
        if (product > 9) {
            ans.push(Number(String(product)[String(product).length - 1]));
        } else {
            ans.push(product);
        }
    }
    return ans;
}

function sumOfDigit(a) {
    let newAns = 0;
    for (let i of String(a)) {
        newAns += Number(i);
    }
    return newAns;
}
function regementNumberIs(form) {


    let reg = parseInt(form.id.value)

    let j = parseInt(m(reg, 31313131).join(""));
    let r = sumOfDigit(j);

    if (r > 9) {
        r = Math.abs(Number(String(r)[String(r).length - 1]) - 10);
    }

    var x = String("Your Regement Number is: ") + String(reg) + String(r);

    var output = document.getElementById('output');


    output.innerHTML = x;

}



