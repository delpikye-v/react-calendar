import React from 'react';
export type TWeekStart = 'monday' | 'sunday' | 'saturday' | 'friday';
export type TModeView = 'date' | 'month' | 'year';
export interface IBaseYear {
    minYear?: number;
    maxYear?: number;
    notBeforeTime?: Date;
    notAfterTime?: Date;
    minimumDayCanLargeThanToday?: boolean;
}
export interface IDayBaseProps {
    readOnly?: boolean;
    neighborMonthClassName?: string;
    showToday?: boolean;
    todayClassName?: string;
    selectedClassName?: string;
    formartDayValue?: (day: number) => string | React.ReactNode;
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
    fitMonthDay?: boolean;
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
    fitMonthDay?: boolean;
    show?: boolean;
    showAnchor?: boolean;
    value?: Date;
    i18nLabelWeek?: IWeekLabel[];
    i18nLabelMonth?: string[];
    bookmarkDates?: IBookmarkDate[];
    showMonthYearSelection?: boolean;
    showNextBack?: boolean;
    rightNextBack?: boolean;
    showFooter?: boolean;
    showXClose?: boolean;
    xCloseIcon?: string | React.ReactNode;
    onSelectedValue?: (value: Date) => any;
    onChangeView?: (mode: TModeView) => any;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => any;
    formatTittleYearMonth?: (year: number, month: number, decadeData?: number[]) => string | React.ReactNode;
    formatSelectedDate?: (date: Date) => string | React.ReactNode;
}
export interface ICalendarNavProps {
    children: any;
    className?: string;
    disabled?: boolean;
    show?: boolean;
    index: number;
    handleNextBack: (valueChange: number) => any;
}
export interface IObject {
    [name: string]: any;
}
