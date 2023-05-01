for(let key in statistics) {
    if(key.charAt(0) === 'r') {
        console.log('${statistics[key]}');
    }
    else if(typeof myObject[key] === "number" && statistics[key] % 2 !== 0) {
        console.log('${statistics[key]}');
    }
}