import React from 'react';
import { IWeekData, IWeekLabel } from './IFTypes';
export interface IDayBaseProps {
    readOnly?: boolean;
    neighborMonthClassName?: string;
    showToday?: boolean;
    todayClassName?: string;
    selectedClassName?: string;
    formartDayValue?: (day: number) => string | React.ReactNode;
}
export interface IDayOfWeeksProps extends IDayBaseProps {
    dayOfWeeks: IWeekData[][];
    handleChangeDate: (e: IWeekData) => void;
}
export interface IWeekViewProps extends IDayOfWeeksProps {
    weekLabels: IWeekLabel[];
    weekClassName?: string;
    onClickWeekLabel?: (weekLabel: IWeekLabel) => any;
}
export declare const DayOfWeeks: React.FC<IDayOfWeeksProps>;
declare const WeekView: React.FC<IWeekViewProps>;
export default WeekView;
