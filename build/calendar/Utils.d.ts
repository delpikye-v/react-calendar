import { IWeekData } from "./Types";
export declare function getRealYearMonth(year: number, month: number): number[];
export declare function getMaxDayOfMonth(year: number): number[];
export declare function getPreNextOfMonth(year: number, month: number): IWeekData;
export declare function fmtYearToNum(year: number, month: number, day: number): number;
export declare function getDecadesFromYear(year: number): number[];
export declare const labelMonths: string[];
export declare const labelWeekDays: {
    name: string;
    shortName: string;
}[];
