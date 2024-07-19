export declare function searchList(dataList: any[], searchText: string, options?: {
    searchKeys?: string[];
    searchParams?: object;
}): any[];
export declare function isNullEmpty(val: any): boolean;
export declare function downloadBlob(data: Blob, type: string, fileName: string): void;
export declare function downloadExcel(records: any[], fileName?: string): void;
export declare function isMathExpression(str: string): any;
export declare function parseJson(json: string): any;
