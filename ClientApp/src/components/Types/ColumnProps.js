import { ReactElement } from 'react';


//Code from: https://medium.com/@thashwiniwattuhewa/generic-react-table-component-1407a6fc2179

export interface ColumnProps<T> {
    key: string;
    title: string | ReactElement;
    render?: (column: ColumnProps<T>, item: T) => ReactElement;
}