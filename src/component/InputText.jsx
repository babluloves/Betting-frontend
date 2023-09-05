import React from "react";
import classNames from "classnames";

export function InputText(props) {
    return (
        <div className={props.containerClassName}>
            <label className={classNames("form-label", props.labelClassName)}>{props.labelName}</label>
            <input className={classNames("input-control", {
                "in-valid": props.invalid
            })}
                placeholder={props.placeHolder}
                value={props.value}
                onChange={props.onChange}
            />
            {props.invalid && <div className="invalid-error">{props.error}</div>}
            {props.helperText && <div>This is the helper text</div>}
        </div>
    )
}