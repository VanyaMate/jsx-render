import {jsxRenderMethod} from "../jsx/jsxMethodRender.js";

/** @jsx jsxRenderMethod */
export const Counter = (props) => {
    let color = false;

    const element = (
        <div id="counter" onClick={toggle}>
            Dec { props.counter }
        </div>
    );

    function toggle () {
        color = !color;
        element.style.color = color ? 'red' : 'black';
    }

    return element;
}