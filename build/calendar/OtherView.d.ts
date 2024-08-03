import React from 'react';
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
export declare const MonthView: React.FC<IMonthViewProps>;
export declare const DecadeView: React.FC<IDecadeViewProps>;
