export const CAN_I_USE_WINDOW_LISTENERS = typeof window !== "undefined" && window.addEventListener != null;

export const ESCAPE_KEYCODE: number = 27;

export function isElementInContainer(container: HTMLElement | undefined, element: Element): boolean {
    if (container == null) {
        return false;
    }
    const containerElement: HTMLElement = container;

    return containerElement.contains(element);
}
