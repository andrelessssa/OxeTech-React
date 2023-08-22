import React from "react";
import './select.css';

function Select(props){
    return(
      <div>
        <label className="label">
            {props.label}
        </label>
        <select>
          <option value="">Programação</option>
          <option value="">Front-End</option>
          <option value="">Data Science</option>
          <option value="">UX e Design</option>
          <option value="">Mobile</option>
          <option value="">Inovação e Gestão</option>
          </select>
      </div>
    )
}
export default Select;