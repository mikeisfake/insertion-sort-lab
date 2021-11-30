function findMinAndRemove(array){
    min = array[0]
    mindex = 0;

    for(let i =0; i < array.length; i++) {
        if(array[i] < min) {
            min = array[i]
            mindex = i
        }
    }

    array.splice(mindex, 1)
    return min
}

function selectionSort(array){
    let sorted = []
    let newMin;

    while (array.length != 0) {
        newMin = findMinAndRemove(array)
        sorted.push(newMin)
    }
    console.log(sorted)
    return sorted
}
let testArr = [1,5,8,7,6,5,4,2,6,32,84,684,2,64,65,84,-4,154,0,6,8,54,2,4]

selectionSort(testArr)


