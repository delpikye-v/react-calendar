import React from 'react';
import { IDayBaseProps } from './WeekView';
export type TModeView = 'date' | 'month' | 'year';
export interface IWeekLabel {
    name: string;
    shortName: string;
    key?: number;
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
}
export interface IDatePickerProps extends IDayBaseProps {
    className?: string;
    labelMonthYearClassName?: string;
    weekClassName?: string;
    width?: string | number;
    height?: string | number;
    labelNext?: string | React.ReactNode;
    labelBack?: string | React.ReactNode;
    weekStart?: 'monday' | 'sunday';
    fitMonthDay?: boolean;
    notBeforeTime?: Date;
    notAfterTime?: Date;
    show?: boolean;
    showAnchor?: boolean;
    value?: Date;
    i18nLabelWeek?: IWeekLabel[];
    i18nLabelMonth?: string[];
    onSelectedValue?: (value: Date) => any;
    onChangeView?: (mode: TModeView) => any;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => any;
    formatTittleYearMonth?: (year: number, month: number, decadeData?: number[]) => string | React.ReactNode;
}
