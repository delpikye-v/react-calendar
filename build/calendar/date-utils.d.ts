import type { IBaseYear, IObject } from "./types";
export declare const isNil: (value: any) => boolean;
export declare const isToday: (year: number, month: number, date: number) => boolean;
export declare const getMinMaxYear: (param: IBaseYear) => IObject;
export declare const getMonthName: (month: number, label?: string[]) => string;
export declare const padZero: (value: number) => string;
export declare const toMatrix: (arr: any[], width: number) => any[][];
export declare const getRealYearMonth: (year: number, month: number) => number[];
export declare const isOverCompareDate: (y: number, m: number, d: number, from?: number, to?: number) => boolean;
export declare const getMaxDayOfMonth: (year: number) => number[];
export declare const parseYearMonthDateToNumber: (year: number, month: number, day: number) => number;
export declare const parseYearMonthToNumber: (yearMonth: number[]) => number;
export declare const fmtMonthDay: (month: number, day: number) => string;
export declare const getDecadesFromYear: (year: number) => [number, number];
export declare const labelMonths: string[];
export declare const keyMonths: string[];
/**
 * Check if a value is within allowed range.
 */
export declare const isInRange: (val: number, min: number, max: number) => boolean;
export declare const toDateNumber: (date?: Date) => number | undefined;
