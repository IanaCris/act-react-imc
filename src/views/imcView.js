function translateImcToText(imcPerson) {
    return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
}

export default function imcView(props) {
    if (props.person === null || props.person === undefined)
            return <div class="result"></div>;

    return (
        <div class="result">
            <span>Seu IMC &eacute;: 
                <label id="imc">{translateImcToText(props.person)}</label>
            </span>
        </div>
    );
}