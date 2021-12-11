let count = 0;
for (let c500 = 0; c500 <= 2; c500++) {
    for (let c100 = 0; c100 <= 10; c100++) {
        for (let c50 = 0; c50 <= 15; c50++) {
            for ( let c10 = 0; c10 <= 15; c10++) {
                if (c500 + c100 + c50 + c10 <= 15) {
                    if (c500 * 500 + c100 * 100 + c50 * 50 + c10 * 10 === 1000) {
                        count++;
                    }
                }
            }
        }
    }
}

console.log(count);