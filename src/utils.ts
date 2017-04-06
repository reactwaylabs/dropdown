export function UniqueArray(arr: Array<any>) {
    let uniqueArr = Array<any>();
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}
