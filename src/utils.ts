export function UniqueArray(arr: any[]): any[] {
    const uniqueArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

export const CanIUseWindowListeners = (typeof window !== "undefined" &&
    window.addEventListener != null);
