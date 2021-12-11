// 再帰関数
function calculateCollatz(n, firstNum) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }

    if (n === firstNum) {
        return n;
    } else if (n === 1) {
        return false;
    } else {
        // return 関数をしないと返り値がundefinedになる
        return calculateCollatz(n, firstNum);
    }
}

let count = 0;
let numArr = [];
for (let i = 2; i < 10001; i += 2) {
    let n = i * 3 + 1;
    if (calculateCollatz(n, i)) {
        count ++;
        numArr.push(i);
    }
}

console.log(count);
console.log(numArr);
