import React from 'react';
export interface IDecadeViewProps {
    decadeData: number[];
    selected: number;
    minYear: number;
    maxYear: number;
    setSelected: (value: number) => any;
}
declare const DecadeView: React.FC<IDecadeViewProps>;
export default DecadeView;
