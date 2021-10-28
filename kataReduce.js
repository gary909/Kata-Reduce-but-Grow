function grow(x){
    var sum = 1; // Set to 1, otherwise you you'll always get zero
    for (var i = 0; i < x.length; i++){
        sum = sum * x[i];
    }
    return sum;
}

console.log(grow([1, 2, 3])); // 6
console.log(grow([4, 1, 1, 1, 4])); // 16
console.log(grow([2, 2, 2, 2, 2, 2])); // 64