import React from "react";
export type TWeekStart = "monday" | "sunday" | "saturday" | "friday";
export type TModeView = "date" | "month" | "year";
export interface IBaseYear {
    minYear?: number;
    maxYear?: number;
    notBeforeTime?: Date;
    notAfterTime?: Date;
    minimumDayCanExceedToday?: boolean;
}
export interface IDayBaseProps {
    readOnly?: boolean;
    neighborMonthClassName?: string;
    showToday?: boolean;
    todayClassName?: string;
    selectedClassName?: string;
    focusable?: boolean;
    formatDayValue?: (day: number) => string | React.ReactNode;
}
export interface IWeekLabel {
    name?: string;
    shortName?: string;
    key?: number;
    dateClassName?: string;
}
export interface IWeekData {
    year: number;
    month: number;
    maxDayOfMonth: number;
    dayDisplay?: number;
    otherMonth?: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    isOverRange?: boolean;
    isBookmark?: boolean;
    bookmarkClassName?: string;
}
export interface IBookmarkDate {
    date: Date;
    className?: string;
}
export interface IDatePickerProps extends IDayBaseProps, IBaseYear {
    className?: string;
    labelMonthYearClassName?: string;
    weekClassName?: string;
    width?: string | number;
    height?: string | number;
    labelNext?: string | React.ReactNode;
    labelBack?: string | React.ReactNode;
    weekStart?: TWeekStart;
    showOnlyCurrentMonthDays?: boolean;
    showAnchor?: boolean;
    value?: Date;
    i18nLabelWeek?: IWeekLabel[] | string[];
    i18nLabelMonth?: string[];
    bookmarkDates?: IBookmarkDate[];
    showMonthYearSelection?: boolean;
    showNextBack?: boolean;
    rightNextBack?: boolean;
    maxHeightSelectMonth?: number | string;
    maxHeightSelectYear?: number | string;
    showFooter?: boolean;
    showXClose?: boolean;
    xCloseIcon?: string | React.ReactNode;
    enableKeyboardModeSwitch?: boolean;
    onKeyModeChange?: (nextMode: TModeView, event: KeyboardEvent) => void;
    onSelectedValue?: (value: Date) => void;
    onChangeView?: (mode: TModeView) => void;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => void;
    formatTitleYearMonth?: (year: number, month: number, decadeData?: number[]) => string | React.ReactNode;
    formatSelectedDate?: (date: Date) => string | React.ReactNode;
}
export interface ICalendarNavProps {
    children: React.ReactNode;
    className?: string;
    disabled?: boolean;
    isVisible?: boolean;
    directionIndex: number;
    handleNextBack: (valueChange: number) => void;
}
export interface IObject {
    [name: string]: any;
}
export interface ICalendarRefProps {
    resetSelectedDate: () => void;
    setValue: (date: Date) => void;
    getSelectedDate: () => Date;
    changeMode: (mode: TModeView) => void;
    nextMonth: () => void;
    prevMonth: () => void;
    nextYear: () => void;
    prevYear: () => void;
    nextDecade: () => void;
    prevDecade: () => void;
    selectDate: (date: Date) => void;
    selectMonth: (month: number) => void;
    selectYear: (year: number) => void;
    focusToday: () => void;
}
export interface GridPosition {
    row: number;
    col: number;
    realRow?: number;
    realCol?: number;
}
export interface GridMoveOptions {
    maxRow: number;
    maxCol: number;
}
