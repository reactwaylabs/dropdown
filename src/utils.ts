export function UniqueArray(arr: any[]): any[] {
    const uniqueArr: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }

    return uniqueArr;
}

export function CheckComponentType(component: JSX.Element, type: string): boolean {
    const componentType = component.type as any;
    return (componentType[type] != null);
}

export const CanIUseWindowListeners = (typeof window !== "undefined" &&
    window.addEventListener != null);
