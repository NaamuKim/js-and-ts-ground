import * as React from 'react';
import {TableContext} from './Mine'
import {useContext, FC, memo} from 'react';
import Tr from './MineTr'

const Table = () =>{
    const {tableData} = useContext(TableContext);
    return (
        <table>
            {Array(tableData.length).fill(null).map((tr,i)=><Tr rowIndex={i}/>)}
        </table>
    )
}

export default Table;