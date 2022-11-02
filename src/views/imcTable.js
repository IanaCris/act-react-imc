import { useEffect, useState } from "react";
import ImcCalculatorService from "../domain/services";

export default function ImcTableView() {
    const [ list, setList ] = useState([]);


    function listTable() {    
        const svc = new ImcCalculatorService();
        const res = svc.getTable((item) => {            
            setList(item);
        });
        return res;
    }

    useEffect(() => {
        listTable();
    });
   

    return (<table>
        { Object.values(list).map((resultImc, index) => <tr key={index}><td>{
            Object.keys(list)[index]
        }</td><td>{resultImc}</td></tr>) }
    </table>);
}