import { useEffect } from "react";
import { CAN_I_USE_WINDOW_LISTENERS } from "../helpers";

export function useWindowClick(callback: (event: MouseEvent) => void): void {
    useEffect(() => {
        if (!CAN_I_USE_WINDOW_LISTENERS) {
            return;
        }
        window.addEventListener("click", callback);

        return () => {
            window.removeEventListener("click", callback);
        };
    }, [callback]);
}
