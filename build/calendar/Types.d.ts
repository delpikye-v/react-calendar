import React from "react";
export declare type TModeView = "date" | "month" | "year";
export interface IWeekData {
    year: number;
    month: number;
    maxDayOfMonth: number;
    dayDisplay?: number;
    otherMonth?: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    isOverRange?: boolean;
    fitMonthDay?: boolean;
}
export interface IWeekLabel {
    name: string;
    shortName: string;
    key?: number;
}
export interface IDatePickerProps {
    className?: string;
    todayClassName?: string;
    selectedClassName?: string;
    neighborMonthClassName?: string;
    labelMonthYearClassName?: string;
    weekClassName?: string;
    width?: string | number;
    height?: string | number;
    labelNext?: string | React.ReactNode;
    labelBack?: string | React.ReactNode;
    weekStart?: "monday" | "sunday";
    fitMonthDay?: boolean;
    notBeforeTime?: Date;
    notAfterTime?: Date;
    readOnly?: boolean;
    show?: boolean;
    showAnchor?: boolean;
    value?: Date;
    showToday?: boolean;
    i18nLabelWeek?: IWeekLabel[];
    i18nLabelMonth?: string[];
    onSelectedValue?: (value: Date) => any;
    onChangeView?: (mode: TModeView) => any;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => any;
    formatTittleYearMonth?: (year: number, month: number, decadeData?: number[]) => string | React.ReactNode;
    formartDayValue?: (day: number) => string | React.ReactNode;
}
export interface IMonthViewProps {
    labelMonths: string[];
    selected: number;
    isSameYear: boolean;
    setSelected: (value: number) => any;
}
export interface IDecadeViewProps {
    decadeData: number[];
    selected: number;
    setSelected: (value: number) => any;
}
export interface IValueCellProps {
    value: number;
    display?: number | string;
    isSelected?: boolean;
    neighbor?: boolean;
    setSelected: (value: number) => any;
}
