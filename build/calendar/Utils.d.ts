import { IBaseYear, IObject, IWeekData } from './IFTypes';
export declare const isNil: (value: any) => boolean;
export declare const animateLabelChange: (refs: Element, duration?: number) => void;
export declare const getMiMaxYear: (param: IBaseYear) => IObject;
export declare const getMonthName: (month: number, label?: string[]) => string;
export declare const padZero: (value: number) => string;
export declare const toMatrix: (arr: any[], width: number) => any[][];
export declare const getRealYearMonth: (year: number, month: number) => number[];
export declare const isOverCompareDate: (year: number, month: number, day: number, from: number, to: number) => boolean;
export declare const getMaxDayOfMonth: (year: number) => number[];
export declare const getPreNextOfMonth: (year: number, month: number) => IWeekData;
export declare const parseYearMonthDateToNumber: (year: number, month: number, day: number) => number;
export declare const parseYearMonthToNumber: (yearMonth: number[]) => number;
export declare const fmtMonthDay: (month: number, day: number) => string;
export declare const getDecadesFromYear: (year: number) => number[];
export declare const labelMonths: string[];
export declare const keyMonths: string[];
export declare const labelWeekDays: {
    name: string;
    shortName: string;
    dateClassName: string;
    keyName: string;
}[];
export declare const datesClassName: string[];
