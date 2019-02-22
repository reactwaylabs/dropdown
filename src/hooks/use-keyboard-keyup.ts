import { useEffect } from "react";
import { CAN_I_USE_WINDOW_LISTENERS } from "../helpers";

export function useKeyboardKeyUp(callback: (event: KeyboardEvent) => void): void {
    useEffect(() => {
        if (!CAN_I_USE_WINDOW_LISTENERS) {
            return;
        }
        window.addEventListener("keyup", callback);

        return () => {
            window.removeEventListener("keyup", callback);
        };
    }, [callback]);
}
