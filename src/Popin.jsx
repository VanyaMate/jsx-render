import {jsxRenderMethod} from "../jsx/jsxMethodRender.js";

/** @jsx jsxRenderMethod */
export const Popin = () => {
    let opened = true;

    const element = (
        <div id="counter" onClick={toggle}>
            Popin
        </div>
    );

    function toggle () {
        opened = !opened;
        element.style.opacity = opened ? '1' : '.5';
    }

    return element;
}