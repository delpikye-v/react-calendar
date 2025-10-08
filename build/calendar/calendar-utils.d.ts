import type { GridMoveOptions, GridPosition, TModeView } from "./types";
import type { IWeekData, IBookmarkDate, IObject, TWeekStart } from "./types";
export declare const labelWeekDays: {
    name: string;
    shortName: string;
    dateClassName: string;
    keyName: string;
    number: number;
}[];
export declare const datesClassName: string[];
export declare const startWeekDays: {
    sunday: number[];
    monday: number[];
    friday: number[];
    saturday: number[];
};
export declare const buildWeekLabels: (year: number, month: number, selectedFocusDate: Date, notBeforeTime: Date | undefined, notAfterTime: Date | undefined, weekStart: TWeekStart, showOnlyCurrentMonthDays: boolean, setDayOfWeeks: (value: React.SetStateAction<IWeekData[][]>) => void, setTempMonthYear: (value: React.SetStateAction<number[]>) => void, bookmarkDates: IBookmarkDate[], isChange: boolean) => [number, number];
export declare const getNavButtonStatus: (isModeYear: boolean, isModeDate: boolean, currentYearMonth: [number, number], currentDecade: [number, number], calendarParams: IObject) => {
    disabledBack: boolean;
    disabledNext: boolean;
};
export declare const moveCalendar: (direction: 1 | -1, mode: TModeView, tempMonthYear: [number, number], options: {
    showMonthYearSelection?: boolean;
    disabledBack?: boolean;
    disabledNext?: boolean;
}, setDecadeData: (v: number[]) => void, setTempMonthYear: (v: [number, number]) => void, handleChangeMonthYear: (y: number, m: number) => void) => void;
export declare function moveInGrid(key: string, { row, col }: GridPosition, { maxRow, maxCol }: GridMoveOptions): GridPosition;
export declare const switchMode: (currentMode: TModeView, tempMonthYear: number[], setDecadeData: (v: number[]) => void) => TModeView;
export declare const getPreNextOfMonth: (year: number, month: number) => IWeekData;
export declare const adjustStartDay: (day: number, start: TWeekStart) => number;
export declare const isSelectedDateValue: (y: number, m: number, d: number, selected: Date) => boolean;
