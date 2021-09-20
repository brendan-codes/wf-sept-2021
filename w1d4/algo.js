
function reverse(arr){
    var start = 0;
    var end = arr.length-1;

    while(start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start += 1;
        end -= 1;
    }

    return arr;
}

console.log(reverse([456, 78, 7, 65, 43]));

