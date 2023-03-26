import { createSignal } from 'solid-js';
import css from './Counter.module.scss';

export const Counter = (props) => {
    const [showed, setShowed] = createSignal(false);

    const toggle = function () {
        setShowed(showed => !showed);
    }

    return (
        <h1 className={[css.container, showed() ? '' : css.hidden].join(' ')}>
            <div>Counter { `${showed()}` }</div>
            <button onClick={() => toggle()}>Toggle</button>
        </h1>
    );
}
