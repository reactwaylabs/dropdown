import { useEffect } from "react";
import { CAN_I_USE_WINDOW_LISTENERS } from "../helpers";

export function useWindowClick(callback: (event: MouseEvent) => void): void {
    useEffect(() => {
        if (!CAN_I_USE_WINDOW_LISTENERS) {
            return;
        }

        const windowClick = (event: MouseEvent) => {
            callback(event);
        };

        window.addEventListener("click", windowClick);

        return () => {
            window.removeEventListener("click", windowClick);
        };
    }, [callback]);
}
