import { useContext } from "react";
import { PersonContext }  from "../contexts/PersonContextProvider";

export default function ImcView() {
    const { person } = useContext(PersonContext);

    function translateImcToText(imcPerson) {
        return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
    }

    if (person === null || person === undefined || person.imc === null || person.imc === undefined)
            return <div className="result"></div>;

    return (
        <div className="result">
            <span>Seu IMC &eacute;: 
                <label id="imc">{translateImcToText(person)}</label>
            </span>
        </div>
    );
}