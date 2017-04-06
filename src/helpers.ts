import * as Contracts from "./contracts";

export function ResolveSource(source: Contracts.EventSource): string {
    return Contracts.EventSource[source];
}

export function ParseSourceValue(value: string): Contracts.EventSource {
    let enumArray = Contracts.EventSource as any as { [key: string]: number };
    if (enumArray[value] != null) {
        return enumArray[value as any] as any as Contracts.EventSource;
    }

    throw new Error(`simplr-dropdown: Value "${value}" was not found in Source enum`);
}

export function CompareSource(value: number, stringValue: string) {
    return (Contracts.EventSource[value] === stringValue);
}
