export function UniqueArray(arr: Array<any>) {
    let uniqueArr = Array<any>();
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

export function CheckComponentType(component: JSX.Element, type: string) {
    let componentType = component.type as any;
    return (componentType[type] != null);
}
