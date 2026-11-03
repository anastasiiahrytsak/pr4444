function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomArray(size) {
    const arr = new Array(size);
    for (let i = 0; i < size; i++) {
        arr[i] = getRandomInt(-10000, 10000);
    }
    return arr;
}

function find6thBySorting(arr) {
    const copy = [...arr];
    copy.sort((a, b) => b - a); 
    return copy[5]; 
}

function find6thByTop6Array(arr) {
    const top6 = [];

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        
        if (top6.length < 6) {
            top6.push(val);
            top6.sort((a, b) => b - a);
        } else if (val > top6[5]) {
            top6[5] = val;
            top6.sort((a, b) => b - a);
        }
    }

    return top6[5];
}

function find6thByRepeatedMax(arr) {
    const copy = [...arr];
    let maxVal = 0;

    for (let k = 0; k < 6; k++) {
        let maxIndex = 0;
        for (let i = 1; i < copy.length; i++) {
            if (copy[i] > copy[maxIndex]) {
                maxIndex = i;
            }
        }
        maxVal = copy[maxIndex];
        copy[maxIndex] = -Infinity; 
    }

    return maxVal;
}

function measureTime(fn, arr) {
    const start = performance.now();
    fn(arr);
    const end = performance.now();
    return Math.round(end - start); 
}

function runBenchmark() {
    const sizes = [10000, 100000, 1000000, 10000000, 100000000];
    const results = [];

    console.log("Запуск тестування алгоритмів...\n");

    sizes.forEach(size => {
        console.log(`Генерація масиву розміром ${size}...`);
        const arr = generateRandomArray(size);

        const times1 = [measureTime(find6thBySorting, arr), measureTime(find6thBySorting, arr), measureTime(find6thBySorting, arr)];
        const times2 = [measureTime(find6thByTop6Array, arr), measureTime(find6thByTop6Array, arr), measureTime(find6thByTop6Array, arr)];
        const times3 = [measureTime(find6thByRepeatedMax, arr), measureTime(find6thByRepeatedMax, arr), measureTime(find6thByRepeatedMax, arr)];

        results.push({
            size: size,
            method1: `${times1.reduce((a,b)=>a+b,0)/3 | 0} (${times1.join(' ')})`,
            method2: `${times2.reduce((a,b)=>a+b,0)/3 | 0} (${times2.join(' ')})`,
            method3: `${times3.reduce((a,b)=>a+b,0)/3 | 0} (${times3.join(' ')})`
        });
    });

    console.log("\nРезультати вимірювання швидкодії (у мс):\n");
    console.table(results);
}

runBenchmark();
