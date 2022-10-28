
import { useState } from "react";

export default function ImcForm({ onSubmit, person }) {

    const [height, setHeight] = useState(0.00);
    const [weight, setWeight] = useState(0.00);

    const submit = (evt) => {
        evt.preventDefault();
        onSubmit(height, weight);
    }

    return (
        <form onSubmit={submit}>
            <div className="row">
                <label>Altura</label>
                <input id="altura"
                    placeholder="digite sua altura..."
                    value={height}
                    onChange={e => {
                        setHeight(e.target.value)
                    }}
                />
            </div>
            <div className="row">
                <label>Peso</label>
                <input id="peso"
                    placeholder="digite seu peso..."
                    value={weight}
                    onChange={e => {
                        setWeight(e.target.value)
                    }}
                />
            </div>
            <div className="row">
                <button
                    type="submit"
                    id="main-action"
                >
                    Calcular...
                </button>
            </div>
        </form>
    );
}