let logFunc = (n) => {
    for (let i = 1; i < Math.max(5, n); i++) {
        console.log(i);
    }
}

//  since this scales proportionally to the size of n infinitely. this would be considered O(n) due to it being constant until the number 5 is reached and grows linear throughout the loop.