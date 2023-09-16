import React, { useMemo } from "react";
import classNames from "classnames";

export function InputText(props) {
    return (
        <div className={props.containerClassName}>
            {props.labelName &&
                <label className={classNames("form-label", props.labelClassName)}>{props.labelName}</label>}
            <input className={classNames("input-control", {
                "in-valid": props.invalid
            })}
                id={props.name}
                name={props.name}
                placeholder={props.placeHolder}
                type="text"
                value={props.value || ""}
                onChange={props.onChange}
                onBlur={props.onBlur}
                autoComplete="off"
                disabled={props.isDisabled}
            />
            {props.invalid && <div className="invalid-error">{props.error}</div>}
            {props.helperText && <div>This is the helper text</div>}
        </div>
    )
}

export function InputTextWithRegex(props) {
    const regexValue = useMemo(() => {
        if (props.allowedInputRegex) {
            return new RegExp(props.allowedInputRegex);
        } else {
            return undefined;
        }
    }, [props.allowedInputRegex]);

    function onChangeHndlr(event) {
        const { value } = event.target;
        if (regexValue) {
            if (!value || regexValue.test(value)) {
                props.onChange(event);
            } else {
                return;
            }
        } else {
            props.onChange(event);
        }
    }

    return (
        <div className={props.containerClassName}>
            <label className={classNames("form-label", props.labelClassName)}>{props.labelName}</label>
            <input className={classNames("input-control", {
                "in-valid": props.invalid
            })}
                id={props.name}
                name={props.name}
                placeholder={props.placeHolder}
                type="text"
                value={props.value || ""}
                onChange={onChangeHndlr}
                onBlur={props.onBlur}
                autoComplete="off"
            />
            {props.invalid && <div className="invalid-error">{props.error}</div>}
            {props.helperText && <div>This is the helper text</div>}
        </div>
    )
}