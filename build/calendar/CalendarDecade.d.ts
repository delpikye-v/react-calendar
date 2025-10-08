import React from "react";
export interface IDecadeViewProps {
    focusable?: boolean;
    decadeData: number[];
    selected: number;
    minYear: number;
    maxYear: number;
    setSelected: (value: number) => void;
}
declare const CalendarDecade: React.FC<IDecadeViewProps>;
export default CalendarDecade;
