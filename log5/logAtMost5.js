let logFunc = (n) => {
    for (let i = 1; i < Math.min(5, n); i++) {
        console.log(i);
    }
}

//  since this scales proportionally to the size of n but only at the max of 5. this would be considered O(1) due to it being linear until the max is reached and stays constant throughout the loop.