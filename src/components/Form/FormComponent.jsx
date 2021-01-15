import React from 'react';
import "./form.css";

const FormComponent = ({text}) => {
    return (
        <form className="form-containt" onSubmit={(event) => {
            event.preventDefault();
            text(event.target.elements.contentType.value);
        }}>
            <select name="contentType" className="select-form">
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">general</option>
                <option value="health">health</option>
                <option value="science">science</option>
                <option value="sports">sports</option>
                <option value="technology">technology</option>
            </select>
            <button className="btn btn-primary" type="submit">Kiválaszt</button>
        </form>
    )
}

export default FormComponent;
