import { render } from 'solid-js/web';
import {Counter} from "./components/Counter";

const root = document.querySelector('#app');

const App = () => {
    return (
        <h1>
            Hello world
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
            <Counter counter={5}/>
        </h1>
    );
};

if (root) {
    const dispose = render(() => <App/>, root);

    if (import.meta.hot) {
        import.meta.hot.accept();
        import.meta.hot.dispose(dispose);
    }
}