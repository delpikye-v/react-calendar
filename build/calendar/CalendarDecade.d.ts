import React from 'react';
export interface IDecadeViewProps {
    decadeData: number[];
    selected: number;
    minYear: number;
    maxYear: number;
    setSelected: (value: number) => any;
}
/**
 * DecadeView component
 *
 * This component renders a matrix of years, grouped into rows of 3, with the
 * years in the current decade highlighted. The component takes the following
 */
declare const DecadeView: React.FC<IDecadeViewProps>;
export default DecadeView;
