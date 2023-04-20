let addUpToSecond = (n = 100) => {
    return n * (n + 1) / 2;
}

console.time('timer');
console.log(addUpToSecond(100));
console.timeEnd('timer');