let addUpToSecond = (n = 100) => {
    let int = 0;

    for (let i = 1; i <= n; i++) {
        int += i;
    }

    return int;
}


console.time('timer');
console.log(addUpToSecond(100));
console.timeEnd('timer');