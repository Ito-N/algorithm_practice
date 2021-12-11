const n = 100
// n個の要素を持つ配列を作成した（要素は全て空）後、それらの要素をfill()で全てfalseにする
// map()は空の要素は飛ばしてしまうのでfill()を使ってる
let cards = Array(n).fill(false);

for(let i = 2; i < n + 1; i++) {
    let j = i - 1;
    while (j < cards.length) {
        cards[j] = !cards[j];
        j += i;
    }
}

let result = [];
cards.forEach((v, i) => {
    if (v === false) {
        result.push(i+1);
    }
})
console.log(result);