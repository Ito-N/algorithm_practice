
function count(m, n) {
    let count = 0;
    let currentBar = 1;
    while (n > currentBar) {
        currentBar += m >= currentBar ? currentBar : m;
        count++
    }
    console.log(count);
}

count(3, 20);
count(5, 100);