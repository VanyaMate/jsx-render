import {jsxRenderMethod} from "./jsx/jsxMethodRender.js";
import {Counter} from "./src/Counter.jsx";
import {Popin} from "./src/Popin.jsx";

const root = document.querySelector('#app');
const root2 = document.querySelector('#app2');


/** @jsx jsxRenderMethod */
const App = () => {
    return (
        <div>
            Hello World<br/>
            <Counter counter={2}/>
        </div>
    );
}

root.append(<App/>)
root2.append(<Popin/>)